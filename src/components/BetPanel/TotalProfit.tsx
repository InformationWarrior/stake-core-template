import React from "react";

interface TotalProfitsProps {
  currentMultiplier: number;
  currentProfit: number;
}

function TotalProfit({ currentMultiplier, currentProfit }: TotalProfitsProps) {
  return (
    <div className="total-profit">
      <div className="label flex items-center justify-between text-sm font-semibold text-[var(--bgBoxLabel)]">
        <label htmlFor="totalProfit">{`Total Profit (${currentMultiplier.toFixed(2)}x)`}</label>
        <span>{`${currentProfit.toFixed(2)} USD`}</span>
      </div>
      <div className="flex">
        <div className="flex-1">
          <div
            id="totalProfit"
            className="w-full rounded-md border-2 border-[var(--bgBoxBorder)] bg-[var(--bgBox)] py-2 pr-2 pl-3 text-sm text-[var(--bgBoxColor)] transition-colors hover:not-disabled:border-[var(--bgBoxBorderHover)] focus:border-[var(--bgBoxBorderHover)] focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
          >
            {currentProfit}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalProfit;
