import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import type { ScriptableLineSegmentContext } from "chart.js";

const WIN_COLOR = "rgb(74, 222, 128)";
const WIN_COLOR_FILL = "rgba(74, 222, 128, 0.3)";
const LOSS_COLOR = "rgb(248, 113, 113)";
const LOSS_COLOR_FILL = "rgba(248, 113, 113, 0.3)";
const X_AXIS_COLOR = "#1e293b";
const POINT_HOVER_COLOR = "#fff";

export default function ProfitHistoryChart({
  profitHistory,
}: {
  profitHistory: number[];
}) {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = chartRef.current;
    if (!ctx) return;

    chartInstance.current?.destroy();

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: Array(profitHistory.length).fill(""),
        datasets: [
          {
            label: "Profit",
            data: profitHistory,
            fill: {
              target: "origin",
              above: WIN_COLOR_FILL,
              below: LOSS_COLOR_FILL,
            },
            cubicInterpolationMode: "monotone",
            segment: {
              borderColor: (ctx: ScriptableLineSegmentContext) => {
                const y0 = ctx.p0.parsed.y;
                const y1 = ctx.p1.parsed.y;
                if (y1 === 0) {
                  return y0 < 0 ? LOSS_COLOR : WIN_COLOR;
                }
                return y1 < 0 ? LOSS_COLOR : WIN_COLOR;
              },
            },
            pointRadius: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: POINT_HOVER_COLOR,
            pointHoverBorderColor: POINT_HOVER_COLOR,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animations: { y: { duration: 0 } },
        interaction: { intersect: false, mode: "index" },
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: {
          x: {
            border: { display: false },
            grid: { display: false },
            ticks: { display: false },
          },
          y: {
            border: { display: false },
            grid: {
              color: (ctx: { tick: { value: number } }) =>
                ctx.tick.value === 0 ? X_AXIS_COLOR : undefined,
              lineWidth: 2,
            },
            ticks: { display: false },
            grace: "1%",
          },
        },
        onHover: (_event: unknown, elements: { index: number }[]) => {
          if (elements.length && chartInstance.current) {
            const selectedPointIndex = elements[0].index;
            setHoveredValue(profitHistory[selectedPointIndex]);
          } else {
            setHoveredValue(null);
          }
        },
      },
    });

    return () => {
      chartInstance.current?.destroy();
      chartInstance.current = null;
    };
  }, [profitHistory]);

  return (
    <div className="relative rounded-md bg-slate-900 p-4 text-sm">
      <p className="font-medium text-slate-400">Profit History</p>
      <p
        className={
          "absolute font-semibold tabular-nums " +
          (hoveredValue !== null
            ? hoveredValue >= 0
              ? "text-green-400"
              : "text-red-400"
            : "")
        }
      >
        {hoveredValue !== null ? hoveredValue.toFixed(2) : ""}
      </p>
      <div className="mt-6 h-[11rem] w-[16rem]">
        <canvas ref={chartRef} onMouseLeave={() => setHoveredValue(null)} />
      </div>
    </div>
  );
}
