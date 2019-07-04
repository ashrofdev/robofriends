import React from 'react'
import './cards.css'

const card = (props) => {
    return (
        <div className="card">
            <figure>
                <img src={`https://robohash.org/${props.id}`} alt=""/>
            </figure>
            <div className="name">{props.name}</div>
            <div className="gmail">{props.email}</div>
        </div>
    )
}
export default card