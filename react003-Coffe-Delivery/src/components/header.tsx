import { useContext } from "react";

import { UserDataContext } from "../context/userData";

import {
  type userCartType,
  type userDataType,
} from "../context/UserDataContextType";

import { MapPin, ShoppingCart } from "@phosphor-icons/react";

import Logo from "../assets/logo.svg?react";
import { Link } from "react-router-dom";

export function Header() {
  const { useUserCart, useUserData } = useContext(UserDataContext) as {
    useUserCart: userCartType;
    useUserData: userDataType;
  };

  const fullQuantity = useUserCart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div className="w-full h-auto flex flex-col items-center justify-start">
      <header className="w-full h-26 flex flex-row items-center justify-center">
        <div className="w-full max-w-[1440px] flex flex-row flex-wrap justify-between items-center md:px-5 px-3">
          <div>
            <Logo width={84} height={40} />
          </div>
          <div className="flex flex-row items-center gap-3">
            <div className="md:w-40 w-auto h-10 flex flex-row justify-between items-center gap-1 bg-purple-100 rounded-md p-2">
              <MapPin size={22} weight="fill" fill="#8047F8" />
              <span className="text-sm text-purple-500 hidden md:inline-block">
                {useUserData ? useUserData.address : "Sua localização"}
              </span>
            </div>
            {useUserCart.length === 0 ? (
              <Link to="/checkout">
                <div className="w-10 h-10 flex flex-row justify-center items-center gap-1 bg-yellow-100 rounded-md p-2">
                  <ShoppingCart
                    size={38}
                    weight="fill"
                    className="fill-yellow-500"
                  />
                </div>
              </Link>
            ) : (
              <Link to="/checkout">
                <div className="relative w-10 h-10 flex flex-row justify-center items-center gap-1 bg-yellow-100 rounded-md p-2">
                  <div className="absolute top-[-7px] right-[-7px] w-5 h-5 flex flex-row justify-center items-center gap-1 bg-yellow-500 rounded-4xl p-2">
                    <span className="text-sm text-yellow-100">
                      {fullQuantity}
                    </span>
                  </div>

                  <ShoppingCart
                    size={38}
                    weight="fill"
                    className="fill-yellow-500"
                  />
                </div>
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
