"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/provider";
import { ProjectCard } from "./ProjectCard";
import { IconArrowLeft, IconArrowRight } from "@/components/ui/Icons";

const AUTOPLAY_SPEED = 28; // Pixels per second, independent of display refresh rate.
const RESUME_DELAY = 1400;
const DRAG_THRESHOLD = 5;
const NAVIGATION_DURATION = 450;
const COPIES = [0, 1, 2] as const;

interface DragState {
  pointerId: number;
  startX: number;
  startY: number;
  lastX: number;
  moved: boolean;
}

interface NavigationState {
  from: number;
  distance: number;
  startedAt: number;
}

export function ProjectCarousel() {
  const { t } = useLanguage();
  const items = t.projects.items;
  const count = items.length;
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const stepRef = useRef(0);
  const dragRef = useRef<DragState | null>(null);
  const navigationRef = useRef<NavigationState | null>(null);
  const hoveredRef = useRef(false);
  const keyboardFocusRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const resumeAtRef = useRef(0);
  const suppressClickUntilRef = useRef(0);
  const paintRef = useRef<() => void>(() => {});
  const [dragging, setDragging] = useState(false);

  const postponeAutoplay = useCallback(() => {
    resumeAtRef.current = performance.now() + RESUME_DELAY;
  }, []);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const firstCard = track?.firstElementChild;
    if (!viewport || !track || !(firstCard instanceof HTMLElement) || !count) return;

    const cards = Array.from(track.children) as HTMLElement[];
    let cardWidth = 0;
    let viewportWidth = 0;
    let padding = 0;
    let inView = false;
    let previousTime = 0;
    let frame = 0;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const paint = () => {
      const cycle = stepRef.current * count;
      if (!cycle) return;
      const offset = ((positionRef.current % cycle) + cycle) % cycle;
      // Identical copies on both sides make wrapping invisible in either direction.
      const translation = -cycle - offset;
      track.style.transform = "translate3d(" + translation + "px, 0, 0)";
      cards.forEach((card, index) => {
        const left = index * stepRef.current + translation + padding;
        const hidden = left + cardWidth <= 0 || left >= viewportWidth;
        // Only visible copies enter keyboard navigation / the accessibility tree.
        if (card.inert !== hidden) card.inert = hidden;
        if (card.getAttribute("aria-hidden") !== String(hidden)) {
          card.setAttribute("aria-hidden", String(hidden));
        }
      });
    };
    paintRef.current = paint;

    const measure = () => {
      const oldStep = stepRef.current;
      cardWidth = firstCard.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      stepRef.current = cardWidth + gap;
      viewportWidth = viewport.clientWidth;
      padding = parseFloat(getComputedStyle(viewport).paddingLeft) || 0;
      if (oldStep) positionRef.current *= stepRef.current / oldStep;
      navigationRef.current = null;
      paint();
    };
    const updateMotion = () => {
      reducedMotionRef.current = motionQuery.matches;
      navigationRef.current = null;
      previousTime = 0;
    };
    const updateVisibility = () => {
      previousTime = 0;
      postponeAutoplay();
    };
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) || event.ctrlKey) return;
      event.preventDefault();
      navigationRef.current = null;
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? viewportWidth : 1;
      positionRef.current += event.deltaX * unit;
      postponeAutoplay();
      paint();
    };

    const tick = (time: number) => {
      // Avoid catching up with a jump after a sleeping/background tab.
      const elapsed = previousTime ? Math.min(time - previousTime, 50) : 0;
      previousTime = time;
      const navigation = navigationRef.current;
      if (navigation && !dragRef.current) {
        const progress = Math.min((time - navigation.startedAt) / NAVIGATION_DURATION, 1);
        positionRef.current = navigation.from + navigation.distance * (1 - (1 - progress) ** 3);
        if (progress === 1) navigationRef.current = null;
        paint();
      } else if (
        inView && !document.hidden && !reducedMotionRef.current &&
        !hoveredRef.current && !keyboardFocusRef.current && !dragRef.current &&
        time >= resumeAtRef.current
      ) {
        positionRef.current += AUTOPLAY_SPEED * elapsed / 1000;
        paint();
      }
      if (!navigationRef.current && stepRef.current) {
        const cycle = stepRef.current * count;
        positionRef.current = ((positionRef.current % cycle) + cycle) % cycle;
      }
      frame = requestAnimationFrame(tick);
    };

    measure();
    updateMotion();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(viewport);
    resizeObserver.observe(firstCard);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      previousTime = 0;
    });
    visibilityObserver.observe(viewport);
    motionQuery.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    viewport.addEventListener("wheel", onWheel, { passive: false });
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      motionQuery.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
      viewport.removeEventListener("wheel", onWheel);
      paintRef.current = () => {};
    };
  }, [count, postponeAutoplay]);

  const move = useCallback((direction: 1 | -1) => {
    if (dragRef.current || !stepRef.current) return;
    postponeAutoplay();
    if (reducedMotionRef.current) {
      positionRef.current += direction * stepRef.current;
      paintRef.current();
    } else {
      navigationRef.current = {
        from: positionRef.current,
        distance: direction * stepRef.current,
        startedAt: performance.now(),
      };
    }
  }, [postponeAutoplay]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) return;
    navigationRef.current = null;
    suppressClickUntilRef.current = 0;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      moved: false,
    };
    postponeAutoplay();
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const state = dragRef.current;
    if (!state || state.pointerId !== event.pointerId) return;
    if (!state.moved) {
      const dx = Math.abs(event.clientX - state.startX);
      const dy = Math.abs(event.clientY - state.startY);
      if (dx < DRAG_THRESHOLD) return;
      if (event.pointerType !== "mouse" && dy > dx) {
        dragRef.current = null;
        postponeAutoplay();
        return;
      }
      state.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      setDragging(true);
    }
    event.preventDefault();
    positionRef.current -= event.clientX - state.lastX;
    state.lastX = event.clientX;
    paintRef.current();
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const state = dragRef.current;
    if (!state || state.pointerId !== event.pointerId) return;
    dragRef.current = null;
    if (state.moved) suppressClickUntilRef.current = performance.now() + 350;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDragging(false);
    postponeAutoplay();
  };

  return (
    <div
      role="region"
      aria-label={t.projects.title}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") hoveredRef.current = true;
      }}
      onPointerLeave={(event) => {
        hoveredRef.current = false;
        if (dragRef.current && !dragRef.current.moved) endDrag(event);
        postponeAutoplay();
      }}
      onFocusCapture={(event) => {
        keyboardFocusRef.current = event.target.matches(":focus-visible");
        postponeAutoplay();
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          keyboardFocusRef.current = false;
          postponeAutoplay();
        }
      }}
    >
      <div
        ref={viewportRef}
        tabIndex={0}
        aria-label={t.projects.hintDesktop}
        className="-mx-5 overflow-hidden px-5 select-none sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10"
        style={{ touchAction: "pan-y pinch-zoom", cursor: dragging ? "grabbing" : "grab" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onLostPointerCapture={endDrag}
        onDragStart={(event) => event.preventDefault()}
        onClickCapture={(event) => {
          if (performance.now() < suppressClickUntilRef.current) {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            keyboardFocusRef.current = true;
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        <div ref={trackRef} className="flex gap-4 will-change-transform">
          {COPIES.flatMap((copy) => items.map((project) => (
            <div
              key={copy + "-" + project.id}
              aria-hidden={copy !== 1}
              inert={copy !== 1}
              className="w-[85%] shrink-0 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              <ProjectCard projectId={project.id} />
            </div>
          )))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-xs text-faint sm:hidden">{t.projects.hintMobile}</p>
        <p className="hidden text-xs text-faint sm:block">{t.projects.hintDesktop}</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label={t.projects.prevAria}
            className="grid size-10 place-items-center rounded-full bg-white/5 text-white ring-1 ring-inset ring-white/10 transition-colors hover:bg-white/10"
          >
            <IconArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label={t.projects.nextAria}
            className="grid size-10 place-items-center rounded-full bg-white/5 text-white ring-1 ring-inset ring-white/10 transition-colors hover:bg-white/10"
          >
            <IconArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
