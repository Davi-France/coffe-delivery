import React from 'react'
import { Intro } from './Intro/Intro'
import { Shop } from './Shop/Shop'
import { HomeContainer } from './styles'

export function Home() {
    return (
        <div>
            <HomeContainer>
                <Intro />
                <Shop />
            </HomeContainer>
        </div>
    )
}
