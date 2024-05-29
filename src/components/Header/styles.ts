import styled from 'styled-components'

export const HeaderNavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    margin: 2rem 0rem;
`

export const LocationAndCheckout = styled.div`
    display: flex;
    flex-direction: row; 
    gap: 1rem;
    align-items: center;

    a{
        color: ${props => props.theme['yellow-dark']}  ;
        background-color: ${props => props.theme['yellow-light']};
        padding: 0.4rem 0.5rem;
        font-size: 1rem;
        border-radius: 6px;
    }
`

export const Location = styled.h4`
    display: flex;
    flex-direction: row; 
    gap: 0.2rem;
    align-items: center;

    color: ${props => props.theme['purple-dark']}; 
    font-size: 1rem;
    font-weight: 400;
    background-color: ${props => props.theme['purple-light']};
    padding: 0.5rem 0.5rem;
    border-radius: 6px;

`

