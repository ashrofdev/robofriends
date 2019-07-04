import React from 'react'
import Cards from './Cards'

const cardList = ({robots, oninputChange}) => {
   const cardComponent = robots.map((user, i)=>{
       return  <Cards key={robots[i].id} id= {robots[i].id} name={robots[i].name} email={robots[i].email}/>
   })

    return (
        <div className="cards" style={{border: '1px solid black'}}>
           {cardComponent}
        </div>
    )
}
export default cardList