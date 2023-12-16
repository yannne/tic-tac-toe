import React, { useState } from 'react'
import './styles/Modal.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Main from './Main';
import Header from './Header';

export default function Authorization() {

    const [authInfo, setAuthInfo] = useState({ login: 'login', password: '1234' });

    const link = useNavigate();

    const Authorize = () => {
        var l = document.getElementById('loginInput').value;
        var p = document.getElementById('passwordInput').value;
        if (l == authInfo.login && p == authInfo.password) {
            return link('/main');
        } return;
    }

    return (
        <div>
            <div className="modal">
                <div className="modal_container">
                    <img className="modal_img" src="auth.svg" />
                    <p className="modal_text">Войдите в игру</p>
                    <input className='modal_input' id='loginInput' placeholder='Логин' />
                    <input className='modal_input' id='passwordInput' placeholder='Пароль'></input>
                        <button className="modal_butrestart" onClick={Authorize}>Войти</button>
                </div>
            </div>
        </div>
    )
}
