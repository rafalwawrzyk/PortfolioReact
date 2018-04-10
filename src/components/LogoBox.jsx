import React from 'react'
import styled from 'styled-components'





const LogoBoxContainer = styled.div`
    width:500px;
    height:500px;
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
`

const LogoBox = styled.div`
    width:500px;
    height:500px;
    display:flex;
    justify-content:center;
    align-items:center;
`

 const Logo = styled.div`
    font-size:2em;
    color: #fff;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
` 

const LogoHeaderText = styled.h2`
    padding:0;
    margin:0;
    font-family: 'Megrim', cursive;
    font-size:4em;
    font-weight:200;
    color:#ffde00;

`
const LogoSubHeadText = styled.p`
    padding:0;
    margin:0;
    font-size:0.8em;
`



const LogoHeader =  (props) => {
  return (
    <div>
      <LogoBoxContainer>
        <LogoBox>
            <Logo>
              <LogoHeaderText>Wawrzyk</LogoHeaderText>
              <LogoSubHeadText>Web Developer</LogoSubHeadText>
            </Logo>
        </LogoBox>
      </LogoBoxContainer>
    </div>
  )
}




export default LogoHeader;
