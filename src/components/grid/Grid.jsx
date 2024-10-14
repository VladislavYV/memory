import "./Grid.css"
import { useState } from "react"
import { Card } from "../card/Card"
import { images } from "../../data.js"

export function Grid() {
    return (
        <div className="grid-container">
            {
                images.map((item) => (
                    <Card
                        key={item.id}
                        path={item.url}
                    />
                ))
            }
        </div>
    )
}