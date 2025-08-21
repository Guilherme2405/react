import { MapPin, ShoppingCart } from "@phosphor-icons/react";

import Logo from "../assets/logo.svg?react";

export function Header() {
  return (
    <header className="w-full h-26 flex flex-row items-center justify-center">
      <div className="w-full max-w-[1420px] flex flex-row flex-wrap justify-between items-center md:px-40 px-3">
        <div>
          <Logo width={84} height={40} />
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="md:w-40 w-auto h-10 flex flex-row justify-between items-center gap-1 bg-purple-100 rounded-md p-2">
            <MapPin size={22} weight="fill" fill="#8047F8" />
            <span className="text-sm text-purple-500 hidden md:inline-block">Porto Alegre, RS</span>
          </div>

          <div className=" h-10 flex flex-row justify-center items-center gap-1 bg-yellow-100 rounded-md p-2">
            <ShoppingCart size={38} weight="fill" className="fill-yellow-500" />
          </div>
        </div>
      </div>
    </header>
  );
}