import { useEffect, useState } from "react";
import { ICountdown, ITimer } from "../interface";


export default function LiveClock({ expiresAt }: ICountdown) {
    const [remainingTime, setRemainingTime] = useState("");

    const getTwoDigit = (number: number) => {
        return number > 9 ? number : `0${number}`;
    };

    const updateTimeHandler = ({ days, hours, minutes, seconds }: ITimer) => {
        const remDays = days > 0 ? `${getTwoDigit(days)}:` : "";
        const remHours = `${getTwoDigit(hours)}:`;
        const remMinuts = `${getTwoDigit(minutes)}:`;
        const remSeconds = `${getTwoDigit(seconds)}`;

        const time = remDays + remHours + remMinuts + remSeconds;

        setRemainingTime(time);
    };

    useEffect(() => {
        const countDownDate = new Date(expiresAt).getTime();
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
            }
        }, 1000);

        return () => clearInterval(x);
    }, [expiresAt]);

    return remainingTime
}