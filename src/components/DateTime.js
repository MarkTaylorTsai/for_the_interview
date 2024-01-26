import { useEffect, useState } from "react";
import moment from "moment"

export default function DateTime() {
    const [t, setT] = useState({
        day: moment().format('DD'),
        month: moment().format('MM'),
        year: moment().format('YYYY'),
    });

    useEffect(() => {
        var time = setInterval(() => {
            const date = new Date();
            const day = date.getDate().toString();
            const month = (date.getMonth() + 1).toString();
            const year = date.getFullYear().toString();

            setT({
                day: day,
                month: month,
                year: year,
            });
        }, 1000);
        return function clearT() {
            clearInterval(time);
        };
    }, []);

    return (
        <div id='dateTime'>
            <h1>
            <div id="year">
                {t.year}
            </div>
            <br />
            <div id="month">
                {t.month}<span id="moon">月</span>
            </div>
            <br />
            <div id='day'>
                {t.day}
            </div>
            </h1>
        </div>
    );
}
