import React from "react";
import { useAppSelector } from "@/redux/hooks";

function WinPopUp() {
  const { isAuto } = useAppSelector((state) => state.template);
  const title = isAuto ? "Auto-Bet Round Complete!" : "You Cashed Out!";
  const profitLabel = isAuto ? "Round Profit" : "Total Profit";
  const multLabel = isAuto ? "Round Multiplier" : "Final Multiplier";

  return (
    <div className="animate-popIn absolute top-1/2 left-1/2 z-50 w-[300px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-2xl border-4 border-[var(--bgPopUpBorder)] bg-[var(--bgPopUp)] px-8 py-6 text-center shadow-2xl">
      <h4 className="mb-2 text-xl font-bold text-[var(--bgPopUpTitle)]">
        {title}
      </h4>
      <p className="mb-1 text-lg text-[var(--bgPopUpColor)]">
        {profitLabel}: <strong>{(123.45).toFixed(2)}</strong>
      </p>
      <p className="text-lg text-[var(--bgPopUpColor)]">
        {multLabel}: <strong>{(123.45).toFixed(2)}x</strong>
      </p>
      <style>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.8);}
          100% { opacity: 1; transform: scale(1);}
        }
        .animate-popIn {
          animation: popIn 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
}

export default WinPopUp;
