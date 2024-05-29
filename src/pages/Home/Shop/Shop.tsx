
import { ProductsList, ShopContainer, TitleShop } from "./styles";
import { products } from "./products";
import { Product } from "./Product/Product";
import { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductContext";

export function Shop() {

    const { listCartItems, setListCartItems } = useContext(ProductContext)

    return (
        <ShopContainer>
            <TitleShop>Nossos Cafés</TitleShop>
            <ProductsList>
                {products.map((item) => (
                    <Product
                        key={item.id}
                        data={item}
                        listCartItems={listCartItems}
                        setListCartItems={setListCartItems}
                    />
                ))}
            </ProductsList>
        </ShopContainer>
    )
}
