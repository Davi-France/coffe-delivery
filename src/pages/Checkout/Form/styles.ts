import styled from 'styled-components'

export const Area1 = styled.form`
 
`

export const TitleForm = styled.h3`
    font-size: 1.3rem;
    font-family: 'Baloo 2';
`

export const TitleFormInside = styled.div`
    display: flex;
    flex-direction: row;
    align-items: self-start;
    gap: 0.4rem;
    grid-column: span 3;
    margin-bottom: 2rem;

    span{
        color: ${props => props.theme['yellow-dark']};
    }

    div{
        display: flex;
        gap: 0.4rem;
        flex-direction: column;

        h5{
            font-size: 1rem;
            font-weight: 400;
            color: ${props => props.theme['base-subtitle']};
        }
        p{
            color: ${props => props.theme['base-text']};
        }
    }
`

export const FormContainer = styled.form`
    display: grid;
    grid-template-columns: 200px 1fr 60px;
    margin-top: 2rem;
    gap: 0.8rem;
    padding: 3rem;
    background-color: ${props => props.theme['base-card']};
    border-radius: 6px;
`

export const Input = styled.input`
    outline: none;
    display: grid;
    width: 100%;
    border: 1px solid ${props => props.theme['base-button']};
    border-radius: 6px;
    background-color: ${props => props.theme['base-input']};
    padding: 0.8rem 0.7rem;
`

export const InputCep = styled(Input)`
   grid-column: 1;
`

export const InputRua = styled(Input)`
   grid-column: span 3;
`

export const InputNumero = styled(Input)`
   grid-column: 1;
`

export const InputComplemento = styled(Input)`
   grid-column: span 2;
`

export const InputBairro = styled(Input)`
   grid-column: 1;
`

export const InputCidade = styled(Input)`
   grid-column: 2;
`

export const InputUf = styled(Input)`
   grid-column: 3;
`

export const PaymentArea = styled.div`
    margin-top: 1rem;
    padding: 3rem;
    background-color: ${props => props.theme['base-card']};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
`

export const TitlePaymentInside = styled.div`
    display: flex;
    flex-direction: row;
    align-items: self-start;
    gap: 0.4rem;
    margin-bottom: 2rem;

    span{
        color: ${props => props.theme['purple']};
    }

    div{
        display: flex;
        gap: 0.4rem;
        flex-direction: column;

        h5{
            font-size: 1rem;
            font-weight: 400;
            color: ${props => props.theme['base-subtitle']};
        }
        p{
            color: ${props => props.theme['base-text']};
        }
    }
`

export const ButtonsArea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`

export const ButtonPayment = styled.button`
    background-color: ${props => props.theme['base-button']};
    padding: 1rem 0.6rem;
    width: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border-radius: 6px;
    border: none;
    outline: none;
    cursor: pointer;
    
    span{
        margin-top: 5px;
        color: ${props => props.theme['purple']};
    }

    p{
        font-size: 0.8rem;
        text-transform: uppercase;
        color: ${props => props.theme['base-text']};
    }
`