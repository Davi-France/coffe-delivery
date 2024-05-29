import styled from "styled-components"

export const ShopContainer = styled.section`
    display: flex;
    margin-top: 4rem;
    flex-direction: column;
`

export const TitleShop = styled.h2`
    font-size: 2rem;
    font-family: 'Baloo 2';
    color: ${props => props.theme['base-subtitle']};
    font-weight: bold;  
`

export const ProductsList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-top: 1rem;
`