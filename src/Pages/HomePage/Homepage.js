import React from 'react';
import Showcase from '../../components/components/Showcase/showcase'


class IndexPage extends React.Component  {
    constructor(props) {
        super(props)
    
        this.state = {
             preloader:false
        }
    }
    

    componentDidMount(){

        setInterval(() => {
            this.setState({preloaded:true})
            
          }, 3000);

    }
    
  render(){  
    
    return (
     <div>
 
 <Showcase />
 
 
 
 </div>
)
  
}
}






export default IndexPage