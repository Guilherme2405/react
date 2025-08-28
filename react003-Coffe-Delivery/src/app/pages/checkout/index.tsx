import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { UserDataContext } from "../../../context/userData";
import { type UserDataContextType } from "../../../context/UserDataContextType";

import { drinks } from "../home/template";

import { ButtonAddItem } from "../../../components/ButtonAddItem";
import { ButtonRemoveItemCart } from "../../../components/ButtonRemoveItemCart";

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  PixLogo,
} from "@phosphor-icons/react";
import * as RadioCards from "@radix-ui/react-radio-group";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  cep: z.string().min(1, { message: "CEP é obrigatório" }),
  neighborhood: z.string().min(1, { message: "Bairro é obrigatório" }),
  number: z.string().min(1, { message: "Número é obrigatório" }),
  address: z.string().min(1, { message: "Endereço é obrigatório" }),
  complement: z.string().optional(),
  city: z.string().min(1, { message: "Cidade é obrigatório" }),
  state: z.string().min(1, { message: "UF é obrigatório" }),
  paymentMethod: z
    .string()
    .min(1, { message: "Método de pagamento é obrigatório" }),
});

type FormData = z.infer<typeof formSchema>;

export function Checkout() {
  const { useUserCart, setUserData, setUserCart } = useContext(
    UserDataContext
  ) as UserDataContextType;

  const navigate = useNavigate();

  const { register, handleSubmit, control } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const total = useUserCart?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  async function onSubmit(data: FormData) {
    try {
      if (!useUserCart) throw new Error("Não há itens no carrinho");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await setUserData((prev: any) => ({
        ...prev,
        ...data,
        drinksPurchased: [...useUserCart],
      }));
      await setUserCart(null);
      navigate("/success");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full h-auto flex flex-col items-center justify-start md:px-5 px-0 md:pt-8 pt-10">
          <div className="w-full max-w-[1440px] h-136 flex flex-col items-center justify-start gap-14">
            <div className="w-full flex flex-row gap-16 sm:px-5 px-3 pb-10">
              <div className="w-full flex flex-row gap-4 flex-wrap items-start justify-between">
                <div className="w-full md:max-w-160 max-w-full">
                  <div>
                    <h1 className="text-2xl font-[nunito] font-extrabold text-[#574F4D]">
                      Complete seu pedido
                    </h1>
                  </div>

                  <div>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="w-full flex flex-col gap-2"
                    >
                      <div className="w-full md:max-w-160 max-w-full flex flex-col gap-2 items-start sm:p-10 p-3 bg-gray-100 rounded-md">
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
                              id="cep"
                              className="w-full h-10.5 max-w-50 border-solid border-1 border-gray-300 rounded-md bg-gray-100 indent-2 
                              focus:outline-yellow-500 focus:border-none"
                              {...register("cep")}
                            />
                            <input
                              type="text"
                              placeholder="Rua"
                              id="address"
                              className="w-full h-10.5 border-solid border-1 border-gray-300 rounded-md bg-gray-100 indent-2  focus:outline-yellow-500 focus:border-none"
                              {...register("address")}
                            />
                          </div>

                          <div className="w-full flex flex-row gap-2 items-center justify-between">
                            <input
                              type="text"
                              id="numero"
                              placeholder="Número"
                              className="w-full h-10.5 max-w-50 border-solid border-1 border-gray-300 rounded-md bg-gray-100 indent-2  focus:outline-yellow-500 focus:border-none"
                              {...register("number")}
                            />
                            <input
                              type="text"
                              id="complemento"
                              placeholder="Complemento"
                              className="w-full h-10.5 border-solid border-1 border-gray-300 rounded-md bg-gray-100 indent-2  focus:outline-yellow-500 focus:border-none"
                              {...register("complement")}
                            />
                          </div>

                          <div className="w-full flex flex-row gap-2 items-center justify-between">
                            <input
                              type="text"
                              id="neighborhood"
                              placeholder="Bairro"
                              className="w-full max-w-50 h-10.5 border-solid border-1 border-gray-300 rounded-md bg-gray-100 indent-2  focus:outline-yellow-500 focus:border-none"
                              {...register("neighborhood")}
                            />
                            <input
                              type="text"
                              id="cidade"
                              placeholder="Cidade"
                              className="w-full max-w-69 h-10.5 border-solid border-1 border-gray-300 rounded-md bg-gray-100 indent-2  focus:outline-yellow-500 focus:border-none"
                              {...register("city")}
                            />
                            <input
                              type="text"
                              id="uf"
                              placeholder="UF"
                              className="w-15 h-10.5 border-solid border-1 border-gray-300 rounded-md bg-gray-100 indent-2  focus:outline-yellow-500 focus:border-none"
                              {...register("state")}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="w-full md:max-w-160 max-w-full flex flex-col gap-2 items-start sm:p-10 p-3 bg-gray-100 rounded-md">
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
                              O pagamento é feito na entrega. Escolha a forma
                              que deseja pagar
                            </span>
                          </div>
                          <Controller
                            control={control}
                            name="paymentMethod"
                            rules={{
                              required: "Método de pagamento é obrigatório",
                            }}
                            defaultValue="CARTÃO DE CRÉDITO"
                            render={(field) => (
                              <>
                                <RadioCards.Root
                                  color="purple"
                                  className="w-full flex flex-row flex-wrap gap-2"
                                  onValueChange={(value) => {
                                    field.field.onChange(value);
                                  }}
                                  value={field.field.value}
                                >
                                  <RadioCards.Item
                                    value="CARTÃO DE CRÉDITO"
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
                                    value="CARTÃO DE DÉBITO"
                                    className="w-full sm:max-w-40 h-10.5 border-solid border-1 border-gray-300 rounded-md bg-gray-300 indent-2 data-[state=checked]:bg-purple-100 data-[state=checked]:border-purple-600"
                                  >
                                    <div className="w-full flex flex-row gap-2 items-center justify-center">
                                      <Bank
                                        size={22}
                                        className="fill-purple-600"
                                      />
                                      <span className="font-[roboto] text-sm text-[#574F4D]">
                                        CARTÃO DE DÉBITO
                                      </span>
                                    </div>
                                  </RadioCards.Item>

                                  <RadioCards.Item
                                    value="PIX"
                                    className="w-full sm:max-w-40 h-10.5 border-solid border-1 border-gray-300 rounded-md bg-gray-300 indent-2 data-[state=checked]:bg-purple-100 data-[state=checked]:border-purple-600"
                                  >
                                    <div className="w-full flex flex-row gap-2 items-center justify-center">
                                      <PixLogo
                                        size={22}
                                        className="fill-purple-600"
                                      />
                                      <span className="font-[roboto] text-sm text-[#574F4D]">
                                        PIX
                                      </span>
                                    </div>
                                  </RadioCards.Item>
                                </RadioCards.Root>
                              </>
                            )}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="w-full md:max-w-112 flex flex-col gap-2 items-start justify-start">
                  <div>
                    <h1 className="text-2xl font-[nunito] font-extrabold text-[#574F4D]">
                      Cafés selecionados
                    </h1>
                  </div>

                  <div className="w-full flex flex-col gap-2 items-start justify-start bg-gray-100 rounded-md sm:p-8 p-3">
                    <div className="w-full flex flex-col gap-2 items-start justify-start">
                      {useUserCart !== null &&
                        useUserCart.map((item, index) => {
                          const matchedDrink = drinks.find(
                            (drink) => drink.id === item.id
                          );

                          return (
                            <div
                              className="w-full flex flex-row gap-2 items-start justify-between"
                              key={index}
                            >
                              <div className="w-full flex flex-row gap-2 items-start justify-between border-b-1 border-gray-300 pb-5">
                                <div className="w-full flex flex-row gap-2 items-center justify-center">
                                  <div>
                                    {matchedDrink && (
                                      <matchedDrink.image
                                        width={64}
                                        height={64}
                                      />
                                    )}
                                  </div>

                                  <div className="w-full flex flex-row gap-2 items-start justify-center">
                                    <div className="w-full flex flex-col gap-2 items-start justify-start">
                                      <h1 className="text-1xl font-[nunito] font-extrabold text-[#574F4D]">
                                        {item.name}
                                      </h1>

                                      <div className="w-full flex flex-row min-w-[120px] gap-2 items-center justify-between">
                                        <ButtonAddItem drink={item} />
                                        <ButtonRemoveItemCart drink={item} />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="w-full flex flex-row gap-2 items-center justify-end">
                                  <span className="sm:text-1xl text-sm font-[nunito] font-black text-[#574F4D]">
                                    R${" "}
                                    {(item.price * item.quantity)
                                      .toFixed(2)
                                      .replace(".", ",")}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}

                      <div className="w-full flex flex-col gap-2 items-start justify-start">
                        <div className="w-full flex flex-row gap-2 items-center justify-between">
                          <span className="font-[roboto] text-sm text-[#574F4D]">
                            Total de itens
                          </span>
                          <span className="font-[roboto] text-sm text-[#574F4D]">
                            R$ {Number(total).toFixed(2).replace(".", ",")}
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
                            R${" "}
                            {(Number(total) + 5.0).toFixed(2).replace(".", ",")}
                          </span>
                        </div>
                      </div>

                      <div className="w-full flex flex-row gap-2 items-center justify-center">
                        <button
                          type="submit"
                          className="w-full h-10.5 border-solid border-1 border-transparent rounded-md
                           bg-yellow-500 hover:bg-yellow-600 py-3"
                        >
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
      </form>
    </div>
  );
}
