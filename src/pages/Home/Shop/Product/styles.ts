import styled from 'styled-components'

export const ProductCard = styled.div`
    background: ${props => props.theme['base-card']};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0.8rem;
    margin-top: 4rem;
    border-radius: 6px 2rem 6px 3rem;
    gap: 0.6rem;
    
    img{
        margin-top: -4rem;
    }

    h5{
        color: ${props => props.theme['yellow-dark']};
        background: ${props => props.theme['yellow-light']};
        padding: 0.3rem;
        text-transform: uppercase;
        font-size: 0.65rem;
        border-radius: 1.4rem;
    }

    h3{
        font-family: 'Baloo 2';
        font-size: 1.3rem;
    }

    p{
        font-size: 0.8rem;
        text-align: center;
        color: ${props => props.theme['base-label']};
    }

    span{
        font-weight: 800;
        font-family: 'Baloo 2';
        font-size: 1.4rem;
        color: ${props => props.theme['base-text']};

        
    }
`

export const TagsArea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`

export const PurchaseCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.7rem;
    margin-top: 0.5rem;

`

export const ButtonAddToCard = styled.button`
        cursor: pointer;
        border: none;
        background-color: ${props => props.theme['purple-dark']};
        color: ${props => props.theme['white']};
        border-radius: 0.4rem;
        padding: 0.3rem 0.3rem;
        display: flex;
        align-items: center;

        &:hover{
            background-color: ${props => props.theme['purple']};
            transition: 0.3 ease;
        }

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
        padding: 0.3rem 0.6rem;
        font-size: 1.3rem;
        cursor: pointer;
    }
`