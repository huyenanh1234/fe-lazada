import { useEffect } from "react";
import { useState } from "react";

function getHour(timer){
    let hours=Math.floor(timer/60/60);
    hours= hours==0?'00':'0'+hours
    return hours;
}
function getMinute(timer){
    const mm=date.getMinutes();
    let minutes=Math.floor(60-mm);
    return minutes;
}
function getSecond(timer){
    const ss=date.getSeconds();
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
        let a = hh%2;
        let b =0;
        a==0? b=7200:b=3600;
        let timer= b-mm*60-ss;
        setInterval(()=>{
            const HH=getHour(clockCountdown,timer);
            const MM=getMinute(clockCountdown,timer);
            const SS=getSecond(clockCountdown,timer);
            setHh(HH);
            setMm(MM);
            setSs(SS);
            timer--;
        },1000);
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