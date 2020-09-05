import React from 'react';
import {Route, Switch} from 'react-router-dom'
import LayOut from '../src/components/components/Layout/Layout'
import './App.css';
import Homepage from './Pages/HomePage/Homepage';
import About from './Pages/About/about'
import MyWork from './Pages/My_work/mywork'
import ContactMe from './Pages/Contacts/contacts'
import sideEffect from './components/SideEffect/sideeffect';

class  App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       preloaded: false,
       islight: true
    }
  }
  

  
  componentDidMount(){
 sideEffect()
 this.setState({islight:!JSON.parse(localStorage.getItem('islight'))})
 console.log('route chnged')
 
  }

 


 
  
  
render(){
 
  const {islight}= this.state;
  const nav = document.querySelectorAll('.link')
  const icon = document.querySelector('.fa-moon-o')
  console.log(nav)
  console.log(icon)
  islight?document.body.classList.add('dark'):document.body.classList.remove('dark')
  //islight?icon.classList.remove('fa-moon-o'):icon.classList.add('fa-sun')
  //!islight?icon.classList.add('fa-moon-o'):icon.classList.remove('fa-sun')
  nav.forEach(link=> !islight? link.classList.add('black-text'):link.classList.remove('black-text'))


const handleclick = ()=>{
  const {islight}= this.state;
  this.setState({islight:!islight}, ()=>{
    localStorage.setItem('islight',(islight))
  })
  console.log(JSON.parse(localStorage.getItem('islight')))

}



  
  return (
     
    (<div className="App">

    <Switch>
    <LayOut handleClick={handleclick} islight={this.state.islight}>
    
    
    
    
    <Route  exact path='/' component={Homepage}/>
    <Route path='/about' component ={About} />
    <Route path='/mywork' component ={MyWork} />
    <Route path='/contacts' component ={ContactMe} />
    
    
 
    </LayOut>
    </Switch>
      
      
    </div>)
    
      
    
    
  )

  
}

}

export default App;
