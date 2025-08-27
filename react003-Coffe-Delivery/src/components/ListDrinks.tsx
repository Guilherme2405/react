import { ButtonAddItem } from "./ButtonAddItem";

import { drinks } from "../app/pages/home/template";

export function ListDrinks() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-10">
      {drinks.map((drink) => (
        <div
          className="relative w-64 h-[372px] flex flex-col items-center justify-end bg-gray-100 rounded-tr-4xl rounded-bl-4xl px-6 pb-5"
          key={drink.id}
        >
          <div className="absolute top-[-25px]">
            <drink.image width={120} height={120} />
          </div>

          <div className="w-full h-30" />
          <div className="w-full flex flex-col items-center justify-center gap-7">
            <div className="w-full flex flex-row flex-wrap items-center justify-center gap-4">
              {drink.tags.map((tag, index) => (
                <div
                  className="w-min py-1 px-2 bg-yellow-100 rounded-full leading-none"
                  key={index}
                >
                  <span className="w-auto text-sm font-bold text-yellow-600 whitespace-nowrap">
                    {tag}
                  </span>
                </div>
              ))}

              <div className="w-full flex flex-col items-center justify-center gap-2">
                <h3 className="text-xl font-[nunito] font-extrabold text-gray-900">
                  {drink.name}
                </h3>

                <span className="w-50 text-sm font-[nunito] text-gray-400">
                  {drink.description}
                </span>
              </div>
            </div>
            <div>
              <div className="w-auto flex flex-row items-center justify-center gap-2">
                <div>
                  <span className="text-sm font-[nunito] text-gray-500">
                    R${" "}
                  </span>
                  <span className="text-2xl font-[nunito] font-extrabold text-[#574F4D]">
                    {drink.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>

                <ButtonAddItem
                  drink={{
                    id: drink.id,
                    name: drink.name,
                    price: drink.price,
                    quantity: drink.quantity ?? 0,
                    description: drink.description,
                    tags: drink.tags,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
