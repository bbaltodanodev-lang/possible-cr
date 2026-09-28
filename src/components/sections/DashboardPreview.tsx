"use client";

import { useLanguage } from "@/i18n/provider";
import { cn } from "@/lib/utils";

function StatCard({
  label,
  value,
  change,
  trend,
  className,
}: {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  className?: string;
}) {
  return (
    <div className={cn("rounded-xl border border-line bg-card p-4", className)}>
      <p className="text-[11px] font-medium text-faint">{label}</p>
      <p className="mt-1.5 truncate text-lg font-bold tracking-tight text-strong">{value}</p>
      <span
        className={cn(
          "mt-1 inline-flex items-center gap-1 text-[11px] font-semibold",
          trend === "up" ? "text-emerald-400" : "text-rose-400",
        )}
      >
        {trend === "up" ? "▲" : "▼"} {change}
      </span>
    </div>
  );
}

function LineChart({ ariaLabel }: { ariaLabel: string }) {
  return (
    <svg
      viewBox="0 0 320 140"
      className="h-full w-full"
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <linearGradient id="possible-line-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5C64F" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F5C64F" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[28, 56, 84, 112].map((y) => (
        <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#23234A" strokeWidth="1" />
      ))}
      <polyline
        points="0,104 32,88 64,96 96,70 128,78 160,52 192,64 224,44 256,52 288,32 320,40"
        fill="none"
        stroke="#F5C64F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon
        points="0,104 32,88 64,96 96,70 128,78 160,52 192,64 224,44 256,52 288,32 320,40 320,140 0,140"
        fill="url(#possible-line-fill)"
      />
      <polyline
        points="0,120 32,112 64,116 96,104 128,110 160,96 192,102 224,88 256,94 288,80 320,86"
        fill="none"
        stroke="#E46D33"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

function BarChart({ ariaLabel }: { ariaLabel: string }) {
  const bars = [5, 3, 4, 6, 2, 4];
  return (
    <svg
      viewBox="0 0 200 120"
      className="h-full w-full"
      role="img"
      aria-label={ariaLabel}
    >
      {[30, 60, 90].map((y) => (
        <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#23234A" strokeWidth="1" />
      ))}
      {bars.map((h, i) => (
        <rect
          key={i}
          x={20 + i * 30}
          y={110 - h * 15}
          width="18"
          height={h * 15}
          rx="3"
          fill={i % 2 === 0 ? "#F5C64F" : "#8924B2"}
        />
      ))}
    </svg>
  );
}

export function DashboardPreview({ className }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-line bg-surface shadow-float",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-line bg-card px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-rose-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="hidden rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-faint sm:block">
          {t.dashboard.demoBadge}
        </span>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-brand-tint px-2.5 py-1 text-[11px] font-semibold text-brand-300">
            {t.dashboard.rangeBadge}
          </span>
          <span className="grid size-7 place-items-center rounded-full bg-brand-gradient text-[11px] font-bold text-white">
            P
          </span>
        </div>
      </div>

      <div className="flex">
        <aside
          aria-hidden="true"
          className="hidden w-44 shrink-0 flex-col gap-1 border-r border-line bg-card p-3 md:flex"
        >
          <span className="mb-2 grid size-8 place-items-center rounded-lg bg-brand-gradient text-[11px] font-bold text-white">
            P
          </span>
          {t.dashboard.sidebar.map((item, i) => (
            <span
              key={item}
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-medium",
                i === 0 ? "bg-brand-tint text-brand-300" : "text-faint",
              )}
            >
              {item}
            </span>
          ))}
        </aside>

        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {t.dashboard.stats.map((stat) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                change={stat.change}
                trend={stat.trend as "up" | "down"}
              />
            ))}
          </div>

          <div className="mt-4 grid gap-3 lg:grid-cols-[1.6fr_1fr]">
            <div className="rounded-xl border border-line bg-card p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-body">{t.dashboard.incomeExpenses}</p>
                <span className="text-[10px] text-faint">{t.dashboard.monthly}</span>
              </div>
              <div className="mt-3 h-32">
                <LineChart ariaLabel={t.dashboard.ariaLine} />
              </div>
            </div>
            <div className="rounded-xl border border-line bg-card p-4">
              <p className="text-xs font-semibold text-body">{t.dashboard.expenseSplit}</p>
              <div className="mt-3 h-32">
                <BarChart ariaLabel={t.dashboard.ariaBars} />
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 lg:grid-cols-[1.6fr_1fr]">
            <div className="rounded-xl border border-line bg-card p-4">
              <p className="text-xs font-semibold text-body">{t.dashboard.transactions}</p>
              <table className="mt-3 w-full text-left text-[11px]">
                <thead>
                  <tr className="text-faint">
                    <th className="pb-2 pr-2 font-medium">{t.dashboard.table.date}</th>
                    <th className="pb-2 pr-2 font-medium">{t.dashboard.table.concept}</th>
                    <th className="hidden pb-2 pr-2 font-medium sm:table-cell">
                      {t.dashboard.table.category}
                    </th>
                    <th className="pb-2 text-right font-medium">{t.dashboard.table.amount}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.dashboard.rows.map((row) => (
                    <tr key={row.concept} className="border-t border-line text-body">
                      <td className="py-2 pr-2 text-faint">{row.date}</td>
                      <td className="py-2 pr-2 font-medium text-strong">{row.concept}</td>
                      <td className="hidden py-2 pr-2 text-faint sm:table-cell">{row.category}</td>
                      <td
                        className={cn(
                          "py-2 text-right font-semibold",
                          row.positive ? "text-emerald-400" : "text-rose-400",
                        )}
                      >
                        {row.positive ? "+" : "−"}
                        {row.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-xl border border-line bg-card p-4">
              <p className="text-xs font-semibold text-body">{t.dashboard.recentActivity}</p>
              <ul className="mt-3 space-y-3">
                {t.dashboard.activity.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-300">
                      <span aria-hidden="true">✓</span>
                    </span>
                    <span className="text-[11px] font-medium text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
