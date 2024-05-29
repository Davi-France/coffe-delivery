import styled from 'styled-components'

export const IntroContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    font-size: 1.3rem;
    font-family: 'Baloo 2';
    margin-top: 7rem;
`

export const IntroTextArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SpanContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 3rem;

    span{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;
    }
`

export const Spans = styled.span`

`