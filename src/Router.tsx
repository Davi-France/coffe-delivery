import { Route, Routes } from "react-router-dom";
import { Header } from './components/Header/Header'
import { Home } from "./pages/Home/Home";
import { Checkout } from "./pages/Checkout/Checkout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
            </Route>
        </Routes>
    )
}