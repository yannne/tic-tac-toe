import React from 'react'
import './styles/Header.css'
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {

const setActive = ({isActive}) => isActive ? 'buttonActive' : 'buttonInactive';
const link = useNavigate();

const toBack = () => link('/');

    return (
        <div>
            <header>
                <div className='logo'>
                    <img className='iconSvg' src="logo.svg" alt="logo picture" />
                </div>
                <div className='links'>
                    <NavLink to='main' className={setActive}>
                        Игровое поле
                    </NavLink>
                    <NavLink to='rating' className={setActive}>
                        Рейтинг
                    </NavLink>
                    <NavLink to='activePlayers' className={setActive}>
                        Активные игроки
                    </NavLink>
                    <NavLink to='gameHistory' className={setActive}>
                        История игр
                    </NavLink>
                    <NavLink to='listOfPlayers' className={setActive}>
                        Список игроков
                    </NavLink>
                </div>
                <div className='exit'>
                    <button className='button' onClick={toBack}>
                        <img className='iconSvg' src="exit.svg" alt="exit picture" />
                    </button>
                </div>
            </header>
        </div>
    )
}
