import React from 'react';
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            Note App
        </div>

        <ul className="navbar-nav">

            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/"
                    exact
                >
                     Авторизация
                </NavLink>
            </li>

            <li className="nav-item">
                <div
                    className="nav-link"
                    //to="/formPassword"
                >
                    Подтверждение пароля
                </div>
            </li>

            <li className="nav-item">
                <div
                    className="nav-link"
                    //to="/cardList"
                >
                    Список карточек
                </div>
            </li>

            <li className="nav-item">
                <div
                    className="nav-link"
                    //to="/card"
                >
                    Просмотр карточки
                </div>
            </li>

            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/about"
                >
                    Информация
                </NavLink>
            </li>

        </ul>

    </nav>
)