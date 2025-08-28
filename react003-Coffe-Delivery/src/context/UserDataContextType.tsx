export interface UserData {
  cep: string;
  address: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: string;
}

export interface CartItem {
  id: number;
  name: string;
  description: string;
  tags: string[];
  price: number;
  quantity: number;
}

export type userDataType = UserData | null;
export type userCartType = CartItem[] | null | undefined;

// Tipo do contexto
export interface UserDataContextType {
  useUserData: userDataType;
  useUserCart: userCartType;
  setUserData: React.Dispatch<React.SetStateAction<userDataType>>;
  setUserCart: React.Dispatch<React.SetStateAction<userCartType>>;
}
