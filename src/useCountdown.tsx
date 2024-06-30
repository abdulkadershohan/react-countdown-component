import { useEffect, useState } from "react";

type ICountdown = {
    date: string | number | Date
};
type ITimer = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export default function useCountdown(date: ICountdown["date"]) {
    const [remainingTime, setRemainingTime] = useState("");
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const getTwoDigit = (number: number) => {
        return number > 9 ? number : `0${number}`;
    };

    const updateTimeHandler = ({ days, hours, minutes, seconds }: ITimer) => {
        const remDays = days > 0 ? `${getTwoDigit(days)}:` : "";
        const remHours = `${getTwoDigit(hours)}:`;
        const remMinuts = `${getTwoDigit(minutes)}:`;
        const remSeconds = `${getTwoDigit(seconds)}`;

        const time = remDays + remHours + remMinuts + remSeconds;
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
        setRemainingTime(time);
    };

    useEffect(() => {
        const countDownDate = new Date(date as string).getTime();
        // Update the count down every 1 second
        const x = setInterval(() => {
            // Get today's date and time
            const now = new Date().getTime();
            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );

            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            updateTimeHandler({ days, hours, minutes, seconds });
            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                setRemainingTime("Expired");
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            }
        }, 1000);

        return () => clearInterval(x);
    }, [date]);

    return { days, hours, minutes, remainingTime, seconds };
}