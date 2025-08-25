import { createContext, useState } from "react";

import { type userDataContextType } from "./UserDataContextType"

import { drinks } from "../app/pages/home/template"

const UserDataContext = createContext<userDataContextType | null>(null)

type userDataType = {
  name: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
} | null;

type userCartType = {
  id: number | null;
  name: string | null;
  description: string | null;
  tags: string[] | null;
  price: number | null;
  image: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | null;
} | [];

export const UserDataProvider = ({ children }: { children: React.ReactNode }) => {

  const users = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA"
  }


  const cart = [{
    id: 0,
    name: drinks[0].name,
    description: drinks[0].description,
    tags: drinks[0].tags,
    price: drinks[0].price,
    image: drinks[0].image
  }, {
    id: 1,
    name: drinks[1].name,
    description: drinks[1].description,
    tags: drinks[1].tags,
    price: drinks[1].price,
    image: drinks[1].image
  },
  ]

  const [userData, setUserData] = useState<userDataType>(users as userDataType)
  const [userCart, setUserCart] = useState<userCartType>(cart as userCartType)


  return (
    <UserDataContext.Provider value={{ userData, userCart }}>
      {children}
    </UserDataContext.Provider>
  )
}

export { UserDataContext }