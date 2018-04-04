import React from 'react';
import styled from 'styled-components'
import background from '../assets/images/bg.jpg'
import {Route} from 'react-router-dom'

import LogoHeader from './LogoBox'
import Nav from './Nav'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Skills from './Skills'


/* eslint-disable*/ 


const LogoColor = 'fc5451'


const Container = styled.div`
    position:relative;
    width:100vw;
    height:100vh;
    background-color:black;
    overflow:hidden;
`

const BackgroundBox = styled.div`
    background-image:url(${background});
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:90%;
    filter:brightness(0.2) contrast(0.8) saturate(0.5); 
    background-repeat:no-repeat;
    background-position-x:center;
    background-position-y:center;

`



const Main = (props) => {
    return(
        <Container>
            <BackgroundBox></BackgroundBox>
            <Route path="/" exact component={LogoHeader} />
            <Route path="/about" component={About} />
            <Route path ="/skills" component ={Skills}/>
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Nav />
        </Container>
    )
}




export default Main;