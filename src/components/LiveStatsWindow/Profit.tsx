import React from "react";
import { twMerge } from "tailwind-merge";

export default function Profit({
  winRecords,
}: {
  winRecords: Array<{ profit: number }>;
}) {
  // Total profit, win/loss count, and total wagered
  const profit = winRecords.reduce((acc, { profit }) => acc + profit, 0);
  const wagered = winRecords.reduce(
    (acc, { profit }) => acc + Math.abs(profit),
    0,
  );
  const wins = winRecords.filter(({ profit }) => profit >= 0).length;
  const losses = winRecords.filter(({ profit }) => profit < 0).length;

  return (
    <div className="flex rounded-md bg-slate-900 p-4 text-sm">
      <div className="flex-1 flex-col">
        <div>
          <p className="font-medium text-slate-400">Profit</p>
          <p
            className={twMerge(
              "font-semibold tabular-nums",
              profit >= 0 ? "text-green-400" : "text-red-400",
            )}
          >
            {profit.toFixed(8)}
          </p>
        </div>
        <div>
          <p className="font-medium text-slate-400">Wagered</p>
          <p className="font-semibold text-slate-300 tabular-nums">
            {wagered.toFixed(8)}
          </p>
        </div>
      </div>
      <div className="mx-4 w-0.5 bg-slate-600" aria-hidden="true"></div>
      <div className="flex-1 space-y-2">
        <div>
          <p className="font-medium text-slate-400">Wins</p>
          <p className="font-semibold text-green-400 tabular-nums">{wins}</p>
        </div>
        <div>
          <p className="font-medium text-slate-400">Losses</p>
          <p className="font-semibold text-red-400 tabular-nums">{losses}</p>
        </div>
      </div>
    </div>
  );
}
