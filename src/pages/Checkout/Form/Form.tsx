import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'
import { Area1, ButtonPayment, ButtonsArea, FormContainer, InputBairro, InputCep, InputCidade, InputComplemento, InputNumero, InputRua, InputUf, PaymentArea, TitleForm, TitleFormInside, TitlePaymentInside } from './styles'


export function Form() {

    return (
        <>
            <Area1>
                <TitleForm>Complete seu pedido</TitleForm>

                <FormContainer>
                    <TitleFormInside>
                        <span>
                            <MapPinLine size={24} />
                        </span>
                        <div>
                            <h5>Endereço de Entrega</h5>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </TitleFormInside>

                    <InputCep
                        placeholder="CEP"
                        id='cep'
                    />
                    <InputRua
                        placeholder="Rua"
                        id='rua'
                    />
                    <InputNumero
                        placeholder="Número"
                        id='number'
                    />
                    <InputComplemento
                        placeholder="Complemento"
                        id='complemento'
                    />

                    <InputBairro
                        placeholder="Bairro"
                        id='bairro'
                    />
                    <InputCidade
                        placeholder="Cidade"
                        id='city'
                    />
                    <InputUf
                        placeholder="UF"
                        id='uf'
                    />

                </FormContainer>
                <PaymentArea>
                    <TitlePaymentInside>
                        <span>
                            <CurrencyDollar size={24} />
                        </span>
                        <div>
                            <h5>Endereço de Entrega</h5>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </TitlePaymentInside>

                    <ButtonsArea>
                        <ButtonPayment>
                            <span>
                                <CreditCard size={16} />
                            </span>
                            <p>cartão de crédito</p>
                        </ButtonPayment>

                        <ButtonPayment>
                            <span>
                                <Bank size={16} />
                            </span>
                            <p>cartão de débito</p>
                        </ButtonPayment>

                        <ButtonPayment>
                            <span>
                                <Money size={16} />
                            </span>
                            <p>dinheiro</p>
                        </ButtonPayment>
                    </ButtonsArea>
                </PaymentArea>
            </Area1 >
        </>
    )
}