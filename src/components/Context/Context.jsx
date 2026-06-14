import { createContext, useContext } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const name = "Hafiz MuhammadUmar Attique";
  return <Context.Provider value={{ name }}>{children}</Context.Provider>;
};

export const useCustomHook = () => {
  return useContext(Context);
};
