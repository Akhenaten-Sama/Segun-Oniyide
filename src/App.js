import React from 'react';
import {Route} from 'react-router-dom'
import LayOut from '../src/components/components/Layout/Layout'
import './App.css';
import Homepage from './Pages/HomePage/Homepage';
import About from './Pages/About/about'
import MyWork from './Pages/My_work/mywork'
import ContactMe from './Pages/Contacts/contacts'
import ScrollReveal from 'scrollreveal'
import M from 'materialize-css/dist/js/materialize'

class  App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       preloaded: false
    }
  }
  

  
  componentDidMount(){

    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});


    const mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb, {})


    const sr = ScrollReveal();


     sr.reveal('.navbar', {
     	duration: 2000,
     	origin: 'bottom'
     });

     sr.reveal('.showcase-left', {
     	duration: 3000,
     	origin: 'left',
     	distance:'300px'
     });

     sr.reveal('.showcase-right', {
     	duration: 2000,
       origin: 'right',
       delay: 2000,
     	distance:'300px'
     });
     sr.reveal('.btn', {
     	duration: 2000,
     	delay:2000,
     	origin: 'bottom'
     });
     sr.reveal('#testimonial div', {
     	duration: 2000,
     	origin: 'bottom'
     });
     sr.reveal('.poster-left', {
     	duration: 2000,
     	origin: 'left',
     	distance: '300px',
     	viewFactor: 0.2
     });
     sr.reveal('.poster-right', {
     	duration: 2000,
     	origin:'right',
     	distance: '300px',
     	viewFactor: 0.2
     });
     sr.reveal('.work1', {
     	duration: 2000,
     	delay:1000,
     	distance:'300px',
     	origin: 'left'
     });
     sr.reveal('.work2', {
     	duration: 2000,
     	delay:2000,
     	distance:'300px',
     	origin: 'bottom'
     });
     sr.reveal('.work3', {
     	duration: 2000,
     	delay:2000,
     	distance:'300px',
     	origin: 'top'
     });
     sr.reveal('.work4', {
     	duration: 2000,
     	delay:2000,
     	distance:'300px',
     	origin: 'left'
     });
     sr.reveal('.work5', {
     	duration: 2000,
     	delay:1000,
     	distance:'300px',
     	origin: 'middle'
     });
     sr.reveal('.work6', {
     	duration: 1000,
     	delay:2000,
     	distance:'300px',
     	origin: 'right'
     });
     sr.reveal('.work7', {
     	duration: 1000,
     	delay:2000,
     	distance:'300px',
     	origin: 'left'
     });
     sr.reveal('.work8', {
     	duration: 1000,
     	delay:2000,
     	distance:'300px',
     	origin: 'middle'
     });
     sr.reveal('.work9', {
     	duration: 1000,
     	delay:2000,
     	distance:'300px',
     	origin: 'bottom'
     });


     sr.reveal('.input1', {
     	duration: 2000,
     	delay:1000,
     	distance: '300px',
     	viewFactor: 0.2
     });
     sr.reveal('.input2', {
      duration: 2000,
      delay:1000,
      distance: '100px',
      viewFactor: 0.2
    });




  }
  
  
render(){




  
  return (
     
    (<div className="App">
    <LayOut>
    
    
    <Route  exact path='/' component={Homepage}/>
    <Route path='/about' component ={About} />
    <Route path='/mywork' component ={MyWork} />
    <Route path='/contacts' component ={ContactMe} />
 
    </LayOut>
    
      
      
    </div>)
    
      
    
    
  )

  
}

}

export default App;
