import React from 'react'
import styled from 'styled-components'
import circleImage from '../assets/images/about4.png'

/* eslint-disable*/ 



const Container = styled.div`
    position:relative;
    top:0;
    left:0;
    width:100%;
    height:100%;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
`

const SideContentLeft = styled.div`
    background-color:rgba(252,84,81,0.4);
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
`

const SideContentRight =styled.div`
    background-color:rgb(255, 187, 187,0.5);
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
`

const SideContentTextContainer = styled.div`
  width:80%;
  font-size:1.4em;
`


const CircleImageContainer = styled.div`
  position:absolute;
  top:0;
  left:50%;
  width:500px;
  height:165px;
  transform:translate(-50%);
  display:flex;
  justify-content:space-between;
  align-items:center;

`

const CircleImage = styled.div`
  width:150px;
  height:150px;
  border-radius:50%;
  background-color:#fff;
  background-image: url(${circleImage});
  background-size:cover;
  background-position:center;
  position:absolute;
  top:10px;
  left:50%;
  transform:translate(-50%);

`

const CircleText = styled.div`
  font-size:35px;
  font-family: 'Gruppo', cursive;
  display:flex;
  justify-content:center;
  align-items:center;
  width:150px;
  margin-left:${props => props.moved ? '30px' : '0px'};
`

const About = () => {
  return (
    <Container>
      <SideContentLeft>
        <SideContentTextContainer>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, error saepe officiis asperiores adipisci nam illo eius facere minima corporis, 
            exercitationem ipsam a aut odio, nisi eos recusandae delectus veniam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, error saepe officiis asperiores adipisci nam illo eius facere minima corporis, 
            exercitationem ipsam a aut odio, nisi eos recusandae delectus veniam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, error saepe officiis asperiores adipisci nam illo eius facere minima corporis, 
            exercitationem ipsam a aut odio, nisi eos recusandae delectus veniam.</p>
        </SideContentTextContainer>
      </SideContentLeft>
      <SideContentRight>
        <SideContentTextContainer>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, error saepe officiis asperiores adipisci nam illo eius facere minima corporis, 
            exercitationem ipsam a aut odio, nisi eos recusandae delectus veniam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, error saepe officiis asperiores adipisci nam illo eius facere minima corporis, 
            exercitationem ipsam a aut odio, nisi eos recusandae delectus veniam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, error saepe officiis asperiores adipisci nam illo eius facere minima corporis, 
            exercitationem ipsam a aut odio, nisi eos recusandae delectus veniam.</p>
        </SideContentTextContainer>
      </SideContentRight>
      <CircleImageContainer>
          <CircleText moved>
            <p>Hello</p> 
          </CircleText>
          <CircleImage></CircleImage>
          <CircleText>
            <p>I'm Rafal</p> 
          </CircleText>
      </CircleImageContainer>
    </Container>
  )
}



export default About;