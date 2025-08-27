"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import darkBgBoard from "@/assets/darkBgBoard.jpeg";
import lightBgBoard from "@/assets/lightBgBoard.jpeg";
import { ThemeContext } from "@/providers/ThemeProvider";

function Content() {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const bg = mounted && theme === "light" ? lightBgBoard : darkBgBoard;

  return (
    <div className="game-content custom:order-2 custom:min-h-[680px] relative order-1 flex min-h-[280px] w-full flex-grow flex-col justify-center overflow-hidden py-2 select-none">
      <Image
        src={bg}
        alt="board background"
        fill
        priority
        className="object-cover object-center"
      />
      <p
        className={`relative z-10 text-5xl text-white flex justify-center items-center`}
      >
        Game Content will come here.
      </p>
    </div>
  );
}

export default Content;
