import React, { useEffect, useState } from 'react'

const Timer = ({ startGame }) => {
    const [isTime, setIsTime] = useState({ s: '00', m: '00' });
    const [isInterval, setIsInterval] = useState(null);
    var timer = 0;
    useEffect(() => {
        if (startGame)
            setIsInterval(setInterval(() => {
                timer++;
                var secondVal = Math.floor(timer) - Math.floor(timer / 60) * 60;
                var minuteVal = Math.floor(timer / 60);
                setIsTime({
                    s: secondVal < 10 ? "0" + secondVal.toString() : secondVal.toString(),
                    m: minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal.toString()
                });
            }, 1000))
        else {
            setIsInterval(clearInterval);
            setIsTime({ s: '00', m: '00' });
        }
    }, [startGame]);

    return (
        <div className='timer'>
            <p className='time'>
                <span>{isTime.m}</span>
                :
                <span>{isTime.s}</span>
            </p>
        </div>
    )
}
export default Timer;