import React, { useState } from "react";
import { BarChart3, RotateCcw } from "lucide-react";
import { DraggableWindow } from "./DraggableWindow";
import Profit from "./Profit";
import ProfitHistoryChart from "./ProfitHistoryChart";
import { Tooltip } from "react-tooltip";

type LiveStatsWindowProps = {
  open: boolean;
  onClose: () => void;
};

export default function LiveStatsWindow({
  open,
  onClose,
}: LiveStatsWindowProps) {
  const [profitHistory, setProfitHistory] = useState([0, 5, 10, 8, 12, 20, 15]);
  const [winRecords, setWinRecords] = useState([
    { profit: 5 },
    { profit: -2 },
    { profit: 7 },
    { profit: -1 },
  ]);

  const resetLiveStats = () => {
    setProfitHistory([0]);
    setWinRecords([]);
  };

  if (!open) return null;

  return (
    <DraggableWindow
      onClose={onClose}
      className="fixed right-8 bottom-8 z-40 w-[20rem]"
      title={
        <div className="flex items-center gap-2">
          <BarChart3 className="text-xl text-slate-300" />
          <p className="text-sm font-medium text-white">Live Stats</p>
        </div>
      }
      titleBarActions={
        <>
          <button
            onClick={resetLiveStats}
            className="bg-slate-800 px-5 py-3 text-slate-300 transition hover:bg-slate-700 active:bg-slate-600"
            aria-label="Reset Live Stats"
            data-tooltip-id="reset-stats-tooltip"
            data-tooltip-content="Reset Live Stats"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
          <Tooltip id="reset-stats-tooltip" place="top" />
        </>
      }
    >
      <div className="flex flex-col gap-4">
        <Profit winRecords={winRecords} />
        <ProfitHistoryChart profitHistory={profitHistory} />
      </div>
    </DraggableWindow>
  );
}
