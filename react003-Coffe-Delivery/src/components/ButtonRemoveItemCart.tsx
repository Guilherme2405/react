import { Trash } from "@phosphor-icons/react";

export function ButtonRemoveItemCart() {
  return (
    <div className="w-27 h-10 flex flex-row items-center justify-start gap-2 bg-gray-300 rounded-md p-2
     hover:bg-gray-400 transition-all duration-300 cursor-pointer">
      <button>
        <div className="w-full flex flex-row items-center justify-start gap-2">
          <Trash size={14} className="fill-purple-900" />
          <span className="font-[roboto] text-sm text-[#574F4D]">REMOVER</span>
        </div>
      </button>
    </div>
  );
}
