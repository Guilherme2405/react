import {
  Bank,
  CurrencyDollar,
  MapPinLine,
  PixLogo,
  CreditCard,
} from "@phosphor-icons/react";
import { useState } from "react";

import Coffee1 from "../../../assets/Coffee-1.svg?react";
import { ButtonAddItem } from "../../../components/ButtonAddItem";
import { ButtonRemoveItemCart } from "../../../components/ButtonRemoveItemCart";
import { RadioCards } from "@radix-ui/themes";

export function Checkout() {
  const [, setSelectedPaymentMethod] = useState<string>("credit-card");
  return (
    <div>
      <div className="w-full h-auto flex flex-col items-center justify-start md:px-5 px-0 md:pt-8 pt-10">
        <div className="w-full max-w-[1440px] h-136 flex flex-col items-center justify-start gap-14">
          <div className="w-full flex flex-row gap-16 sm:px-5 px-3 pb-10">
            <div className="w-full flex flex-row gap-4 flex-wrap items-start justify-between">
              <div>
                <div>
                  <h1 className="text-2xl font-[nunito] font-extrabold text-[#574F4D]">
                    Complete seu pedido
                  </h1>
                </div>

                <div>
                  <form action="" className="w-full flex flex-col gap-2">
                    <div className="w-full max-w-160 flex flex-col gap-2 items-start sm:p-10 p-3 bg-gray-100 rounded-md">
                      <div className="w-full max-w-150 flex flex-col gap-2">
                        <div className=" flex flex-row items-end justify-start gap-2">
                          <MapPinLine size={22} className="fill-yellow-600" />
                          <span className=" font-[roboto] font-medium text-[#574F4D]">
                            Endereço de entrega
                          </span>
                        </div>
                        <div className="pl-7">
                          <span className=" font-[roboto] text-[#574F4D]">
                            Informe o endereço onde deseja receber seu pedido
                          </span>
                        </div>
                      </div>

                      <div className="w-full max-w-140 flex flex-col gap-2">
                        <div className="w-full flex flex-col gap-2 items-start justify-between">
                          <input
                            type="text"
                            placeholder="CEP"
                            name="cep"
                            id="cep"
                            className="w-full h-10.5 max-w-50 border-solid border-1 border-gray-300 rounded-md bg-gray-100 indent-2 
                             focus:outline-yellow-500 focus:border-none"
                          />
                          <input
                            type="text"
                            placeholder="Rua"
                            id="rua"
                            name="rua"
                            className="w-full h-10.5 border-solid border-1 border-gray-300 rounded-md bg-gray-100 indent-2  focus:outline-yellow-500 focus:border-none"
                          />
                        </div>

                        <div className="w-full flex flex-row gap-2 items-center justify-between">
                          <input
                            type="text"
                            name="numero"
                            id="numero"
                            placeholder="Número"
                            className="w-full h-10.5 max-w-50 border-solid border-1 border-gray-300 rounded-md bg-gray-100 indent-2  focus:outline-yellow-500 focus:border-none"
                          />
                          <input
                            type="text"
                            name="complemento"
                            id="complemento"
                            placeholder="Complemento"
                            className="w-full h-10.5 border-solid border-1 border-gray-300 rounded-md bg-gray-100 indent-2  focus:outline-yellow-500 focus:border-none"
                          />
                        </div>

                        <div className="w-full flex flex-row gap-2 items-center justify-between">
                          <input
                            type="text"
                            name="bairro"
                            id="bairro"
                            placeholder="Bairro"
                            className="w-full max-w-50 h-10.5 border-solid border-1 border-gray-300 rounded-md bg-gray-100 indent-2  focus:outline-yellow-500 focus:border-none"
                          />
                          <input
                            type="text"
                            name="cidade"
                            id="cidade"
                            placeholder="Cidade"
                            className="w-full max-w-69 h-10.5 border-solid border-1 border-gray-300 rounded-md bg-gray-100 indent-2  focus:outline-yellow-500 focus:border-none"
                          />
                          <input
                            type="text"
                            name="uf"
                            id="uf"
                            placeholder="UF"
                            className="w-15 h-10.5 border-solid border-1 border-gray-300 rounded-md bg-gray-100 indent-2  focus:outline-yellow-500 focus:border-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="w-full max-w-160 flex flex-col gap-2 items-start sm:p-10 p-3 bg-gray-100 rounded-md">
                      <div className="w-full max-w-150 flex flex-col gap-2">
                        <div className=" flex flex-row items-end justify-start gap-2">
                          <CurrencyDollar
                            size={22}
                            className="fill-purple-600"
                          />
                          <span className=" font-[roboto] font-medium text-[#574F4D]">
                            Pagamento
                          </span>
                        </div>

                        <div className="pl-7">
                          <span className=" font-[roboto] text-[#574F4D]">
                            O pagamento é feito na entrega. Escolha a forma que
                            deseja pagar
                          </span>
                        </div>

                        <RadioCards.Root
                          color="purple"
                          defaultValue="credit-card"
                          columns={{ initial: "1", sm: "3" }}
                          className="w-full flex flex-row flex-wrap gap-2"
                          onValueChange={setSelectedPaymentMethod}
                        >
                          <RadioCards.Item
                            value="credit-card"
                              className="w-full sm:max-w-40 h-10.5 border-solid border-1 border-gray-300 rounded-md bg-gray-300 indent-2 data-[state=checked]:bg-purple-100 data-[state=checked]:border-purple-600"
                          >
                            <div className="w-full flex flex-row gap-2 items-center justify-center">
                              <CreditCard
                                size={22}
                                className="fill-purple-600"
                              />
                              <span className="font-[roboto] text-sm text-[#574F4D]">
                                CARTÃO DE CRÉDITO
                              </span>
                            </div>
                          </RadioCards.Item>

                          <RadioCards.Item
                            value="debit-card"
                            className="w-full sm:max-w-40 h-10.5 border-solid border-1 border-gray-300 rounded-md bg-gray-300 indent-2 data-[state=checked]:bg-purple-100 data-[state=checked]:border-purple-600"
                          >
                            <div className="w-full flex flex-row gap-2 items-center justify-center">
                              <Bank size={22} className="fill-purple-600" />
                              <span className="font-[roboto] text-sm text-[#574F4D]">
                                CARTÃO DE DÉBITO
                              </span>
                            </div>
                          </RadioCards.Item>

                          <RadioCards.Item
                            value="pix"
                            className="w-full sm:max-w-40 h-10.5 border-solid border-1 border-gray-300 rounded-md bg-gray-300 indent-2 data-[state=checked]:bg-purple-100 data-[state=checked]:border-purple-600"
                          >
                            <div className="w-full flex flex-row gap-2 items-center justify-center">
                              <PixLogo size={22} className="fill-purple-600" />
                              <span className="font-[roboto] text-sm text-[#574F4D]">
                                PIX
                              </span>
                            </div>
                          </RadioCards.Item>
                        </RadioCards.Root>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="w-full max-w-112 flex flex-col gap-2 items-start justify-start">
                <div>
                  <h1 className="text-2xl font-[nunito] font-extrabold text-[#574F4D]">
                    Cafés selecionados
                  </h1>
                </div>

                <div className="w-full flex flex-col gap-2 items-start justify-start bg-gray-100 rounded-md sm:p-10 p-3">
                  <div className="w-full flex flex-col gap-2 items-start justify-start">
                    <div className="w-full flex flex-row gap-2 items-start justify-between border-b-1 border-gray-300 pb-5">
                      <div className="w-full flex flex-row gap-2 items-center justify-between">
                        <div>
                          <Coffee1 width={64} height={64} />
                        </div>

                        <div className="w-full flex flex-row gap-2 items-start justify-center">
                          <div>
                            <h1 className="text-1xl font-[nunito] font-extrabold text-[#574F4D]">
                              Expresso Tradicional
                            </h1>

                            <div className="w-full flex flex-row gap-2 items-center justify-between">
                              <ButtonAddItem />
                              <ButtonRemoveItemCart />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-row gap-2 items-center justify-end">
                        <span className="sm:text-1xl text-sm font-[nunito] font-extrabold text-[#574F4D]">
                          R$ 9,90
                        </span>
                      </div>
                    </div>

                    <div className="w-full flex flex-row gap-2 items-start justify-between border-b-1 border-gray-300 pb-5">
                      <div className="w-full flex flex-row gap-2 items-center justify-between">
                        <div>
                          <Coffee1 width={64} height={64} />
                        </div>

                        <div className="w-full flex flex-row gap-2 items-start justify-center">
                          <div>
                            <h1 className="text-1xl font-[nunito] font-extrabold text-[#574F4D]">
                              Expresso Tradicional
                            </h1>

                            <div className="w-full flex flex-row gap-2 items-center justify-between">
                              <ButtonAddItem />
                              <ButtonRemoveItemCart />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-row gap-2 items-center justify-end">
                        <span className="text-1xl font-[nunito] font-extrabold text-[#574F4D]">
                          R$ 9,90
                        </span>
                      </div>
                    </div>

                    <div className="w-full flex flex-col gap-2 items-start justify-start">
                      <div className="w-full flex flex-row gap-2 items-center justify-between">
                        <span className="font-[roboto] text-sm text-[#574F4D]">
                          Total de itens
                        </span>
                        <span className="font-[roboto] text-sm text-[#574F4D]">
                          R$ 29,70
                        </span>
                      </div>
                      <div className="w-full flex flex-row gap-2 items-center justify-between">
                        <span className="font-[roboto] text-sm text-[#574F4D]">
                          Entrega
                        </span>
                        <span className="font-[roboto] text-sm text-[#574F4D]">
                          R$ 5,00
                        </span>
                      </div>
                      <div className="w-full flex flex-row gap-2 items-center justify-between">
                        <span className="font-[nunito] font-black text-sm text-[#574F4D]">
                          Total
                        </span>
                        <span className="font-[nunito] font-black text-sm text-[#574F4D]">
                          R$ 34,70
                        </span>
                      </div>

                      <div className="w-full flex flex-row gap-2 items-center justify-center">
                        <button className="w-full h-10.5 border-solid border-1 border-transparent rounded-md bg-yellow-500 hover:bg-yellow-600 py-3">
                          <span className="font-[roboto] font-bold text-white">
                            CONFIRMAR PEDIDO
                          </span>
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
  );
}
