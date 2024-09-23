import React from 'react'
import Navagationbar from './Navagationbar/Navagatiobar'
import Homepage from './Home/Homepage'
import Cars from './Landingpages/Cars'
import Bikes from './Landingpages/Bikes'
import Contactpage from './Contact/Contactpage'
import { Route,Routes } from 'react-router-dom'

const Mainhomepage = () => {
  return (
    <div>
      <Navagationbar/>
    <Routes>
        <Route path='/home' element = {<Homepage/>}/>
        <Route path='/cars' element = {<Cars/>}/>
        <Route path='/bikes' element = {<Bikes/>}/>
        <Route path='/contact' element = {<Contactpage/>}/> 
    </Routes>
    
    </div>
  )
}

export default Mainhomepage
