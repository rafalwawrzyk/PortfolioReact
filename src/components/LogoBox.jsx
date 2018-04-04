import React from 'react'
import styled from 'styled-components'





const LogoBoxContainer = styled.div`
    width:500px;
    height:500px;
    position: absolute;
    top:45%;
    left:50%;
    transform:translate(-50%,-50%);
`

const LogoBox = styled.div`
    width:500px;
    height:500px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(252,84,81,0.1);
    transform:rotate(45deg);
    border:10px solid #fff;

`

 const Logo = styled.div`
    font-size:40px;
    color: #fff;
    transform:rotate(-45deg);
` 



const LogoHeader =  (props) => {
  return (
    <div>
      <LogoBoxContainer>
        <LogoBox>
            <Logo>Rafal Wawrzyk</Logo>
            </LogoBox>
      </LogoBoxContainer>
    </div>
  )
}




export default LogoHeader;
