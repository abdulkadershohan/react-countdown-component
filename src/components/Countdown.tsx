// import useLiveClock from '../hook/useLiveClock';

// type ICountdownProps = {
//     date: string | number | Date;
//     rest?: unknown;
//     variant?: 'default' | 'primary' | 'secondary' | 'days' | 'hours' | 'minutes' | 'seconds';
// };

// export default function Countdown({ date, variant = 'default', ...rest }: ICountdownProps) {
//     const { days, hours, minutes, remainingTime, seconds } = useLiveClock({ date })
//     switch (variant) {
//         case 'primary':
//             return (
//                 <span>
//                     {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
//                 </span>
//             );
//         case 'secondary':
//             return (
//                 <span>
//                     {hours} hours, {minutes} minutes, {seconds} seconds
//                 </span>
//             );

//         case 'days':
//             return (
//                 <span>
//                     {days} days
//                 </span>
//             );
//         case 'hours':
//             return (
//                 <span>
//                     {hours} hours
//                 </span>
//             );
//         case 'minutes':
//             return (
//                 <span>
//                     {minutes} minutes
//                 </span>
//             );
//         case 'seconds':
//             return (
//                 <span>
//                     {seconds} seconds
//                 </span>
//             );

//         default:
//             return remainingTime
//     }
// }
import React from 'react'

export default function Countdown() {
    return (
        <div>Countdown</div>
    )
}
