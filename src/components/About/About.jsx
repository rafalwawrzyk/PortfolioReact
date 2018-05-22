import React from 'react'
import styled,{keyframes} from 'styled-components'

/* eslint-disable*/ 

const scroll = keyframes`
   0% {
     opacity: 0; }
   10% {
     -webkit-transform: translateY(0);
     transform: translateY(0);
     opacity: 1; }
   100% {
     -webkit-transform: translateY(15px);
     transform: translateY(15px);
     opacity: 0; } 
     }
`

const Container = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow-y:hidden;
    z-index:2;
`

export const HeaderTitle = styled.p`
  position:absolute;
  top:-20px;
  left:0;
  text-transform:uppercase;
  font-family: 'Gruppo', cursive;
  font-size:22em;
  padding:0;
  margin:0;
  letter-spacing:10px;
  font-weight:200;
  color: rgba(171, 44, 255,0.3);
`

const LeftSideContainer = styled.div`
  position:absolute;
  top:60%;
  left:0;
  width:60%;
  height:60%;
  transform:translate(0, -50%);
  display:flex;
  justify-content:center;
  overflow-y:scroll;
  ::-webkit-scrollbar{
    display:none;
  }

 
`

const LeftSideContent = styled.div`
  width:80%;
  h1{
    font-size:3em;
    padding:0;
    margin:0;
  }
  p{
    font-size:1.3em;
    line-height:30px;
  }
`

const RightSideContainer = styled.div`
  position:absolute;
  top:60%;
  right:0;
  width:40%;
  height:60%;
  transform:translate(0, -50%);
`

const ScrollDowns = styled.div`
    position: absolute;
    top: 35%;
    bottom: 0;
    left: 20px;
    margin: auto;
    z-index: 999;
    width: 80px;
    height: 80px;
    transform:translate(0,-50%); 
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    
`

const Mousey = styled.div`
   width: 3px;
   padding: 10px 15px;
   height: 35px;
   border: 2px solid #fff;
   border-radius: 25px;
   opacity: 0.75;
   cursor: pointer; 
`

const Scroller = styled.div`
   width: 3px;
   height: 10px;
   margin: -1px;
   border-radius: 25%;
   background-color: #fff;
   -webkit-animation-name: scroll;
   animation-name: ${scroll};
   -webkit-animation-duration: 1.2s;
   animation-duration: 1.2s;
   -webkit-animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
   animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
   -webkit-animation-iteration-count: infinite;
   animation-iteration-count: infinite;
`

const List = styled.ul`
  list-style-type:none;
  height:100%;
  position: absolute;
  top:0;
  padding:0;
  &:after{
    content:'';
    width:2px;
    height:100%;
    position:absolute;
    top:0;
    background-color:rgba(255,255,255,0.1);
  }
 
  li{
    font-size:1.5rem;
    padding-bottom:10px;
    padding-left:2em;
    position:relative;
    height:40px;
    &:nth-child(1){
      border-left:2px solid #fff;
      a{
        color:rgba(255,255,255,0.7);;
      }
    }
    a{
      color:rgba(255,255,255,0.2);
      text-decoration:none;
      line-height:80px;
    }
  }
`


const About = () => {
  return (
    <Container>
     <HeaderTitle>
       About
     </HeaderTitle>
     <LeftSideContainer>
       <LeftSideContent>
       <h1>Can i be a programmer?</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         Maecenas porta a eros non iaculis. 
         Aliquam venenatis eu augue ac elementum. 
         Vestibulum ut justo viverra nisi dictum laoreet vitae a arcu. 
         Aliquam erat volutpat. Quisque posuere consequat faucibus. 
         Mauris eu mauris eget risus porta sodales</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Maecenas porta a eros non iaculis. 
           Aliquam venenatis eu augue ac elementum. 
           Vestibulum ut justo viverra nisi dictum laoreet vitae a arcu. </p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         Maecenas porta a eros non iaculis. 
         Aliquam venenatis eu augue ac elementum. 
         Vestibulum ut justo viverra nisi dictum laoreet vitae a arcu. 
         Aliquam erat volutpat. Quisque posuere consequat faucibus. 
         Mauris eu mauris eget risus porta sodales</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         Maecenas porta a eros non iaculis. 
         Aliquam venenatis eu augue ac elementum. 
         Vestibulum ut justo viverra nisi dictum laoreet vitae a arcu. 
         Aliquam erat volutpat. Quisque posuere consequat faucibus. 
         Mauris eu mauris eget risus porta sodales</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         Maecenas porta a eros non iaculis. 
         Aliquam venenatis eu augue ac elementum. 
         Vestibulum ut justo viverra nisi dictum laoreet vitae a arcu. 
         Aliquam erat volutpat. Quisque posuere consequat faucibus. 
         Mauris eu mauris eget risus porta sodales</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         Maecenas porta a eros non iaculis. 
         Aliquam venenatis eu augue ac elementum. 
         Vestibulum ut justo viverra nisi dictum laoreet vitae a arcu. 
         Aliquam erat volutpat. Quisque posuere consequat faucibus. 
         Mauris eu mauris eget risus porta sodales</p>
       </LeftSideContent>
     </LeftSideContainer>
     <RightSideContainer>
       <div>
         <List>
           <li>
             <a href="">
              About me
             </a>
           </li>
           <li><a href="#">Why programming</a></li>
           <li><a href="#">Hobbies</a> </li>
           <li><a href="#">Tools</a> </li>
           <li><a href="#">Langauge</a> </li>
           <li><a href="#">Study</a>  </li>
           <li><a href="#">Skills</a></li>
         </List>
       </div>
     </RightSideContainer>

    </Container>
  )
}



export default About;