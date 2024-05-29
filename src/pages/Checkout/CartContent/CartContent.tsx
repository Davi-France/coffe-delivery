import { useContext } from "react"
import { ProductContext } from "../../../contexts/ProductContext"
import { Area2, CartContainer, ConfirmButton, Delivery, DivOne, DivThree, DivTwo, InputQuantity, ItemCart, ItemsCart, PriceCart, RemoveItem, TitleForm, TotalItems, TotalPrice } from "./styles"
import { Trash } from "phosphor-react";

export function CartContent() {

    const { listCartItems, amountProduct, setAmountProduct } = useContext(ProductContext)

    function handleDecrement() {
        setAmountProduct(state => state - 1);
    }

    function handleIncrement() {
        setAmountProduct(state => state + 1);
    }

    const totalPrice = listCartItems.reduce((acc, item) => acc + item.price, 0)

    return (
        <>
            <Area2>
                <TitleForm>Cafés selecionados</TitleForm>

                <CartContainer>
                    <ItemsCart>
                        {listCartItems.map((item) => <ItemCart key={item.id}>
                            <img src={item.photo} alt="" />
                            <DivOne>
                                <DivTwo>
                                    <p>{item.title}</p>
                                    <span>R$ {item.price.toFixed(2)}</span>
                                </DivTwo>
                                <DivThree>
                                    <InputQuantity>
                                        <button onClick={handleDecrement}>-</button>
                                        {amountProduct}
                                        <button onClick={handleIncrement}>+</button>
                                    </InputQuantity>
                                    <RemoveItem>
                                        <span><Trash size={18} /></span>
                                        <p>Remover</p>
                                    </RemoveItem>
                                </DivThree>
                            </DivOne>
                        </ItemCart>)}
                    </ItemsCart>

                    <PriceCart>
                        <TotalItems>
                            Total Itens: <span>R$ {totalPrice.toFixed(2)}</span>
                        </TotalItems>
                        <Delivery>
                            Entrega: <span>R$ 3.50</span>
                        </Delivery>
                        <TotalPrice>
                            Total: <span>R$ {(totalPrice + 3.50).toFixed(2)}</span>
                        </TotalPrice>

                        <ConfirmButton>
                            Confirmar Pedido
                        </ConfirmButton>
                    </PriceCart>
                </CartContainer>

            </Area2>
        </>

    )
}