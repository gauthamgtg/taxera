import { useState } from 'react';
import { BarChart3, Calculator, CheckCircle2, RefreshCcw } from 'lucide-react';
import { calculateToolBySlug, formatCurrency, formatPercentage, toolCalculationMetadata } from '../../utils/toolCalculations';

function InputField({ field, value, onChange }) {
  const commonClassName =
    'w-full rounded-[1.2rem] border border-blue-100 bg-white px-4 py-3 text-base text-blue-900 placeholder:text-blue-300 focus:border-blue-400 focus:outline-none';

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-blue-950">{field.label}</span>
      {field.type === 'select' ? (
        <select value={value} onChange={(event) => onChange(field.name, event.target.value)} className={commonClassName}>
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="number"
          value={value}
          min={field.min}
          max={field.max}
          step={field.step}
          placeholder={field.placeholder}
          onChange={(event) => onChange(field.name, event.target.value)}
          className={commonClassName}
        />
      )}
      {field.helper ? <span className="mt-2 block text-xs leading-relaxed text-blue-900/55">{field.helper}</span> : null}
    </label>
  );
}

function SummaryCard({ label, value, tone = 'default' }) {
  const toneClassName =
    tone === 'accent'
      ? 'border-blue-200 bg-blue-50 text-blue-950'
      : tone === 'positive'
        ? 'border-emerald-200 bg-emerald-50 text-emerald-950'
        : 'border-blue-100 bg-white text-blue-950';

  return (
    <div className={`min-w-0 rounded-[1.4rem] border p-4 ${toneClassName}`}>
      <p className="text-[11px] font-semibold uppercase leading-tight tracking-[0.16em] text-blue-700/60 [overflow-wrap:anywhere]">
        {label}
      </p>
      <p className="mt-2 text-xl font-bold tracking-tight text-balance text-current sm:text-2xl [overflow-wrap:anywhere]">
        {value}
      </p>
    </div>
  );
}

function WarningList({ warnings }) {
  if (!warnings?.length) return null;

  return (
    <div className="rounded-[1.3rem] border border-amber-200 bg-amber-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Assumptions & warnings</p>
      <div className="mt-3 space-y-2">
        {warnings.map((warning) => (
          <p key={warning} className="text-sm leading-relaxed text-amber-900/80">
            {warning}
          </p>
        ))}
      </div>
    </div>
  );
}

function IncomeTaxResults({ result }) {
  const regimes = [result.regimes.old, result.regimes.new];

  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <SummaryCard label="Gross income" value={formatCurrency(result.summary.grossIncome)} />
        <SummaryCard
          label="Recommended regime"
          value={result.summary.recommendedRegime === 'old' ? 'Old regime' : 'New regime'}
          tone="accent"
        />
        <SummaryCard label="Old regime tax" value={formatCurrency(result.regimes.old.totalTax)} />
        <SummaryCard label="New regime tax" value={formatCurrency(result.regimes.new.totalTax)} />
      </div>

      <div className="rounded-[1.5rem] border border-blue-100 bg-blue-50/60 p-4 text-sm font-semibold text-blue-900">
        {result.summary.taxDifferenceLabel}
      </div>

      <div className="grid gap-4">
        {regimes.map((regime) => (
          <div key={regime.label} className="min-w-0 rounded-[1.6rem] border border-blue-100 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{regime.label}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <SummaryCard label="Taxable income" value={formatCurrency(regime.taxableIncome)} />
              <SummaryCard label="Total tax" value={formatCurrency(regime.totalTax)} tone="positive" />
              <SummaryCard label="Deductions used" value={formatCurrency(regime.totalDeductionsUsed)} />
              <SummaryCard label="Effective tax rate" value={formatPercentage(regime.effectiveTaxRate)} />
            </div>
            <div className="mt-4 grid gap-2 text-sm text-blue-900/75">
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3">
                <span>Tax before rebate</span>
                <span className="font-semibold text-blue-950 [overflow-wrap:anywhere]">{formatCurrency(regime.baseTax)}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3">
                <span>Rebate</span>
                <span className="font-semibold text-blue-950 [overflow-wrap:anywhere]">{formatCurrency(regime.rebate)}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3">
                <span>Surcharge</span>
                <span className="font-semibold text-blue-950 [overflow-wrap:anywhere]">{formatCurrency(regime.surcharge)}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3">
                <span>Cess</span>
                <span className="font-semibold text-blue-950 [overflow-wrap:anywhere]">{formatCurrency(regime.cess)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SipResults({ result }) {
  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <SummaryCard label="Projected corpus" value={formatCurrency(result.summary.futureValue)} tone="positive" />
        <SummaryCard label="Total invested" value={formatCurrency(result.summary.investedAmount)} />
        <SummaryCard label="Estimated gain" value={formatCurrency(result.summary.estimatedGain)} />
        <SummaryCard label="Wealth multiple" value={`${result.summary.wealthMultiple.toFixed(2)}x`} tone="accent" />
      </div>

      <div className="rounded-[1.6rem] border border-blue-100 bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Yearly progress snapshot</p>
        <div className="mt-4 grid gap-3 md:hidden">
          {result.yearlySnapshots.map((snapshot) => (
            <div key={snapshot.month} className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 text-sm text-blue-900/78">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600/75">Year {snapshot.year}</p>
              <div className="mt-3 grid gap-2">
                <div className="flex items-center justify-between gap-3">
                  <span>Invested</span>
                  <span className="font-semibold text-blue-950">{formatCurrency(snapshot.investedAmount)}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Projected corpus</span>
                  <span className="font-semibold text-blue-950">{formatCurrency(snapshot.futureValue)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 hidden overflow-x-auto md:block">
          <table className="min-w-full text-left text-sm text-blue-900/78">
            <thead>
              <tr className="border-b border-blue-100 text-xs uppercase tracking-[0.2em] text-blue-600/70">
                <th className="px-0 py-3">Year</th>
                <th className="px-4 py-3">Invested</th>
                <th className="px-4 py-3">Projected corpus</th>
              </tr>
            </thead>
            <tbody>
              {result.yearlySnapshots.map((snapshot) => (
                <tr key={snapshot.month} className="border-b border-blue-50 last:border-b-0">
                  <td className="px-0 py-3 font-semibold text-blue-950">{snapshot.year}</td>
                  <td className="px-4 py-3">{formatCurrency(snapshot.investedAmount)}</td>
                  <td className="px-4 py-3">{formatCurrency(snapshot.futureValue)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function LumpsumResults({ result }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <SummaryCard label="Current value" value={formatCurrency(result.summary.currentValue)} tone="positive" />
      <SummaryCard label="Absolute gain" value={formatCurrency(result.summary.absoluteGain)} />
      <SummaryCard label="Absolute return" value={formatPercentage(result.summary.absoluteReturnPercent)} />
      <SummaryCard label="CAGR" value={formatPercentage(result.summary.cagr)} tone="accent" />
      <SummaryCard label="Wealth multiple" value={`${result.summary.wealthMultiple.toFixed(2)}x`} />
      <SummaryCard label="Original investment" value={formatCurrency(result.summary.investedAmount)} />
    </div>
  );
}

function InflationResults({ result }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <SummaryCard label="Future cost" value={formatCurrency(result.summary.futureCost)} tone="positive" />
      <SummaryCard label="Purchasing-power loss" value={formatCurrency(result.summary.purchasingPowerLoss)} />
      <SummaryCard label="Cumulative inflation" value={formatPercentage(result.summary.cumulativeInflationPercent)} />
      <SummaryCard label="Inflation factor" value={`${result.summary.inflationFactor.toFixed(2)}x`} tone="accent" />
      {result.summary.presentValueOfFutureGoal !== null ? (
        <SummaryCard label="Present value of future goal" value={formatCurrency(result.summary.presentValueOfFutureGoal)} />
      ) : null}
    </div>
  );
}

function GenericResults({ result }) {
  const cards = result.cards ?? [];
  const sections = result.sections ?? [];

  return (
    <div className="space-y-5">
      {cards.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {cards.map((card) => (
            <SummaryCard key={`${card.label}-${card.value}`} label={card.label} value={card.value} tone={card.tone} />
          ))}
        </div>
      ) : null}

      {result.callout ? (
        <div className="rounded-[1.5rem] border border-blue-100 bg-blue-50/60 p-4 text-sm font-semibold leading-relaxed text-blue-900">
          {result.callout}
        </div>
      ) : null}

      {sections.map((section) => (
        <div key={section.title} className="rounded-[1.6rem] border border-blue-100 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{section.title}</p>
          <div className="mt-4 grid gap-2 text-sm text-blue-900/75">
            {section.rows.map((row) => (
              <div key={`${section.title}-${row.label}`} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3">
                <span>{row.label}</span>
                <span className="font-semibold text-blue-950 [overflow-wrap:anywhere]">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ResultRenderer({ tool, result }) {
  if (!result) return null;

  if (result.cards) {
    return <GenericResults result={result} />;
  }

  if (tool.slug === 'income-tax-calculator') {
    return <IncomeTaxResults result={result} />;
  }

  if (tool.slug === 'sip-calculator') {
    return <SipResults result={result} />;
  }

  if (tool.slug === 'mutual-fund-return-calculator') {
    return <LumpsumResults result={result} />;
  }

  return <InflationResults result={result} />;
}

export function ToolCalculatorCard({ tool }) {
  const [values, setValues] = useState(tool.calculator.defaultValues);
  const resultColumnTitle = tool.slug === 'income-tax-calculator' ? 'Tax output and comparison' : 'Result summary and notes';
  const supplementalNote = tool.slug === 'income-tax-calculator'
    ? toolCalculationMetadata.notes[0]
    : tool.category.toLowerCase().includes('tax') || tool.category.toLowerCase().includes('gst')
      ? toolCalculationMetadata.notes[1]
      : toolCalculationMetadata.notes[2];

  const result = calculateToolBySlug(tool.slug, values);

  const handleChange = (name, value) => {
    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setValues(tool.calculator.defaultValues);
  };

  return (
    <div id="calculator" className="glass-panel min-w-0 rounded-[2rem] p-5 sm:p-7">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
        <div className="min-w-0 xl:col-span-2">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                <Calculator className="h-3.5 w-3.5" />
                Live calculator
              </span>
              <h2 className="text-2xl font-bold text-blue-950 sm:text-[2.2rem]">{tool.calculator.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-blue-900/74 sm:text-base">{tool.calculator.description}</p>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 transition-colors hover:border-blue-200 hover:bg-blue-50"
            >
              <RefreshCcw className="h-3.5 w-3.5" />
              Reset
            </button>
          </div>
        </div>

        <div className="min-w-0 space-y-4 xl:pr-2">
          <div className="rounded-[1.5rem] border border-blue-100 bg-white/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Inputs</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
              {tool.calculator.fields.map((field) => (
                <InputField key={field.name} field={field} value={values[field.name] ?? ''} onChange={handleChange} />
              ))}
            </div>
          </div>
        </div>

        <div className="min-w-0 space-y-4 xl:pl-2">
          <div className="rounded-[1.5rem] border border-blue-100 bg-white/90 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                <BarChart3 className="h-4 w-4" />
                {resultColumnTitle}
              </p>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                Live
              </span>
            </div>
            <div className="mt-4 min-w-0">
              <ResultRenderer tool={tool} result={result} />
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-blue-100 bg-blue-50/70 p-4 text-sm leading-relaxed text-blue-900/78">
            {tool.calculator.note}
          </div>
          <div className="rounded-[1.5rem] border border-blue-100 bg-white/85 p-4 text-sm leading-relaxed text-blue-900/74">
            {supplementalNote}
          </div>
          <WarningList warnings={result?.warnings} />
        </div>
      </div>
    </div>
  );
}
