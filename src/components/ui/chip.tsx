import React from 'react';
import { chipProps } from '../../types/ui';

export default function Chip({ label, color, textColor }:chipProps) {
    return (
        <div
            className={`rounded-xl py-0.5 px-2.5 border border-transparent text-sm transition-all shadow-sm ${color} ${textColor}`}
        >
            {label}
        </div>
    );
}










// export default function chip({ label, color, textColor }) {
//     return (
//         <div className={`rounded-xl py-0.5 px-2.5 border border-transparent text-sm transition-all  shadow-sm ${color} ${textColor}`}>
//             {label}
//         </div>
//     )
// }