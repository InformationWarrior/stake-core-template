"use client";

import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import BetPanel from "./BetPanel/BetPanel";
import Content from "./GameContent/Content";
import GameFooter from "./Footer/GameFooter";
import FairnessPanel from "./FairnessPanel/FairnessPanel";
// import Leaderboard from "./Leaderboard/Leaderboard";
// import LiveStatsWindow from "./LiveStatsWindow/LiveStatsWindow";

function Template() {
  const [isFairnessActive, setIsFairnessActive] = useState(false);
  // const [isLiveStatsOpen, setIsLiveStatsOpen] = useState(false);

  const toggleFairness = () => {
    setIsFairnessActive((v) => !v);
  };
  // const openLiveStats = () => setIsLiveStatsOpen(true);
  // const closeLiveStats = () => setIsLiveStatsOpen(false);

  return (
    <div className="Mines flex h-full min-h-screen w-full flex-col overflow-hidden bg-[var(--bgBody)]">
      <header>
        <Navbar buildVersion={1} buildDate={new Date()} />
      </header>

      <main className="content-wrapper custom:max-w-[1200px] mx-auto w-full">
        <div className="page-content mt-2 mb-12 flex flex-col items-center justify-between">
          <section className="game-layout flex w-full min-w-0 flex-col items-center justify-between">
            <div className="game-frame relative flex w-full min-w-0 flex-col items-center gap-1 select-none">
              <div className="content custom:flex-row custom:max-w-full flex w-full max-w-[400px] min-w-[300px] flex-grow flex-col gap-0.5 text-white">
                <BetPanel />
                <Content />
                {isFairnessActive && (
                  <div
                    className="fairness-panel custom:items-center absolute inset-0 z-80 flex items-start justify-center overflow-hidden bg-[var(--bgFairnessPanelWrapper)] p-4"
                    onClick={toggleFairness}
                  >
                    <div
                      className="pointer-events-auto w-[90vw] max-w-[480px] overflow-y-auto rounded-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FairnessPanel toggleFairness={toggleFairness} />
                    </div>
                  </div>
                )}
              </div>
              <GameFooter
                toggleFairness={toggleFairness}
                // openLiveStats={openLiveStats}
              />
            </div>
          </section>
          {/* <Leaderboard /> */}
        </div>
      </main>
      {/* <LiveStatsWindow open={isLiveStatsOpen} onClose={closeLiveStats} /> */}
    </div>
  );
}

export default Template;
