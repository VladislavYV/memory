import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { NavLink, Link } from "react-router-dom";
import "./FirstPage.css";

export function FirstPage() {
    return (
        <div>
            <Header />
            <div className="rules">
                <p>На столе раскладывается четное количество парных карточек, рубашками наверх. Цель игры — как можно быстрее закончить ее, собрав максимальное количество пар, открывая по две карточки сразу. Открыв карточки с разными картинками, их следует опять перевернуть, оставляя в игре. Кто больше открыл парных картинок, тот выиграл!</p>
                <NavLink to="/gamepage" className={({ isActive }) => (isActive ? 'link link--active' : 'link')}>
                    Начать игру
                </NavLink>
            </div>
            <Footer />
        </div>
    );
}