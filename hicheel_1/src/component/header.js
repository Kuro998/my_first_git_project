import React from 'react'
import './header.css'


function Header(props) {
    return(
        <div>
            <h1 className='title'>{props.name ? props.name : 'Nymburger'}</h1>
            <img className='toy' src={props.img}/>
        </div>
    )
} export default Header