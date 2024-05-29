import { ReactNode, createContext, useState } from "react";
import { ProductItem } from "../pages/Home/Shop/products";

interface ProductContextType {
    listCartItems: (ProductItem[]),
    setListCartItems: React.Dispatch<React.SetStateAction<ProductItem[]>>;
    amountProduct: number,
    setAmountProduct: React.Dispatch<React.SetStateAction<number>>;
}

export const ProductContext = createContext({} as ProductContextType)

interface ProductContextProviderProps {
    children: ReactNode
}

export function ProductContextProvider({ children }: ProductContextProviderProps) {


    const [amountProduct, setAmountProduct] = useState(0);
    const [listCartItems, setListCartItems] = useState<ProductItem[]>([]);

    return (
        <ProductContext.Provider value={{
            amountProduct,
            setAmountProduct,
            listCartItems,
            setListCartItems
        }}>

            {children}
        </ProductContext.Provider>
    )
}