import React, { useState, useEffect, createElement } from 'react'
import Timer from './Timer';
import Modal from './Modal';
import Chat from './Chat';
import './styles/Main.css'

let data = ["", "", "", "", "", "", "", "", ""]
export default function Main() {
    const players = [
        { name: 'Первый игрок', percent: "0%", sign: "x", im: "cross.svg", color: "var (--green)"},
        { name: 'Второй игрок', percent: "0%", sign: "o", im: "zero.svg", color: "var (--red)"}
    ]
    const winCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let [modalText, setModalText] = useState();

    const [startGame, setStartGame] = useState(false);

    let [count, setCount] = useState(0);

    const [isActivity, setIsActivity] = useState(1);

    const [showModal, setShowModal] = useState(false);

    const motion = (e, num) => {
        if (!startGame || data[num] != "") {
            return 0
        }

        var imgF = document.createElement('img');
        imgF.className = 'img-field';

        if (count % 2 == 0) setIsActivity(0);
        else setIsActivity(1);
        setCount(++count);
        document.getElementById('step').innerHTML = "Ходит " + players[isActivity].name;
        imgF.src = players[isActivity].im;
        data[num] = players[isActivity].sign;
        e.currentTarget.appendChild(imgF);
        if (count == 9) {
            setModalText("Ничья");
            setShowModal(false);
            setShowModal(true);
        }
    }

    useEffect(() => {
        var div_id = document.getElementById('field');
        if (!startGame) {
            div_id.style.pointerEvents = 'none';
            return;
        } else div_id.style.pointerEvents = 'auto';
        for (var i = 0; i < winCombination.length; i++) {
            if (data[winCombination[i][0]] == data[winCombination[i][1]] && data[winCombination[i][1]] == data[winCombination[i][2]] &&
                data[winCombination[i][0]] != "") {
                    win(winCombination[i]);
                    return;
                }
        };
    })

    const restartGame = () => {
        setShowModal(false);
        setCount(0);
        setIsActivity(1);
        data = ["", "", "", "", "", "", "", "", ""]
        for (var i = 0; i < 9; i++) {
            document.getElementById(i).style.background = 'white';
            document.getElementById(i).innerHTML = null;
        }
        document.getElementById('step').innerHTML = "Начать игру";
    }


    const win = (winner) => {
        setStartGame(false);
        for (var i = 0; i < 3; i++) {
            if (isActivity == 0)
                document.getElementById(winner[i]).style.background = 'var(--lightred)';
            else document.getElementById(winner[i]).style.background = 'var(--lightgreen)';
        }
        setModalText("Победил " + players[isActivity].name);
        setShowModal(true);
    }

    function clickStart() {
        setStartGame(true)
        document.getElementById('step').innerHTML = "Ходит " + players[0].name;
    }
    return (
        <main>
            <div className='block'>
                <div className='gamers'>
                    <p className='title-gamers'>Игроки</p>
                    <div className='gamer'>
                        <img className='image-gamers' src="zero.svg" alt="Нолик" />
                        <p className='full-name'>{players[0].name}</p>
                        <p className='percent'>{players[0].percent} побед</p>
                    </div>
                    <div className='gamer'>
                        <img className='image-gamers' src="cross.svg" alt="Крестик" />
                        <p className='full-name'>{players[1].name}</p>
                        <p className='percent'>{players[1].percent} побед</p>
                    </div>
                </div>
            </div>
            <div className='block'>
                <div className='game'>
                    <Timer startGame={startGame}></Timer>
                    <div className='field' id='field'>
                        <div className='input-field' id='0' onClick={(event) => { motion(event, 0) }}></div>
                        <div className='input-field' id='1' onClick={(event) => { motion(event, 1) }}></div>
                        <div className='input-field' id='2' onClick={(event) => { motion(event, 2) }}></div>
                        <div className='input-field' id='3' onClick={(event) => { motion(event, 3) }}></div>
                        <div className='input-field' id='4' onClick={(event) => { motion(event, 4) }}></div>
                        <div className='input-field' id='5' onClick={(event) => { motion(event, 5) }}></div>
                        <div className='input-field' id='6' onClick={(event) => { motion(event, 6) }}></div>
                        <div className='input-field' id='7' onClick={(event) => { motion(event, 7) }}></div>
                        <div className='input-field' id='8' onClick={(event) => { motion(event, 8) }}></div>
                    </div>
                    <button className='step' id="step" onClick={clickStart}>
                        Начать игру
                    </button>
                </div>
            </div>
            <div className='block'>
                <Chat activityPlayers={players[isActivity == 0? 1:0].name} startGame={startGame}/>
            </div>
            <Modal winner={modalText} active={showModal} onRestart={restartGame}/>
        </main>
    )
};
