import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { NavLink } from "react-router-dom";
import "./FirstPage.css";

export function FirstPage() {
    return (
        <div>
            <Header />
            <p>Правила игры:</p>
            <Footer />
        </div>
    );
}