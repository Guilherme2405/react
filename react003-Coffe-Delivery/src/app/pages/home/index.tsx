import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import { ButtonAddItem } from "../../../components/ButtonAddItem";

import Imagem from "../../../assets/Imagem.svg?react";
import Coffee1 from "../../../assets/Coffee-1.svg?react";

export function Home() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start md:px-5 px-3 md:pt-8 pt-10">
      <div className="w-full max-w-[1440px] h-136 flex flex-col items-center justify-start gap-14">
        <div className="w-full flex flex-col gap-16 sm:px-5 px-3">
          <div className="w-full flex flex-row flex-wrap justify-between gap-14">
            <div className="w-auto flex flex-col justify-between gap-10 ">
              <div className="w-full xl:max-w-[700px] flex flex-col gap-10">
                <h1 className="text-5xl font-[nunito] font-extrabold text-gray-900">
                  Encontre o café perfeito para qualquer hora do dia
                </h1>
                <span className="text-xl text-gray-900">
                  Com o Coffee Delivery você recebe seu café onde estiver, a
                  qualquer hora
                </span>
              </div>

              <div className="w-full xl:max-w-[700px] grid md:grid-cols-2 xl:grid- grid-cols-1 gap-4">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="w-8 h-8 flex flex-col items-center justify-center rounded-full bg-yellow-600">
                    <ShoppingCart
                      size={16}
                      weight="fill"
                      className="fill-white"
                    />
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
            </div>

            <div className="xl:w-auto w-full flex flex-row items-center justify-center">
              <Imagem
                width={476}
                height={360}
                className="xl:w-[476px] sm:h-[360px] w-85 h-auto"
              />
            </div>
          </div>

          <div className="w-full max-w-[1420px] h-136 flex flex-col gap-4">
            <div className="w-full h-auto flex flex-row justify-center items-center gap-2">
              <h2 className="text-1xl font-[nunito] font-extrabold text-gray-900">
                Nossos cafés
              </h2>
            </div>

            <div className="w-full h-full flex flex-col gap-4 pb-10">
              <div className="flex flex-row flex-wrap justify-center items-center gap-4">
                <div className="relative w-64 h-auto flex flex-col items-center justify-end bg-gray-100 rounded-tr-4xl rounded-bl-4xl px-6 pb-5 ">
                  <div className="absolute top-[-25px]">
                    <Coffee1 />
                  </div>

                  <div className="w-full h-30" />

                  <div className="w-full flex flex-col items-center justify-center gap-7">
                    <div className="w-full flex flex-col items-center justify-center gap-4">
                      <div className="w-full flex flex-row flex-wrap items-center justify-center gap-1">
                        <div className="w-min py-1 px-2 bg-yellow-100 rounded-full leading-none">
                          <span className="w-auto text-sm font-bold text-yellow-600">
                            especial
                          </span>
                        </div>
                        <div className="w-min py-1 px-2 bg-yellow-100 rounded-full leading-none">
                          <span className="w-auto text-sm font-bold text-yellow-600">
                            TRADICIONAL
                          </span>
                        </div>
                        <div className="w-min py-1 px-2 bg-yellow-100 rounded-full leading-none">
                          <span className="w-auto text-sm font-bold text-yellow-600">
                            ALCOÓLICO
                          </span>
                        </div>
                      </div>

                      <div className="w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-xl font-[nunito] font-extrabold text-gray-900">
                          Expresso Tradicional
                        </h3>

                        <span className="w-50 text-sm font-[nunito] text-gray-400">
                          O tradicional café feito com água quente e grãos
                          moídos
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="w-auto flex flex-row items-center justify-center gap-2">
                        <div>
                          <span>R$</span>
                          <span className="text-2xl font-[nunito] font-extrabold text-[#574F4D]">
                            9,90
                          </span>
                        </div>

                        <ButtonAddItem />

                        <div className="w-9.5 h-9.5 flex flex-col items-center justify-center bg-purple-900 rounded-md p-2">
                          <button>
                            <ShoppingCart
                              size={22}
                              weight="fill"
                              className="fill-white"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative w-64 h-auto flex flex-col items-center justify-end bg-gray-100 rounded-tr-4xl rounded-bl-4xl px-6 pb-5 ">
                  <div className="absolute top-[-25px]">
                    <Coffee1 />
                  </div>

                  <div className="w-full h-30" />

                  <div className="w-full flex flex-col items-center justify-center gap-7">
                    <div className="w-full flex flex-col items-center justify-center gap-4">
                      <div className="w-full flex flex-row flex-wrap items-center justify-center gap-1">
                        <div className="w-min py-1 px-2 bg-yellow-100 rounded-full leading-none">
                          <span className="w-auto text-sm font-bold text-yellow-600">
                            especial
                          </span>
                        </div>
                        <div className="w-min py-1 px-2 bg-yellow-100 rounded-full leading-none">
                          <span className="w-auto text-sm font-bold text-yellow-600">
                            TRADICIONAL
                          </span>
                        </div>
                        <div className="w-min py-1 px-2 bg-yellow-100 rounded-full leading-none">
                          <span className="w-auto text-sm font-bold text-yellow-600">
                            ALCOÓLICO
                          </span>
                        </div>
                      </div>

                      <div className="w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-xl font-[nunito] font-extrabold text-gray-900">
                          Expresso Tradicional
                        </h3>

                        <span className="w-50 text-sm font-[nunito] text-gray-400">
                          O tradicional café feito com água quente e grãos
                          moídos
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="w-auto flex flex-row items-center justify-center gap-2">
                        <div>
                          <span>R$</span>
                          <span className="text-2xl font-[nunito] font-extrabold text-[#574F4D]">
                            9,90
                          </span>
                        </div>

                        <ButtonAddItem />

                        <div className="w-9.5 h-9.5 flex flex-col items-center justify-center bg-purple-900 rounded-md p-2">
                          <button>
                            <ShoppingCart
                              size={22}
                              weight="fill"
                              className="fill-white"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative w-64 h-auto flex flex-col items-center justify-end bg-gray-100 rounded-tr-4xl rounded-bl-4xl px-6 pb-5 ">
                  <div className="absolute top-[-25px]">
                    <Coffee1 />
                  </div>

                  <div className="w-full h-30" />

                  <div className="w-full flex flex-col items-center justify-center gap-7">
                    <div className="w-full flex flex-col items-center justify-center gap-4">
                      <div className="w-full flex flex-row flex-wrap items-center justify-center gap-1">
                        <div className="w-min py-1 px-2 bg-yellow-100 rounded-full leading-none">
                          <span className="w-auto text-sm font-bold text-yellow-600">
                            especial
                          </span>
                        </div>
                        <div className="w-min py-1 px-2 bg-yellow-100 rounded-full leading-none">
                          <span className="w-auto text-sm font-bold text-yellow-600">
                            TRADICIONAL
                          </span>
                        </div>
                        <div className="w-min py-1 px-2 bg-yellow-100 rounded-full leading-none">
                          <span className="w-auto text-sm font-bold text-yellow-600">
                            ALCOÓLICO
                          </span>
                        </div>
                      </div>

                      <div className="w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-xl font-[nunito] font-extrabold text-gray-900">
                          Expresso Tradicional
                        </h3>

                        <span className="w-50 text-sm font-[nunito] text-gray-400">
                          O tradicional café feito com água quente e grãos
                          moídos
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="w-auto flex flex-row items-center justify-center gap-2">
                        <div>
                          <span>R$</span>
                          <span className="text-2xl font-[nunito] font-extrabold text-[#574F4D]">
                            9,90
                          </span>
                        </div>

                        <ButtonAddItem />

                        <div className="w-9.5 h-9.5 flex flex-col items-center justify-center bg-purple-900 rounded-md p-2">
                          <button>
                            <ShoppingCart
                              size={22}
                              weight="fill"
                              className="fill-white"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
