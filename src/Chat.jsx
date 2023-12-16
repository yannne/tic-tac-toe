import React, { useEffect, useState } from "react";
import MessageItem from "./MessageItem";

export default function Chat({activityPlayers, startGame}) {

    const [messages, setMessages] = useState([
        {fullName: null, nowTime: null, message: null, color: null, id: 0}
    ])

    const player = activityPlayers();

    useEffect (() => {
        if (!startGame) setMessages([{fullName: null, nowTime: null, message: null, color: null, id: 0}])
    }, [startGame])

    function addMessage() {
        var time = new Date;
        var textInput = document.getElementById('chat-input').value;
        const newMessages = {
            fullName : player.name,
            nowTime : time.getHours()+":"+time.getMinutes(),
            message : textInput,
            color : player.color,
            id: Date.now()
        }
        setMessages([...messages, newMessages]);
    }



    return (
        <div className='chat'>
            <div className="chat-field">
                {messages.map(m => 
                <MessageItem info={m} key={m.id} />
    )}
            </div>
            <div className="chat-acivity">
                <input className='chat-input' id="chat-input"></input>
                <button className='send' onClick={addMessage}>
                    <img src="send.svg" />
                </button>
            </div>
        </div>
    )
}