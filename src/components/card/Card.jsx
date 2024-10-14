import "./Card.css"
import { useState } from "react"

export function Card({ path }) {

    
    const [checkCard, setCheckCard] = useState(false);

    const handleClick = () => {
        setCheckCard(!checkCard);
    }

    let className = `card-wrapper ${checkCard ? 'card-check' : ''}`;

    return (
        <div className="card-wrapper">
            <img src={path} alt="" />
        </div>
    );
}