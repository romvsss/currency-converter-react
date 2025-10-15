import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formatDateTime = (date) => {
        const days = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
        const dayName = days[date.getDay()];

        return `Dziś jest ${dayName}, ${date.toLocaleString('pl-PL', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })}`;
    };

     return (
        <div className="clock">
            {formatDateTime(currentTime)}
        </div>
    );
}

export default Clock;