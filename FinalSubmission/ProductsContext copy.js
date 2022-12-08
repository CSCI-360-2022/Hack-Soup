import {createContext} from "react";
import useLocalStorageState from 'use-local-storage-state';

export const ProductsContext = createContext({});

export function ProductsContextProvider({children}) {
  const [selectedProducts,setSelectedProducts] = useLocalStorageState('cart', {defaultValue:[]});
  return (
    <ProductsContext.Provider value={{selectedProducts,setSelectedProducts}}>{children}</ProductsContext.Provider>
  );
}

export const UserInfo = createContext({});

export function ProductContextProvider({children}){
  const [username, setUsername] = useLocalStorageState('user', {defaultValue:[]});
  return (
    <ProductsContext.Provider value= {{username, setUsername}}>{children}</ProductsContext.Provider>
  )
}