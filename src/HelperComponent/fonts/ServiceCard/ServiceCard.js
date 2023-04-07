import React from 'react'
 import humble from "../../../assest/humble.png"
 import "./ServiceCard.css"
const ServiceCard = ({text,body,btn}) => {
  return (
    <div  className='sv-wrapper'>
          <img src={humble} alt="" />
          <h1>{text}</h1>
          <p>{body}</p>
          <button className=''>{btn}</button>
    </div>
  )
}

export default ServiceCard