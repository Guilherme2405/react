import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import Illustration from "../../../assets/Illustration.svg?react";

export function Success() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start md:px-5 px-0 md:pt-8 pt-10">
      <div className="w-full max-w-[1440px] h-136 flex flex-col items-center justify-start gap-14">
        <div className="w-full flex flex-row gap-16 sm:px-0 px-3 pb-10">
          <div className="w-full flex flex-row flex-wrap gap-10 items-end justify-between">

            <div className="w-full max-w-131 flex flex-col gap-10 items-start justify-start">

              <div className="w-full flex flex-col gap-10 items-start justify-start">
                <div>
                  <h1 className="font-[baloo] text-2xl font-black text-yellow-600">
                    Uhu! Pedido confirmado
                  </h1>
                  <span className="font-[roboto] text-sm font-medium text-[#574F4D]">
                    Agora é só aguardar que logo o café chegará até você
                  </span>
                </div>
              </div>

              <div
                className="w-full max-w-131 flex flex-col gap-10 items-start justify-center border-1 border-transparent rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm
              bg-gradient-to-r from-[#DBAC2C] to-[#8047F8]"
              >
                <div className="w-full flex flex-col gap-10 items-start justify-start bg-white p-10 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm">
                  <div>
                    <div className="w-full flex flex-col gap-8">
                      <div className="w-full flex flex-row gap-2 items-center justify-start">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-purple-600">
                          <MapPin
                            size={16}
                            weight="fill"
                            className="fill-white"
                          />
                        </div>{" "}
                        <span className="font-[roboto] text-sm text-[#574F4D]">
                          Entrega em{" "}
                          <strong>Rua João Daniel Martinelli, 102</strong>{" "}
                          <br /> Farrapos - RS
                        </span>
                      </div>
                      <div className="w-full flex flex-row gap-2 items-center justify-start">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-400">
                          <Timer
                            size={16}
                            weight="fill"
                            className="fill-white"
                          />
                        </div>{" "}
                        <span className="font-[roboto] text-sm text-[#574F4D]">
                          Previsão de entrega
                          <br />
                          <strong>20 min - 30 min</strong>
                        </span>
                      </div>
                      <div className="w-full flex flex-row gap-2 items-center justify-start">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-600">
                          <CurrencyDollar
                            size={16}
                            weight="fill"
                            className="fill-white"
                          />
                        </div>{" "}
                        <span className="font-[roboto] text-sm text-[#574F4D]">
                          Pagamento na entrega
                          <br />
                          <strong>Cartão de Crédito</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <Illustration width={492} height={293} />
          </div>
        </div>
      </div>
    </div>
  );
}
