import React from 'react'
 import github from "../../../assest/github.png"
 import linkdin from "../../../assest/linkedin.png"
 import instagram from "../../../assest/instagram.png"
const Homeimage = () => {
  return (
    <div className='l-home-social'>
               <img src={github}  alt="" />
               <img src={linkdin}  alt="" />
               <img src={instagram}  alt="" />
             </div>
  )
}

export default Homeimage