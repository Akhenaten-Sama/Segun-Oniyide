import React from 'react'

import Navbar from '../navbar/navbar'
import Footer from '../Footer/footer'




const LayOut = (props)=> { 
const {handleClick} = props


    return(

<div>

<Navbar handleClick={handleClick}/>
{props.children}
<Footer />


</div>

)}

export default LayOut