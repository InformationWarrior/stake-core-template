import React from "react";

function RandomTile() {
  return (
    <button className="custom:block random-tile hidden w-full rounded-md border-2 border-[var(--bgBoxBorder)] bg-[var(--bgBox)] py-2 pr-2 pl-3 text-sm text-[var(--bgBoxColor)] transition-colors hover:cursor-pointer hover:not-disabled:border-[var(--bgBoxBorderHover)] focus:outline-hidden active:scale-95 active:bg-[var(--bgBoxBtnActive)] disabled:cursor-not-allowed disabled:opacity-50">
      Pick random tile
    </button>
  );
}

export default RandomTile;
