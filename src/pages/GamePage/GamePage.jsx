import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Grid } from "../../components/grid/Grid"
import { FirstPage } from "../FirstPage/FirstPage";
import "./GamePage.css"

export function GamePage() {
    return (
        <div>
            <Header/>
            <Grid/>
            <Footer/>
        </div>
    );
}