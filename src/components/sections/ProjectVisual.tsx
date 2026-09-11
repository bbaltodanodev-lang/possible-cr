import Image from "next/image";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const accentStyles: Record<string, { strong: string; soft: string; dot: string }> = {
  brand: { strong: "bg-brand-gradient", soft: "bg-brand-100", dot: "bg-brand-400" },
  amber: { strong: "bg-amber-500", soft: "bg-amber-100", dot: "bg-amber-300" },
  emerald: { strong: "bg-emerald-600", soft: "bg-emerald-100", dot: "bg-emerald-400" },
  slate: { strong: "bg-slate-600", soft: "bg-slate-200", dot: "bg-slate-400" },
};

const bars = ["w-2/3", "w-1/2", "w-3/4", "w-2/5"];

function InstitutionalVisual({ accent }: { accent: string }) {
  const a = accentStyles[accent];
  return (
    <div className="grid h-full grid-rows-[auto_1fr] bg-card">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className={cn("size-3 rounded-full", a.dot)} />
        <span className="h-2 flex-1 rounded-full bg-white/8" />
        <span className="h-3 rounded-full bg-white/8 px-3 py-1" />
        <span className={cn("h-3 w-12 rounded-full", a.soft)} />
      </div>
      <div className="space-y-3 p-5">
        <div className={cn("h-3.5 w-2/3 rounded-full", a.strong)} />
        <div className="h-2 w-1/3 rounded-full bg-white/15" />
        <div className="h-2 w-1/2 rounded-full bg-white/8" />
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          <div className={cn("h-11 rounded-lg", a.soft)} />
          <div className={cn("h-11 rounded-lg", a.soft)} />
          <div className={cn("h-11 rounded-lg", a.soft)} />
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className={cn("h-2 w-16 rounded-full", a.strong)} />
          <span className="h-2 w-10 rounded-full bg-white/15" />
          <span className="h-2 w-12 rounded-full bg-white/15" />
          <span className="h-2 w-8 rounded-full bg-white/15" />
        </div>
      </div>
    </div>
  );
}

function RestaurantVisual({ accent }: { accent: string }) {
  const a = accentStyles[accent];
  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto] bg-ink-900 p-5">
      <div className="flex justify-between">
        <span className="h-2.5 w-14 rounded-full bg-white/80" />
        <span className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-1.5 w-6 rounded-full bg-white/25" />
          ))}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <span className={cn("h-8 w-24 rounded-full", a.strong)} />
        <span className="h-2 w-40 rounded-full bg-white/40" />
        <span className="h-2 w-52 rounded-full bg-white/20" />
        <span className="mt-2 flex gap-1.5">
          {bars.map((w, i) => (
            <span key={i} className={cn("h-8 rounded-lg bg-white/10", w)} />
          ))}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className={cn("h-4 w-20 rounded-full", a.strong)} />
        <span className="h-4 w-12 rounded-full bg-white/25" />
      </div>
    </div>
  );
}

function LocalVisual({ accent }: { accent: string }) {
  const a = accentStyles[accent];
  return (
    <div className="grid h-full grid-cols-[1.1fr_1fr] bg-card">
      <div className={cn("h-full min-h-full", a.soft)} />
      <div className="space-y-3 p-5">
        <span className={cn("block h-3 w-16 rounded-full", a.strong)} />
        <span className="block h-2 w-full rounded-full bg-white/15" />
        <span className="block h-2 w-4/5 rounded-full bg-white/8" />
        <span className="block h-2 w-3/5 rounded-full bg-white/8" />
        <div className="mt-4 space-y-2">
          <span className="block h-4 w-24 rounded-full bg-white/8" />
          <span className="block h-4 w-20 rounded-full bg-white/8" />
        </div>
        <span className={cn("block h-4 w-28 rounded-full", a.strong)} />
      </div>
    </div>
  );
}

export function ProjectVisual({ project, altText }: { project: Project; altText?: string }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={altText ?? `Vista del proyecto ${project.name}`}
        fill
        sizes="(min-width: 1280px) 406px, (min-width: 1024px) 35vw, (min-width: 640px) 52vw, 89vw"
        className={project.imageFit === "contain" ? "object-contain" : "object-cover"}
        quality={100}
        unoptimized
        draggable={false}
        loading="lazy"
      />
    );
  }

  const visualProps = { accent: project.accent ?? "brand" };
  return (
    <div aria-hidden="true" className="relative h-full w-full">
      {(project.visual === "institutional" || !project.visual) && (
        <InstitutionalVisual {...visualProps} />
      )}
      {project.visual === "restaurant" && <RestaurantVisual {...visualProps} />}
      {project.visual === "local" && <LocalVisual {...visualProps} />}
    </div>
  );
}
