import React from "react"
import './card.css'



function Card(props) {
    return(
        <div className="boobs">
            <div className="tits">
            <img className='toy' src={props.img}/>
            <h1 className='title'>{props.text ? props.text : 'Ene bol Mangekyo Sharingan tsusaar sheetel cn genjutsu shaana'}</h1>
            </div>
        </div>
    )
} export default Card