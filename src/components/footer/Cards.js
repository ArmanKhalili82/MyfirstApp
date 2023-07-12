import React from 'react'
import Card from './Card'
import Card1 from './Card1'
import Card2 from './Card2'
import './Cards.css'


const Cards = () => {
  return (
    <div className='cards-full'>
        <Card />
        <Card1 />
        <Card2 />
    </div>
  )
}

export default Cards