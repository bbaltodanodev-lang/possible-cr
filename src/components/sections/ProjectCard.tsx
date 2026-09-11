"use client";

import { useRef } from "react";
import { useLanguage } from "@/i18n/provider";
import { projects } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";
import { IconExternalLink } from "@/components/ui/Icons";

export function ProjectCard({ projectId }: { projectId: string }) {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  const project = projects.find((p) => p.id === projectId);
  const item = t.projects.items.find((i) => i.id === projectId);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <article
      ref={ref}
      onMouseMove={handleMouseMove}
      className="group project-card relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-card shadow-soft transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(138,0,255,0.25)]"
    >
      {/* Glow border — solo visible en hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[5] rounded-[1.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          padding: "1.5px",
          background:
            "linear-gradient(135deg, #168bff, #4a00d9, #b000a8, #ef0ab9, #ff167a, #168bff)",
          backgroundSize: "300% 300%",
          animation: "bm-border-spin 2s linear infinite",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          boxShadow:
            "0 0 20px rgba(22,139,255,0.4), 0 0 40px rgba(239,10,185,0.3), 0 0 60px rgba(138,0,255,0.2)",
        }}
      />

      {/* Spotlight cursor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(380px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgb(138 0 255 / 0.12), transparent 65%)",
        }}
      />

      {project ? (
        <div className="relative z-[2] aspect-[16/10] overflow-hidden border-b border-white/[0.06]">
          <div
            className={`relative h-full transition-transform duration-500 ease-out ${
              project.imageFit === "contain"
                ? "scale-[0.96] group-hover:scale-100"
                : "group-hover:scale-[1.04]"
            }`}
          >
            <ProjectVisual project={project} altText={item?.name} />
          </div>
        </div>
      ) : null}
      <div className="relative z-[2] flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">
          {item?.category ?? ""}
        </p>
        <h3 className="mt-2 text-lg font-bold tracking-tight text-strong transition-colors duration-300 group-hover:text-white">
          {item?.name ?? project?.name ?? ""}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-body">{item?.description ?? ""}</p>
        {project?.technologies && project.technologies.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-body ring-1 ring-inset ring-white/10 transition-colors duration-200 group-hover:ring-brand-400/30"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
        {project?.url ? (
          <div className="mt-5">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors hover:text-brand-200"
            >
              {t.projects.viewProject}
              <IconExternalLink className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
