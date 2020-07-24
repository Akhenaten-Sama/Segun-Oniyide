import styled from 'styled-components';

export const WrapperContainer = styled.div`
  
    body{
        background: black;
        overflow-x: hidden;
        position: relative;
    }
    .navbar-sticky{
        position:sticky;
        top:0px;
        z-index: 10;
    
    }
    
    .navbar{
        width:100vw;
    
        
    }
    
    
    
    ul.centre{
        justify-content: center;
    }
    
    
    
    #showcase{
            margin-top:5% !important;
        }
    
    #showcase .showcase-right{
    
    margin-top: 40%;
    margin-left: 20%;
    margin-right: 10%;
        }
    
    
        #showcase img{
            margin-left: 0.2%;
            
    
        }
    
    hr.yessss {
        overflow: visible; /* For IE */
        padding: 0;
        border: none;
        border-top: medium double #333;
        color: #333;
        text-align: center;
    }
    hr.yessss:after {
        content: "§";
        display: inline-block;
        position: relative;
        top: -0.7em;
        font-size: 1.5em;
        padding: 0 0.25em;
        background: white;
    }
    
    #gallery{
      width:100vw;
    }
    
    
    @media only screen and (max-width: 780px){
        #showcase img{
            width: 100vw;
        }
    }



`;
