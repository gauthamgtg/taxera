import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, LineChart, Receipt, TrendingUp } from 'lucide-react';

const ICONS = {
  'income-tax-calculator': Receipt,
  'sip-calculator': LineChart,
  'mutual-fund-return-calculator': TrendingUp,
  'inflation-calculator': Calculator,
};

export function ToolCard({ tool }) {
  const Icon = ICONS[tool.slug] ?? Calculator;

  return (
    <Link
      to={`/tools/${tool.slug}`}
      className="group flex h-full flex-col rounded-[1.8rem] border border-blue-100 bg-white/82 p-6 shadow-[0_20px_50px_rgba(18,56,131,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-700">
          {tool.badge}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600/70">{tool.category}</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-blue-950">{tool.hubLabel}</h2>
        <p className="mt-3 text-sm leading-relaxed text-blue-900/70">{tool.hubDescription}</p>
      </div>

      <div className="mt-5 space-y-2">
        {tool.highlights.slice(0, 2).map((item) => (
          <div key={item} className="rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm text-blue-900/75">
            {item}
          </div>
        ))}
      </div>

      <div className="mt-auto pt-5">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors group-hover:text-blue-800">
          Open calculator
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
