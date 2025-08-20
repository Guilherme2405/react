import React, { createContext, useContext, ReactNode } from "react";
import axios, { AxiosInstance } from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  timeout: 10000,
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});

const ApiClientContext = createContext<AxiosInstance | undefined>(undefined);

export const ApiClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ApiClientContext.Provider value={api}>
      {children}
    </ApiClientContext.Provider>
  );
};

export const useClient = () => {
  const client = useContext(ApiClientContext);
  if (client === undefined) {
    throw new Error("useClient must be used within an ApiClientProvider");
  }
  return client;
};
