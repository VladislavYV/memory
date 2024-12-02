import "./Grid.css"
import { useState } from "react"
import Card from "../card/Card"
import { images } from "../../data.js"
import React from "react"
import { Header } from "../header/Header"


export default function Grid({ images, finishedItems, checkItems }) {

    
    const [visibleItems, setVisibleItems] = React.useState([]);

    const handleCardClick = (id) => {
        console.log(id)
        console.log(visibleItems)
        if (finishedItems.includes(id) || visibleItems.includes(id)) {
            return;
        }

        switch (visibleItems.length) {
            case 0:
                setVisibleItems([id]);
                break;
            case 1:
                setVisibleItems((items) => [...items, id]);
                checkItems(visibleItems[0], id);
                setTimeout(() => {
                    setVisibleItems([]);
                }, 700);
                break;
            default:
                setVisibleItems([]);
        }
    };

    return (
        <div className="grid-container">
            {images.map((item) => (
                <Card
                    key = {item.id}
                    item = {item}
                    isVisible = {visibleItems.includes(item.id)}
                    isFinished = {finishedItems.includes(item.id)}
                    onCardClick = {handleCardClick}
                />
            ))}
        </div>
    );
}

// export function Grid() {
//     return (
//         <div className="grid-container">
//             {
//                 images.map((item) => (
//                     <Card
//                         key={item.id}
//                         path={item.url}
//                     />
//                 ))
//             }
//         </div>
//     )
// }