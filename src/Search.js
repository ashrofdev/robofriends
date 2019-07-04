import React from 'react'
import './search.css'

const search = ({inputChange}) => {
    return (
        <div>
            <input onChange={inputChange} className="search" type="text" placeholder="Filter Robots"/>
        </div>
    )
}
export default search