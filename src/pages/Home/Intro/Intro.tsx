import { IntroContainer, IntroTextArea, SpanContainer } from "./styles";
import IntroCoffeVetor from "../../../assets/intro-coffe-vetorial.png"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Intro() {
    return (

        <IntroContainer>
            <IntroTextArea>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                <SpanContainer>
                    <span>
                        <ShoppingCart size={20} /> Compra mais simples e segura
                    </span>

                    <span>
                        <Package size={20} /> Embalagem mantém o café intacto
                    </span>

                    <span>
                        <Timer size={20} /> Entrega rápida e rastreada
                    </span>

                    <span>
                        <Coffee size={20} /> O café chega fresquinho até você
                    </span>
                </SpanContainer>
            </IntroTextArea>

            <img src={IntroCoffeVetor} alt="Imagem Vetorial de um café da Coffe Delivery" />
        </IntroContainer>
    )
}