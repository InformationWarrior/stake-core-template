import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.svg";

type NavbarBuildProps = {
  buildVersion: number;
  buildDate: Date;
};

function Navbar({ buildVersion, buildDate }: NavbarBuildProps) {
  return (
    <nav className="navbar w-full bg-[var(--bgNav)] py-2 shadow-lg">
      <div className="container mx-auto flex items-center">
        <div className="order-1 min-w-0 flex-1">
          <Image
            src={logo}
            width={150}
            height={50}
            alt="Sweeps Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Wallet */}
        <div className="custom:order-2 custom:mx-auto custom:ml-0 order-3 mr-8 ml-auto flex-none">
          <div className="wallet flex max-w-[20rem] min-w-[12rem]">
            <div className="flex-shrink-0 rounded-l-md bg-[var(--bgWallet)] px-3 py-2 text-sm font-semibold text-[var(--bgWalletColor)] sm:text-base">
              Wallet:
            </div>
            <div className="min-w-0 flex-1 overflow-x-auto [overflow-y:hidden] rounded-r-md bg-[var(--bgWalletValue)] px-3 py-2 text-sm font-semibold text-[var(--bgWalletValueColor)] [-webkit-overflow-scrolling:touch] sm:text-base">
              <div className="inline-flex gap-2 whitespace-nowrap tabular-nums">
                <span className="text-gray-500 select-none">$</span>
                <span className="amount">{10000}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Build Info */}
        <div className="custom:order-3 custom:flex order-2 hidden min-w-0 flex-1 justify-end text-right text-sm text-gray-300">
          <div>
            <p>
              Build Version: <span>{buildVersion}</span>
            </p>
            <p>
              Build Date:{" "}
              <span>
                {buildDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
