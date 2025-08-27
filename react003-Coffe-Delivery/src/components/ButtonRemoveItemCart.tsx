import { useContext } from "react";

import { UserDataContext } from "../context/userData";
import { type UserDataContextType } from "../context/UserDataContextType";

import { Trash } from "@phosphor-icons/react";


interface drinkType {
  id: number;
  name: string;
  description: string;
  tags: string[];
  price: number;
  quantity: number;
}

export function ButtonRemoveItemCart({ drink }: { drink: drinkType }) {
  const { setUserCart } = useContext(
    UserDataContext
  ) as UserDataContextType;

  function handleRemoveItemCart(): void {
    setUserCart((prev) => prev.filter((item) => item.id !== drink.id));
  }

  return (
    <div className="sm:w-27 w-10 h-10 flex flex-row items-center sm:justify-start justify-center gap-2 bg-gray-300 rounded-md p-2
     hover:bg-gray-400 transition-all duration-300 cursor-pointer">
      <button onClick={handleRemoveItemCart}>
        <div className="w-full flex flex-row items-end sm:justify-start gap-2">
          <Trash size={14} className="fill-purple-900 wid" />
          <span className="font-[roboto] sm:block hidden text-sm text-[#574F4D]">{"REMOVER"}</span>
        </div>
      </button>
    </div>
  );
}
