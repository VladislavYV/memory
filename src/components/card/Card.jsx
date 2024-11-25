import "./Card.css"
import { useState } from "react"

export default function Card({ item, isVisible, isFinished, onCardClick }) {

    const { id, url } = item;

    const handleClick = () => {
        console.log(id)
        onCardClick(id);
    };

    // const classCard = `card
    //     ${isVisible ? "card-show" : ""}
    //     ${isFinished ? "card-finished" : ""} `;

    const classCardWrapper = `card-wrapper
        ${isVisible ? "card-wrapper-show" : ""}
        ${isFinished ? "card-wrapper-finished" : ""} `;

    return (
        <div className={classCardWrapper} onClick={handleClick}>
            <img src={url} alt="" />
        </div>
    );
}


// export function Card({ path }) {

//     const [checkCard, setCheckCard] = useState(false);

//     const handleClick = () => {
//         setCheckCard(!checkCard);
//     }

//     let className = `card-wrapper ${checkCard ? 'card-check' : ''}`;

//     return (
//         <div className="card-wrapper">
//             <img src={path} alt="" />
//         </div>
//     );
// }