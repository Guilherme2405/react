import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import Imagem from "../../../assets/Imagem.svg?react"

export function Home() {

  return (
    <div className="w-full h-auto flex flex-col items-center justify-start md:px-40 px-3 md:pt-8 pt-10">
      <div className="w-full max-w-[1420px] h-136 flex flex-row gap-14">
        <div className="flex flex-col gap-16">

          <div className="flex flex-row flex-wrap gap-14">
            <div className="w-full max-w-[588px] flex flex-col gap-4">
              <h1 className="text-5xl font-[nunito] font-extrabold text-gray-900">Encontre o café perfeito para qualquer hora do dia</h1>
              <span className="text-xl text-gray-900">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
            </div>

            <div>
              <Imagem width={'auto'} height={'auto'} />
            </div>

          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="w-8 h-8 flex flex-col items-center justify-center rounded-full bg-yellow-600">
                <ShoppingCart size={16} weight="fill" className="fill-white" />
              </div>
              <div>
                <span>Compra simples e segura</span>
              </div>
            </div>

            <div className="flex flex-row items-center justify-start gap-2">
              <div className="w-8 h-8 flex flex-col items-center justify-center rounded-full bg-[#574F4D]">
                <Package size={16} weight="fill" className="fill-white" />
              </div>
              <div>
                <span>Embalagem mantém o café intacto</span>
              </div>
            </div>

            <div className="flex flex-row items-center justify-start gap-2">
              <div className="w-8 h-8 flex flex-col items-center justify-center rounded-full bg-yellow-500">
                <Timer size={16} weight="fill" className="fill-white" />
              </div>
              <div>
                <span>Entrega rápida e rastreada</span>
              </div>
            </div>

            <div className="flex flex-row items-center justify-start gap-2">
              <div className="w-8 h-8 flex flex-col items-center justify-center rounded-full bg-yellow-600">
                <Coffee size={16} weight="fill" className="fill-white" />
              </div>
              <div>
                <span>O café chega fresquinho até você</span>
              </div>
            </div>

          </div>

          <div className="w-full max-w-[1420px] h-136 flex flex-row gap-14">
            <div>
              <div>
                <h2 className="text-1xl font-[nunito] font-extrabold text-gray-900">Nossos cafés</h2>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}