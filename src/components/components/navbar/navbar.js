import React from 'react';
import Logo from '../../../Logo.png'
import Logo2 from '../../../Logo2.png'


const Navbar = ({handleClick,islight}) => { 
    
    


    
    return (

<div>
<div className='switcher'><span><i onClick={handleClick} className="fa  fa-moon-o" aria-hidden="true"></i></span></div>
<div className='logo-header'><a href='/' ><img src={islight?Logo2:Logo} alt='logo' width='150' /></a>

</div>

    <nav className="nav-center transparent z-depth-0">

    <div class="nav-wrapper container ">
      
        <a href='#' data-target='mobile-nav' width='300' class='sidenav-trigger right'>
        <i className='material-icons grey'>menu</i></a>
        <ul className="hide-on-med-and-down centre black-text ">
            <li><a href="/Mywork" class="link ">Gallery</a></li>
            <li><a href="/about" class="link ">About</a></li>
            <li><a href="/contacts" class="link">Contact</a></li>
        </ul>

        </div>
    
        </nav>

        <ul id="mobile-nav" class="sidenav">
            <li><a href="/">Home</a></li>
            <li><a href="/mywork">My work</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contacts">contacts</a></li>
            <li><a href="http://instagram.com/designedbysegunflames"><i class="fa fa-instagram  black-text fa-2x"></i></a></li>
            <li><a href="https://twitter.com/segunflames"><i class="fa fa-twitter black-text fa-2x"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus black-text fa-2x"></i></a></li>
        </ul>
        
</div>






)
}

export default Navbar