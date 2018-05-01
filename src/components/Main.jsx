import React,{Component} from 'react';
import styled from 'styled-components'
import background from '../assets/images/mymovie.mp4'
import {Route} from 'react-router-dom'

import LogoHeader from './LogoBox'
import Nav from './Nav'
import About from './About/About'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'


/* eslint-disable*/ 


const LogoColor = 'fc5451'


const Container = styled.div`
    position:relative;
    width:100vw;
    height:100vh;
    background-color:black;
    overflow:hidden;
    z-index:1;
`

const VideoContainer = styled.div`
        z-index:3;
        video{
            height: 100%;
            width: 177.77777778vh; /* 100 * 16 / 9 */
            min-width: 100%;
            min-height: 56.25vw;
        }
`

const Overlay = styled.div`
        height:100vh;
        width:100vw;
        position: absolute;
        top:0;
        left:0;
        background-color:#322E8A;
        opacity:0.3;
`

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            mainTitle:{
                primary:'Wawrzyk',
                second:'Web Developer'
            }
        }
        this.onClickHeader = this.onClickHeader.bind(this)
    }

    onClickHeader(){
        console.log('clicked')
    }

    render(){
        return(
            <Container>
                <VideoContainer>
                    <video id="background-video" loop autoPlay>
                    <source src={background} type="video/mp4" />
                    <source src={background} type="video/ogg" />
                    </video>
                </VideoContainer>
                <Overlay />
                <Route path="/" exact onClick={this.onClickHeader.bind(this)} render={()=> <LogoHeader titlesMain={this.state.mainTitle}/>} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Route path="/" exact  component={Nav} />
            </Container>
        )
    }

}




export default Main;