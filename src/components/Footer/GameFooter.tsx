"use client";

import React from "react";
import { IoMdSettings } from "react-icons/io";
// import { TfiStatsUp } from "react-icons/tfi";
import { FaPaintBrush } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import Settings from "./Settings";
import SwitchTheme from "./SwitchTheme";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/Popover";

export interface GameFooterProps {
  toggleFairness: () => void;
  // openLiveStats: () => void;
}

function GameFooter({ toggleFairness }: GameFooterProps) {
  return (
    <div className="game-footer custom:max-w-full relative flex h-[63px] w-full max-w-[400px] min-w-[300px] items-center justify-between bg-[var(--bgGameFooter)]">
      <div className="left flex items-center gap-4 border-r border-[var(--bgFooterBtn)] pr-4 pl-4">
        {/* Settings Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <button
              data-tooltip-id="settings-tooltip"
              data-tooltip-content="Settings"
              type="button"
              className="relative"
            >
              <IoMdSettings
                size={24}
                className="cursor-pointer text-[var(--bgFooterBtn)] transition hover:text-[var(--bgFooterBtnHover)]"
              />
            </button>
          </PopoverTrigger>
          <PopoverContent side="top" arrow={true} className="h-fit w-fit p-0">
            <Settings />
          </PopoverContent>
        </Popover>
        <Tooltip id="settings-tooltip" place="top" />

        {/* Stats Button (no popover) */}
        {/* <button
          data-tooltip-id="stats-tooltip"
          data-tooltip-content="Open Live Stats"
          type="button"
          className="relative"
          onClick={openLiveStats}
        >
          <TfiStatsUp
            size={24}
            className="cursor-pointer text-[var(--bgFooterBtn)] transition hover:text-[var(--bgFooterBtnHover)]"
          />
        </button>
        <Tooltip id="stats-tooltip" place="top" /> */}

        {/* Theme Popover (example, you can use SwitchTheme inside Popover) */}
        <Popover>
          <PopoverTrigger asChild>
            <button
              data-tooltip-id="theme-tooltip"
              data-tooltip-content="Switch Themes"
              type="button"
              className="relative"
            >
              <FaPaintBrush
                size={20}
                className="cursor-pointer text-[var(--bgFooterBtn)] transition hover:text-[var(--bgFooterBtnHover)]"
              />
            </button>
          </PopoverTrigger>
          <PopoverContent side="top" arrow={true} className="h-fit w-fit p-0">
            <SwitchTheme />
          </PopoverContent>
        </Popover>
        <Tooltip id="theme-tooltip" place="top" />
      </div>

      <div className="right pr-4">
        <button
          className="fairness-btn cursor-pointer rounded bg-[var(--bgFairnessBtn)] px-4 py-2 text-sm font-semibold text-[var(--bgFairnessBtnColor)] transition hover:bg-[var(--bgFairnessBtnHover)]"
          onClick={toggleFairness}
        >
          Fairness
        </button>
      </div>
    </div>
  );
}

export default GameFooter;
