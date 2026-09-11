import type { ServiceItem } from "@/types";
import { DynamicIcon } from "./Icons";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  item: ServiceItem;
  className?: string;
}

export function ServiceCard({ item, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-line bg-card p-6 shadow-soft transition-shadow duration-200 hover:shadow-float",
        className,
      )}
    >
      <div className="grid size-11 place-items-center rounded-xl bg-brand-tint text-brand-300">
        <DynamicIcon name={item.icon} className="size-5" />
      </div>
      <h3 className="mt-4 text-[15px] font-semibold text-strong">{item.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-faint">{item.description}</p>
    </div>
  );
}