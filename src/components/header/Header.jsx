import { NavLink, Link } from "react-router-dom"
import './Header.css'
import { Form } from 'react-router-dom';

export function Header () {
    return (
        <div className="header">
            <h1>Memory</h1>
            <div className="header">
                <nav>
                    <ul className='main-nav'>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'link link--active' : 'link')}>
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/gamepage" className={({ isActive }) => (isActive ? 'link link--active' : 'link')}>
                                Игра
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}