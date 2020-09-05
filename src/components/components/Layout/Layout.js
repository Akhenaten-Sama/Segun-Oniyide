import React from 'react'

import Navbar from '../navbar/navbar'
import Footer from '../Footer/footer'




const LayOut = (props)=> { 
const {handleClick, islight} = props



    return(

<div>

<Navbar handleClick={handleClick} islight={islight}/>
{props.children}
<Footer />


</div>

)}

export default LayOut