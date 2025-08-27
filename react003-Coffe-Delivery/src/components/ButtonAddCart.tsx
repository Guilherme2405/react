import { ShoppingCart } from "@phosphor-icons/react";

export function ButtonAddCart({ handleAddItemCart }: { handleAddItemCart: () => void }) {
  return (
    <div>
      <div className="w-9.5 h-9.5 flex flex-col items-center justify-center bg-purple-900 rounded-md p-2">
        <button onClick={handleAddItemCart}>
          <ShoppingCart size={22} weight="fill" className="fill-white" />
        </button>
      </div>
    </div>
  );
}