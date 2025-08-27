import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { twMerge } from "tailwind-merge";

function Bet() {
  const { isAuto } = useAppSelector((state) => state.template);
  const text = isAuto ? "Start Autobet" : "Bet";
  return (
    <div className="flex flex-col">
      <button
        className={twMerge(
          "touch-manipulation rounded-md bg-[var(--bgBetBtn)] py-3 font-semibold text-[var(--bgBetBtnTxt)] transition-colors outline-none hover:bg-[var(--bgBetBtnHover)] active:bg-[var(--bgBetBtn)] disabled:bg-[var(--bgBetBtnDisable)] disabled:text-[var(--bgBetBtnTxtDisable)]"
        )}
      >
        {text}
      </button>
    </div>
  );
}

export default Bet;
