import React from 'react'
import './styles/Header.css'

export default function Header() {
    return (
        <header>
                <div className='logo'>
                    <img className='iconSvg' src="logo.svg" alt="logo picture" />
                </div>
                <div className='links'>
                    <button className='buttonActive'>Игровое поле</button>
                    <button className='buttonInactive'>Рейтинг</button>
                    <button className='buttonInactive'>Активные игроки</button>
                    <button className='buttonInactive'>История игр</button>
                    <button className='buttonInactive'>Список игроков</button>
                </div>
                <div className='exit'>
                    <button className='button'>
                        <img className='iconSvg' src="exit.svg" alt="exit picture" />
                    </button>
                </div>
        </header>
    )
}
