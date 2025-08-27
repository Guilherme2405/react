import { useState, useContext } from "react";

import { UserDataContext } from "../context/userData";

import {
  type userCartType,
  type UserDataContextType,
  type CartItem,
} from "../context/UserDataContextType";

import { Minus, Plus } from "@phosphor-icons/react";

import { ButtonAddCart } from "./ButtonAddCart";

interface drinkType {
  id: number;
  name: string;
  description: string;
  tags: string[];
  price: number;
  quantity: number;
}

export function ButtonAddItem({ drink }: { drink: drinkType }) {
  const [addToCart, setAddToCart] = useState<number>(1);
  const { useUserCart, setUserCart } = useContext(
    UserDataContext
  ) as UserDataContextType;

  

  function addToCartFunctionMinus(): void {
    if (addToCart <= -10) return;
    setAddToCart((prev) => prev - 1);
  }

  function addToCartFunctionPlus(): void {
    setAddToCart((prev) => prev + 1);
  }

  function handleAddItemCartsQuantity(): void {
    const compareItem = useUserCart.find((item) => item.id === drink.id);
    if (compareItem) {
      console.log(compareItem);
      setUserCart((prev: userCartType) => {
        return prev.map((item: CartItem) =>
          item.id === compareItem.id
            ? { ...item, quantity: item.quantity + addToCart }
            : item
        );
      });
    } else {
      setUserCart((prev: userCartType) => [
        ...prev,
        { ...drink, quantity: addToCart },
      ]);
    }
    setAddToCart(1);
  }
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="w-18 h-10 flex flex-row items-center justify-center gap-2 bg-gray-300 rounded-md p-2">
        <button onClick={addToCartFunctionMinus}>
          <Minus
            size={14}
            className="fill-purple-600  hover:fill-purple-900 transition-all duration-300"
          />
        </button>
        <div>
          <span>{addToCart}</span>
        </div>
        <button onClick={addToCartFunctionPlus}>
          <Plus
            size={14}
            className="fill-purple-600  hover:fill-purple-900 transition-all duration-300"
          />
        </button>
      </div>
      <ButtonAddCart handleAddItemCart={handleAddItemCartsQuantity} />
    </div>
  );
}
