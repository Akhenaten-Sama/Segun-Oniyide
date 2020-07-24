import React from 'react'

import Navbar from '../navbar/navbar'
import Footer from '../Footer/footer'




const LayOut = (props)=> { 



    return(

<div>

<Navbar />
{props.children}
<Footer />


</div>

)}

export default LayOut