import React from 'react'
import { ContainerCheckout } from './styles'
import { Form } from './Form/Form'
import { CartContent } from './CartContent/CartContent'

export function Checkout() {
    return (
        <ContainerCheckout>
            <Form />
            <CartContent />
        </ContainerCheckout>
    )
}