import { useEffect } from "react";
import { useState } from "react";

function getHour(timer){
    let hours=Math.floor(timer/60/60);
    hours= hours===0?'00':'0'+hours
    return hours;
}
function getMinute(timer){
    let minutes=Math.floor(timer/60%60);
    minutes= minutes < 10 ? '0' + minutes : minutes;
    return minutes;
}
function getSecond(timer){
    let seconds = timer%60;
    seconds=seconds < 10 ? '0' + seconds : seconds;
    return seconds;
}

const Countdown =()=>{

    const [hh, setHh]= useState('');
    const [mm, setMm]= useState('');
    const [ss, setSs]= useState('');
    useEffect(()=>{
        const clockCountdown = new Date();
        let a = clockCountdown.getHours()%2;
        let b =0;
        a===0? b=7200:b=3600;
        let timer= b-clockCountdown.getMinutes()*60-clockCountdown.getSeconds();
        const countdownInterval = setInterval(()=>{
            const HH=getHour(timer);
            const MM=getMinute(timer);
            const SS=getSecond(timer);
            setHh(HH);
            setMm(MM);
            setSs(SS);
            timer--;
        },1000);
        return ()=>{
            clearInterval(countdownInterval);
        }
    },[])
    return(
        <>
            <div className="flash-time">
                <span><div className="time-content"></div>Kết thúc trong</span>
                <span><div className="time-box h" id="hh">{hh}</div></span>
                <span><div className="time-content">:</div></span>
                <span><div className="time-box m" id="mm">{mm}</div></span>
                <span><div className="time-content">:</div></span>
                <span><div className="time-box s" id="ss">{ss}</div></span>
            </div>
        </>
    )
}
export default Countdown;