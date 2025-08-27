// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// // Data imports
// import { statsData } from "@/utils/statsData";
// import { allBets } from "@/utils/allBets";
// import { highRollerData } from "@/utils/highRollerData";
// import { raceLeaderboardData } from "@/utils/raceLeaderboardData";

// // Medal icon imports
// import rank1 from "@/assets/rank1.png";
// import rank2 from "@/assets/rank2.png";
// import rank3 from "@/assets/rank3.png";

// // ---- Type Definitions ----
// type MyBetRow = {
//   game: string;
//   time: string;
//   betAmount: number;
//   multiplier: number;
//   payout: number;
// };

// type AllBetRow = {
//   game: string;
//   user: string;
//   time: string;
//   betAmt: number;
//   multiplier: number;
//   payout: number;
// };

// type HighRollerRow = AllBetRow;

// type RaceLbRow = {
//   rank?: string; // computed for display
//   user: string;
//   wagered: number;
//   price: number;
// };

// type TabKey = "myBets" | "allBets" | "highRoll" | "raceLb";

// // ---- Constants ----
// const tabs: { key: TabKey; label: string }[] = [
//   { key: "myBets", label: "My Bets" },
//   { key: "allBets", label: "All Bets" },
//   { key: "highRoll", label: "High Rollers" },
//   { key: "raceLb", label: "Race Leaderboard" },
// ];

// // Helper to safely parse number or fallback to 0
// const toNumber = (v: string | number): number =>
//   typeof v === "number" ? v : parseFloat(v) || 0;

// function normalizeMyBets(data: any[]): MyBetRow[] {
//   return data.map((row) => ({
//     ...row,
//     betAmount: toNumber(row.betAmount),
//     multiplier: toNumber(row.multiplier),
//     payout: toNumber(row.payout),
//   }));
// }

// function normalizeAllBets(data: any[]): AllBetRow[] {
//   return data.map((row) => ({
//     ...row,
//     betAmt: toNumber(row.betAmt),
//     multiplier: toNumber(row.multiplier),
//     payout: toNumber(row.payout),
//   }));
// }

// function normalizeHighRoll(data: any[]): HighRollerRow[] {
//   return data.map((row) => ({
//     ...row,
//     betAmt: toNumber(row.betAmt),
//     multiplier: toNumber(row.multiplier),
//     payout: toNumber(row.payout),
//   }));
// }

// function normalizeRaceLb(data: any[]): RaceLbRow[] {
//   return data.map((row) => ({
//     ...row,
//     wagered: toNumber(row.wagered),
//     price: toNumber(row.price),
//   }));
// }

// const dataMap: Record<
//   TabKey,
//   MyBetRow[] | AllBetRow[] | HighRollerRow[] | RaceLbRow[]
// > = {
//   myBets: normalizeMyBets(statsData),
//   allBets: normalizeAllBets(allBets),
//   highRoll: normalizeHighRoll(highRollerData),
//   raceLb: normalizeRaceLb(raceLeaderboardData),
// };

// const ordinal = (n: number) => {
//   const s = ["th", "st", "nd", "rd"],
//     v = n % 100;
//   return n + (s[(v - 20) % 10] || s[v] || s[0]);
// };

// const medalMap: Record<string, { src: string }> = {
//   "1st": rank1,
//   "2nd": rank2,
//   "3rd": rank3,
// };

// const columnsMap: Record<TabKey, { key: string; label: string }[]> = {
//   myBets: [
//     { key: "game", label: "Game" },
//     { key: "time", label: "Time" },
//     { key: "betAmount", label: "Bet Amount" },
//     { key: "multiplier", label: "Multiplier" },
//     { key: "payout", label: "Payout" },
//   ],
//   allBets: [
//     { key: "game", label: "Game" },
//     { key: "user", label: "User" },
//     { key: "time", label: "Time" },
//     { key: "betAmt", label: "Bet Amount" },
//     { key: "multiplier", label: "Multiplier" },
//     { key: "payout", label: "Payout" },
//   ],
//   highRoll: [
//     { key: "game", label: "Game" },
//     { key: "user", label: "User" },
//     { key: "time", label: "Time" },
//     { key: "betAmt", label: "Bet Amount" },
//     { key: "multiplier", label: "Multiplier" },
//     { key: "payout", label: "Payout" },
//   ],
//   raceLb: [
//     { key: "rank", label: "Rank" },
//     { key: "user", label: "User" },
//     { key: "wagered", label: "Wagered" },
//     { key: "price", label: "Prize" },
//   ],
// };

// const dropDownOptions = [10, 20, 30, 40];

// // ---- Component ----
// export default function Leaderboard() {
//   const [rowsToShow, setRowsToShow] = useState(10);
//   const [activeTab, setActiveTab] = useState<TabKey>("myBets");

//   // Strongly type currentData based on activeTab
//   let currentData: MyBetRow[] | AllBetRow[] | HighRollerRow[] | RaceLbRow[] =
//     dataMap[activeTab].slice(0, rowsToShow);

//   // Add ordinal rank for Race Leaderboard
//   if (activeTab === "raceLb") {
//     currentData = (currentData as RaceLbRow[]).map((row, idx) => ({
//       rank: ordinal(idx + 1),
//       ...row,
//     }));
//   }

//   const currentCols = columnsMap[activeTab];

//   return (
//     <section className="leader-board mt-4 hidden w-full justify-center md:flex">
//       <div className="flex w-full flex-col overflow-hidden rounded-lg bg-zinc-900/90 shadow-lg">
//         {/* Header */}
//         <header className="flex flex-col gap-2 bg-zinc-800 px-4 py-3 md:flex-row md:items-center md:justify-between">
//           <div className="flex overflow-x-auto rounded-full bg-zinc-700/80 p-1">
//             {tabs.map(({ key, label }) => (
//               <button
//                 key={key}
//                 className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
//                   activeTab === key
//                     ? "bg-yellow-500 text-zinc-900 shadow"
//                     : "text-zinc-200 hover:bg-zinc-700"
//                 } `}
//                 onClick={() => setActiveTab(key)}
//               >
//                 {label}
//               </button>
//             ))}
//           </div>
//           <div className="flex items-center">
//             <select
//               className="ml-2 rounded border border-zinc-600 bg-zinc-700 px-2 py-1 text-sm text-zinc-200"
//               value={rowsToShow}
//               onChange={(e) => setRowsToShow(Number(e.target.value))}
//             >
//               {dropDownOptions.map((opt) => (
//                 <option key={opt} value={opt}>
//                   {opt}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </header>

//         {/* Table */}
//         <div className="w-full overflow-x-auto">
//           <table className="w-full min-w-[600px] border-separate border-spacing-y-1 text-center">
//             <thead>
//               <tr className="bg-zinc-700 text-base font-bold text-zinc-100">
//                 {currentCols.map((col) => (
//                   <th key={col.key} className="px-4 py-3">
//                     {col.label}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {currentData.length === 0 ? (
//                 <tr>
//                   <td
//                     colSpan={currentCols.length}
//                     className="py-6 text-lg font-semibold text-zinc-400"
//                   >
//                     No data available.
//                   </td>
//                 </tr>
//               ) : (
//                 currentData.map((row, i) => (
//                   <tr
//                     key={i}
//                     className={`transition hover:bg-zinc-800/80 ${
//                       i % 2 === 0 ? "bg-zinc-900" : "bg-zinc-800"
//                     }`}
//                   >
//                     {currentCols.map((col) => {
//                       // RaceLB medal logic
//                       if (activeTab === "raceLb" && col.key === "rank") {
//                         const rankValue = (row as RaceLbRow).rank || "";
//                         const icon = medalMap[rankValue];
//                         return (
//                           <td key={col.key} className="px-4 py-2">
//                             {icon ? (
//                               <Image
//                                 src={icon.src}
//                                 alt={rankValue}
//                                 className="inline h-5 w-5 align-middle"
//                               />
//                             ) : (
//                               <span className="font-semibold text-zinc-200">
//                                 {rankValue}
//                               </span>
//                             )}
//                           </td>
//                         );
//                       }
//                       // All other columns, display with safe access
//                       return (
//                         <td key={col.key} className="px-4 py-2 text-zinc-200">
//                           {
//                             row[col.key as keyof typeof row] as
//                               | string
//                               | number
//                               | undefined
//                           }
//                         </td>
//                       );
//                     })}
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// }
