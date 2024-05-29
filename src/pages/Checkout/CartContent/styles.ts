import styled from "styled-components"

export const Area2 = styled.div`
 
`

export const TitleForm = styled.h3`
    font-size: 1.3rem;
    font-family: 'Baloo 2';
`

export const CartContainer = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 0.8rem;
    padding: 3rem;
    background-color: ${props => props.theme['base-card']};
    border-radius: 0.3rem 2rem 0.3rem 2rem;
`

export const ItemsCart = styled.div`
`

export const ItemCart = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    border-bottom: 2px solid ${props => props.theme['base-button']};;
    padding-bottom: 2rem;
    margin-top: 1.4rem;

    img{
        width: 30%;
    }
`

export const DivOne = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const DivTwo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    p{
        color: ${props => props.theme['base-subtitle']};
        font-size: 1.1rem;
    }

    span{
        font-size: 1.1rem;
        font-weight: 700;
        color: ${props => props.theme['base-text']};
    }
`
export const DivThree = styled.div`
    display: flex;
    width: 100%;
    gap: 0.4rem;
    margin-top: 0.6rem;
`

export const InputQuantity = styled.div`
    background-color: ${props => props.theme['base-button']};
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 0.4rem;
  
    button{
        background-color: transparent;
        border: none;
        color: ${props => props.theme['purple']};
        padding: 0.2rem 0.7rem;
        font-size: 1.4rem;
        cursor: pointer;
    }
`

export const RemoveItem = styled.button`
    background-color: ${props => props.theme['base-button']};
    padding: 0.2rem 0.6rem;
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

export const PriceCart = styled.div`
    margin-top: 0.4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    align-items: start;
    width: 100%;

    p{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        color: ${props => props.theme['base-text']};
    }
`

export const TotalItems = styled.p`
   margin-top: 1.5rem;
`

export const Delivery = styled.p`
`

export const TotalPrice = styled.h4`
        font-size: 1.5rem;
        color: ${props => props.theme['base-subtitle']};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
`

export const ConfirmButton = styled.button`
    background-color: ${props => props.theme['yellow']};
    color: ${props => props.theme['white']};
    border: none;
    border-radius: 6px;
    margin-top: 0.8rem;
    padding: 0.9rem;
    width: 100%;
    cursor: pointer;
    transition: 0.2s ease;
    
    &:hover{
        background-color: ${props => props.theme['yellow-dark']};
        transition: 0.2s ease;
    }
`

