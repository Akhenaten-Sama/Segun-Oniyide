import React from 'react';
import emailjs from 'emailjs-com';



export default class ContactUs extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            response:""
             
        }
    }
    
    componentDidMount(){
        this.setState({response:null})
    }


    
            


      sendEmail =(e)=> {
            e.preventDefault();
            const USER_ID = 'user_cBAMFUH0YdwQscLQz81ij'
            const Service_ID = 'Segunflames'
            const Template_ID = 'template_wisA9rl5'
            emailjs.sendForm(Service_ID, Template_ID, e.target, USER_ID)
              .then((result) => {
        
        this.setState({response:result})
        document.getElementById("cancel").reset()

                  
              }, (error) => {
                  console.log(error.text);
              });
          }

    

   


  render(){

    return (
    <div class="col s12 m6 input2">
    <form id="cancel"  onSubmit={this.sendEmail} >
        <div class="card-panel grey lighten-3">
          <h5>Please fill out this form</h5>
          <div class="input-field">
            <input type="text" placeholder="name" name='name' required/>

          </div>
          <div class="input-field">
            <input type="text" placeholder="Email" name='email' required/>
            
          </div>
          <div class="input-field">
            <input type="text" placeholder="Phone" name='phone' required/>
            
          </div>
          <div class="input-field">
            <textarea class='materialize-textarea' placeholder="Message" name='message' required></textarea>           
          </div>
          <div>
            <input type="submit" value='Send' onClick={this.clearForm} class='btn grey darken-3'/>
          </div>

        </div>
        </form>
        {this.state.response? <div class='grey lighten 3'> <h5><i class="fa fa-check-circle" aria-hidden="true"></i>Your Message has been sent!</h5></div>:null}
      
      </div>
      
  );
}
}

