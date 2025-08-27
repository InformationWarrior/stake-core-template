import { twMerge } from "tailwind-merge";

function Amount() {
  const isBetAmountNegative = -1;
  const isBetExceedBalance = 1;
  return (
    <div className="amount">
      <div className="label flex items-center justify-between text-sm font-semibold text-[var(--bgBoxLabel)]">
        <label htmlFor="bet-amount">Bet Amount</label>
        <span>0.00 USD</span>
      </div>
      <div className="flex">
        <div className="flex-1">
          <input
            id="bet-amount"
            type="number"
            min={0}
            step={0.01}
            autoComplete="off"
            inputMode="decimal"
            className={twMerge(
              "w-full rounded-l-md border-2 border-[var(--bgBoxBorder)] bg-[var(--bgBox)] py-2 pr-2 pl-3 text-sm text-[var(--bgBoxColor)] transition-colors hover:cursor-pointer hover:not-disabled:border-[var(--bgBoxBorderHover)] focus:border-[var(--bgBoxBorderHover)] focus:outline-hidden disabled:cursor-not-allowed disabled:text-[var(--bgBoxLabelDisabled)] disabled:opacity-50",
              (isBetAmountNegative || isBetExceedBalance) &&
                "border-red-500 hover:not-disabled:border-red-400 focus:border-red-400"
            )}
            placeholder="Enter amount"
          />
        </div>
        <button className="touch-manipulation bg-[var(--bgBoxBtn)] px-3 text-sm font-bold text-[var(--bgBoxBtnText)] diagonal-fractions transition-colors outline-none hover:not-disabled:bg-[var(--bgBoxBtnHover)] active:not-disabled:bg-[var(--bgBoxBtnActive)] disabled:cursor-not-allowed disabled:opacity-50">
          1/2
        </button>
        <button className="relative touch-manipulation bg-[var(--bgBoxBtn)] px-3 text-sm font-bold text-[var(--bgBoxBtnText)] transition-colors outline-none after:absolute after:left-0 after:inline-block after:h-1/2 after:w-[2px] after:bg-[var(--bgBoxBtnText)] after:content-[''] hover:not-disabled:bg-[var(--bgBoxBtnHover)] active:not-disabled:bg-[var(--bgBoxBtnActive)] disabled:cursor-not-allowed disabled:opacity-50">
          2x
        </button>
        <button className="relative touch-manipulation rounded-r-md bg-[var(--bgBoxBtn)] px-3 text-sm font-bold text-[var(--bgBoxBtnText)] transition-colors outline-none after:absolute after:left-0 after:inline-block after:h-1/2 after:w-[2px] after:bg-[var(--bgBoxBtnText)] after:content-[''] hover:not-disabled:bg-[var(--bgBoxBtnHover)] active:not-disabled:bg-[var(--bgBoxBtnActive)] disabled:cursor-not-allowed disabled:opacity-50">
          Max
        </button>
      </div>
      {isBetAmountNegative && (
        <p className="absolute text-xs leading-5 text-red-400">
          This must be greater than or equal to 0.
        </p>
      )}
      {!isBetAmountNegative && isBetExceedBalance && (
        <p className="absolute text-xs leading-5 text-red-400">
          Can&apos;t bet more than your balance!
        </p>
      )}
    </div>
  );
}

export default Amount;
