import React, { Children } from 'react'
import "./Slide.css"

import { cards } from '../../data.js'
import CatCard from '../../components/catCard/CatCard.jsx'




const Slide = () => {
  
  return (
    <div className='slide'>
        <div className="containers">
        {cards.map(card=>(
          <CatCard item={card} key={card.id}/>
        ))}
        </div>
    </div>
          
)}

export default Slide