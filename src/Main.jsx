import React, { useState, useEffect, createElement } from 'react'
import Timer from './Timer';
import Modal from './Modal';
import Chat from './Chat';
import './styles/Main.css'

let data = ["", "", "", "", "", "", "", "", ""]
export default function Main() {
    const players = [
        {id: 0, name: 'Первый игрок', percent: "0%", sign: "x", im: "cross.svg", color: "var (--green)"},
        {id: 1, name: 'Второй игрок', percent: "0%", sign: "o", im: "zero.svg", color: "var (--red)"}
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

    const [startGame, setStartGame] = useState(false);

    let [count, setCount] = useState(0);

    const [isActivity, setIsActivity] = useState(players[1]);

    const [showModal, setShowModal] = useState({show: false, modalText: ""});

    const motion = (e, num) => {
        if (!startGame || data[num] != "") {
            return 0
        }

        setIsActivity(players[count % 2 == 0 ? 0 : 1]);
        setCount(++count);
        document.getElementById('step').innerHTML = "Ходит " + isActivity.name;
        var imgF = document.createElement('img');
        imgF.className = 'img-field';
        imgF.src = isActivity.im;
        e.currentTarget.appendChild(imgF);
        data[num] = isActivity.sign;
        if (count == 9) {
            setShowModal({show: true, modalText: "Ничья"});
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
        setShowModal({show: false, modalText: ""});
        setCount(0);
        setIsActivity(players[1]);
        data = ["", "", "", "", "", "", "", "", ""]
        for (var i = 0; i < 9; i++) {
            document.getElementById('input'+i).style.background = 'white';
            document.getElementById('input'+i).innerHTML = null;
        }
        document.getElementById('step').innerHTML = "Начать игру";
    }


    const win = (winner) => {
        setStartGame(false);
        for (var i = 0; i < 3; i++) {
            document.getElementById('input'+winner[i]).style.background  = isActivity.id == 0 ? 'var(--lightred)': 'var(--lightgreen)';
        }
        setShowModal({show: true, modalText: "Победил " + isActivity.name});
    }

    function clickStart() {
        restartGame()
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
                        <div className='input-field' id='input0' onClick={(event) => { motion(event, 0) }}></div>
                        <div className='input-field' id='input1' onClick={(event) => { motion(event, 1) }}></div>
                        <div className='input-field' id='input2' onClick={(event) => { motion(event, 2) }}></div>
                        <div className='input-field' id='input3' onClick={(event) => { motion(event, 3) }}></div>
                        <div className='input-field' id='input4' onClick={(event) => { motion(event, 4) }}></div>
                        <div className='input-field' id='input5' onClick={(event) => { motion(event, 5) }}></div>
                        <div className='input-field' id='input6' onClick={(event) => { motion(event, 6) }}></div>
                        <div className='input-field' id='input7' onClick={(event) => { motion(event, 7) }}></div>
                        <div className='input-field' id='input8' onClick={(event) => { motion(event, 8) }}></div>
                    </div>
                    <button className='step' id="step" onClick={clickStart}>
                        Начать игру
                    </button>
                </div>
            </div>
            <div className='block'>
                <Chat activityPlayers={() => players[isActivity.id == 0 ? 1 : 0]} startGame={startGame}/>
            </div>
            <Modal show={showModal} onRestart={restartGame}/>
        </main>
    )
};
