import React, { useState } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";

function Settings() {
  const [soundOn, setSoundOn] = useState(true);
  const [musicOn, setMusicOn] = useState(true);
  const [soundVolume, setSoundVolume] = useState(70);
  const [musicVolume, setMusicVolume] = useState(70);

  return (
    <div className="w-56 space-y-3 p-4">
      <div className="flex items-center gap-2">
        <button
          className="rounded p-2 transition outline-none hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setSoundOn((v) => !v)}
          aria-label="Toggle sound"
        >
          {soundOn ? (
            <FiVolume2 className="text-xl text-[var(--bgVolume)]" />
          ) : (
            <FiVolumeX className="text-xl text-gray-400" />
          )}
        </button>
        <input
          type="range"
          min={0}
          max={100}
          value={soundVolume}
          onChange={(e) => setSoundVolume(Number(e.target.value))}
          disabled={!soundOn}
          className="flex-1 accent-[var(--bgVolSlider)] outline-none"
        />
      </div>
      <div className="flex items-center gap-2">
        <button
          className="rounded p-2 transition outline-none hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setMusicOn((v) => !v)}
          aria-label="Toggle music"
        >
          {musicOn ? (
            <GiSoundOn className="text-xl text-[var(--bgVolume)]" />
          ) : (
            <GiSoundOff className="text-xl text-gray-400" />
          )}
        </button>
        <input
          type="range"
          min={0}
          max={100}
          value={musicVolume}
          onChange={(e) => setMusicVolume(Number(e.target.value))}
          disabled={!musicOn}
          className="flex-1 accent-[var(--bgVolSlider)] outline-none"
        />
      </div>
    </div>
  );
}

export default Settings;
