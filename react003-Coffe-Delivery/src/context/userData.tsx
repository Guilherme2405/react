import { createContext, useEffect, useState } from "react";

import { type UserDataContextType } from "./UserDataContextType";

const UserDataContext = createContext<UserDataContextType | null>(null);

export const UserDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const savedUserData = localStorage.getItem("useUserData");
  const savedUserCart = localStorage.getItem("useUserCart");

  const [useUserData, setUserData] = useState(
    savedUserData ? JSON.parse(savedUserData) : null
  );
  const [useUserCart, setUserCart] = useState(
    savedUserCart ? JSON.parse(savedUserCart) : []
  );

  useEffect(() => {
    localStorage.setItem("useUserData", JSON.stringify(useUserData));
    localStorage.setItem("useUserCart", JSON.stringify(useUserCart));
  }, [useUserData, useUserCart]);

  return (
    <UserDataContext.Provider
      value={
        {
          useUserData,
          useUserCart,
          setUserData,
          setUserCart,
        } as UserDataContextType
      }
    >
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataContext };
