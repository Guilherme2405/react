import { Minus, Plus } from "@phosphor-icons/react";

import { useState } from "react";

export function ButtonAddItem() {
  const [addToCart, setAddToCart] = useState<number>(1);

  function handleRemoveItemCart(): void {
    if (addToCart > 1) setAddToCart((prev) => prev - 1);
  }

  function handleAddItemCart(): void {
    setAddToCart((prev) => prev + 1);
  }

  return (
    <div className="w-18 h-10 flex flex-row items-center justify-center gap-2 bg-gray-300 rounded-md p-2">
      <button onClick={handleRemoveItemCart}>
        <Minus
          size={14}
          className="fill-purple-600  hover:fill-purple-900 transition-all duration-300"
        />
      </button>
      <div>
        <span>{addToCart}</span>
      </div>
      <button onClick={handleAddItemCart}>
        <Plus
          size={14}
          className="fill-purple-600  hover:fill-purple-900 transition-all duration-300"
        />
      </button>
    </div>
  );
}
