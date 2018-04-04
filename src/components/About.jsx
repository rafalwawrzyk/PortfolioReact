import React,{Component} from 'react'
import styled from 'styled-components'
import GSAP from 'react-gsap-enhancer'
import { TweenMax } from 'gsap';

/*eslint-disable */

const Header = styled.h2`
    color: red;
`

const Paragraph = styled.p`
    background-color: ${props => props.fancy ? 'red' : 'green'};
`


function createAnim({target}){
    var paragraph = target.find({name:'par'})

    return new TimelineMax({repeat:-1})
        .to(paragraph,1,{scale:1.23, y:'+=120'})
}


class About extends Component{
        render(){
            return(
                <div>
                <Header>About</Header>
                <Paragraph name='par'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est temporibus?</Paragraph>
                <Paragraph fancy >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est temporibus?</Paragraph>
                
            </div>
            )
        }
      
    
}




export default GSAP()(About);