import React, { useState } from "react";
import { LuInfinity } from "react-icons/lu";

function NumberOfBets() {
  const [value, setValue] = useState<number>(0);
  const showInfinity = value === 0;

  return (
    <div className="num-of-bets">
      <label
        htmlFor="num-of-bets"
        className="label flex items-center justify-between text-sm font-semibold text-[var(--bgBoxLabel)]"
      >
        Number Of Bets
      </label>
      <div className="relative flex-1">
        <input
          id="num-of-bets"
          type="text"
          min={0}
          step={1}
          value={value}
          onChange={(e) => {
            const v = e.target.value;
            if (v === "") setValue(0);
            else if (/^\d+$/.test(v)) setValue(Number(v));
          }}
          autoComplete="off"
          className={`w-full rounded-md border-2 border-[var(--bgBoxBorder)] bg-[var(--bgBox)] py-2 pl-3 text-sm text-[var(--bgBoxColor)] transition-colors hover:cursor-pointer hover:not-disabled:border-[var(--bgBoxBorderHover)] focus:border-[var(--bgBoxBorderHover)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
            showInfinity ? "pr-10" : "pr-3"
          }`}
        />
        {showInfinity && (
          <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[var(--bgBoxColor)]">
            <LuInfinity size={22} />
          </span>
        )}
      </div>
    </div>
  );
}

export default NumberOfBets;
