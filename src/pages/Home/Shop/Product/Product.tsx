// Product.tsx
import React, { useState } from "react";
import { ButtonAddToCard, InputQuantity, ProductCard, PurchaseCard, TagsArea } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { ProductItem } from "../products";

interface ProductProps {
    data: ProductItem;
    listCartItems: ProductItem[];
    setListCartItems: React.Dispatch<React.SetStateAction<ProductItem[]>>;
}

export function Product({ data, listCartItems, setListCartItems }: ProductProps) {
    const [quantity, setQuantity] = useState(0);

    const { photo, tags, title, description, price } = data;

    function handleAddCart(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        const productWithQuantity = { ...data, quantity };
        setListCartItems([...listCartItems, productWithQuantity]);
    }

    function handleDecrement() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    function handleIncrement() {
        setQuantity(quantity + 1);
    }

    return (
        <ProductCard>
            <img src={photo} alt={title} />
            <TagsArea>
                {tags.map((tag) => <h5 key={tag}>{tag}</h5>)}
            </TagsArea>
            <h3>{title}</h3>
            <p>{description}</p>
            <PurchaseCard>
                <span> R$ {price.toFixed(2)}</span>
                <InputQuantity>
                    <button onClick={handleDecrement}>-</button>
                    {quantity}
                    <button onClick={handleIncrement}>+</button>
                </InputQuantity>
                <ButtonAddToCard onClick={handleAddCart}>
                    <ShoppingCart size={24} />
                </ButtonAddToCard>
            </PurchaseCard>
        </ProductCard>
    );
}
