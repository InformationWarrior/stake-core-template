"use client";
import React from "react";
import Amount from "./Amount";
import Mode from "./Mode";
import Bet from "./Bet";
import MinesSelect from "./MinesSelect";
import TotalProfit from "./TotalProfit";
import RandomTile from "./RandomTile";
import NumberOfBets from "./NumberOfBets";
import { useAppSelector } from "@/redux/hooks";
import PercentageAdjuster from "./PercentageAdjuster";
import StopOnProfitLoss from "./StopOnProfitLoss";
import Risk from "./Risk";
import Row from "./Row";

type PanelMode = "manual" | "auto";

const ORDER: Record<PanelMode, Record<string, number>> = {
  manual: {
    Mode: 1,
    Amount: 2,
    MineSelect: 3,
    TotalProfit: 4,
    Risk: 5,
    Row: 6,
    RandomTile: 7,
    Bet: 99,
  },
  auto: {
    Mode: 1,
    Amount: 2,
    MineSelect: 3,
    NumberOfBets: 4,
    OnWin: 5,
    OnLoss: 6,
    StopOnProfit: 7,
    StopOnLoss: 8,
    Bet: 99,
  },
};

const ORDER_CLASS: Record<number, string> = {
  1: "order-[1]",
  2: "order-[2]",
  3: "order-[3]",
  4: "order-[4]",
  5: "order-[5]",
  6: "order-[6]",
  7: "order-[7]",
  8: "order-[8]",
  99: "order-[99]",
};

function BetPanel() {
  const { isManual, isAuto } = useAppSelector((state) => state.template);

  const modeKey: PanelMode = isAuto ? "auto" : "manual";
  const cls = (slot: string) => ORDER_CLASS[ORDER[modeKey][slot]];

  return (
    <div className="game-sidebar custom:order-1 custom:w-[350px] custom:max-w-[350px] order-2 flex min-h-0 w-full max-w-[400px] min-w-[300px] flex-col gap-3 bg-[var(--bgBetPanel)] p-3">
      <div
        className={
          isManual || isAuto ? "custom:order-[1] order-[99]" : cls("Mode")
        }
      >
        <Mode />
      </div>

      {/* Amount */}
      <div className={cls("Amount")}>
        <Amount />
      </div>

      {/* Manual-only (visible after bet placed) */}
      {isManual && (
        <>
          {/* MineSelect */}
          <div className={cls("MineSelect")}>
            <MinesSelect label="Mines" />
          </div>

          <div className={cls("TotalProfit")}>
            <TotalProfit currentMultiplier={0.0} currentProfit={0.0} />
          </div>

          <div className={cls("Risk")}>
            <Risk />
          </div>

          <div className={cls("Row")}>
            <Row />
          </div>

          <div className={cls("RandomTile")}>
            <RandomTile />
          </div>
        </>
      )}

      {/* Auto-only */}
      {isAuto && (
        <>
          <div className={cls("NumberOfBets")}>
            <NumberOfBets />
          </div>

          <div className={cls("OnWin")}>
            <PercentageAdjuster label="On Win (%)" />
          </div>

          <div className={cls("OnLoss")}>
            <PercentageAdjuster label="On Loss (%)" />
          </div>

          <div className={cls("StopOnProfit")}>
            <StopOnProfitLoss label="Stop on Profit" />
          </div>

          <div className={cls("StopOnLoss")}>
            <StopOnProfitLoss label="Stop on Loss" />
          </div>
        </>
      )}

      <div
        className={
          isManual || isAuto ? "custom:order-[99] order-[1]" : cls("Bet")
        }
      >
        <Bet />
      </div>
    </div>
  );
}

export default BetPanel;
