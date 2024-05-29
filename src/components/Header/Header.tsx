import { NavLink, Outlet } from "react-router-dom";
import { HeaderNavContainer, Location, LocationAndCheckout } from "./styles";
import Logo from '../../assets/logo.png'
import { ShoppingCart, MapPin } from "phosphor-react";

export function Header() {
    return (
        <main>
            <HeaderNavContainer>

                <NavLink to='/'>
                    <img src={Logo} alt="" />
                </NavLink>
                <LocationAndCheckout>
                    <Location><MapPin size={24} />Porto Alegre, RS</Location>

                    <NavLink to='/checkout'>
                        <ShoppingCart size={24} />
                    </NavLink>
                </LocationAndCheckout>

            </HeaderNavContainer>
            <Outlet />
        </main>
    )
}