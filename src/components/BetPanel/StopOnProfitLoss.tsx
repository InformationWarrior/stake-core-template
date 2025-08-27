import React from "react";

interface StopOnProfitLossProps {
  label: string;
}

function StopOnProfitLoss({ label }: StopOnProfitLossProps) {
  return (
    <div className="stop-profit-loss">
      <div className="label flex items-center justify-between text-sm font-semibold text-[var(--bgBoxLabel)]">
        <label>{label}</label>
        <span>${0.0}</span>
      </div>
      <div className="relative flex-1">
        <input
          type="text"
          min={0}
          step={0.01}
          placeholder="Enter amount"
          className="w-full rounded-md border-2 border-[var(--bgBoxBorder)] bg-[var(--bgBox)] py-2 pr-2 pl-3 text-sm text-[var(--bgBoxColor)] transition-colors hover:cursor-pointer hover:not-disabled:border-[var(--bgBoxBorderHover)] focus:border-[var(--bgBoxBorderHover)] focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </div>
  );
}

export default StopOnProfitLoss;
