import React from 'react';
import ContactUs from '../../Email/emailJs.component'


const ContactMe = () => (


    <div>
 <section id='contacts' class="section section-contact scrollspy">
  <div class="container">
    <div class="row">
      <div class="col s12 m6 input1">
        <div class="card-panel grey darken-3 white-text center">
          <i class="material-icons">email</i>
          <h5>Contact Us For Booking</h5>
          <p>You can reach out to us from this address</p>
        </div>
        <ul class="collection with-header black-text ">
          <li class="collection-header">
            <h4>Location</h4>
          </li>
          <li class="collection-item">
       University College Hospital
          </li>
          <li class="collection-item ">
            Alexander Brown Hall
          </li>
          <li class="collection-item">
            Room G49
          </li>
        </ul>
      </div>
      <ContactUs />
    </div>
  </div>
</section>


<section class="section section-follow grey darken-3  white-text media1">
   <div class="container">
     <div class="row">
       <div class="col s12">
         <h4>Follow Segun Oniyide</h4>
         <p>Follow us to stay informed!</p>
         <div class="col s3">
         	<a href="#" class='white-text'>
           <i class="fa fa-facebook fa-4x"></i>
         </a>
         </div> 
         <div class="col s3">
         	<a href="twitter.com/segunflames" class='white-text'>
           <i class="fa fa-twitter fa-4x"></i>
         </a>
         </div> 
         <div class="col s3">
         	<a href="http://linkedin.com/in/SegunFlames" class='white-text'>
           <i class="fa fa-linkedin fa-4x"></i>
           
         </a>
         </div>       
         
         <div class="col s3">
         	<a href="http://instagram.com/designedbysegunflames" class='white-text'>
           <i class="fa fa-instagram fa-4x"></i>
         </a>
         </div>
         
       </div>
     </div>
   </div>
 </section>
    
    </div>
)

export default ContactMe