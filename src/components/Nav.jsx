import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const Navigation = styled.div`
    /* position:absolute;
    bottom:0;
    height:100%;
    width:100%; */
`
const List = styled.ul`
  list-style-type:none;
  width:100%;
`

const ListItem = styled.li`
  display:block;
`


const StyledLink = styled(Link)`
  text-decoration:none;
  color:#fff;
  font-family: 'Gruppo', cursive;
  width:100%;
  height:100%;
  padding:0;
  margin:0;
  display:flex; 
  justify-content:center;
  align-items:center;
`

const ListItemAbout = styled.li`
  position:absolute;
  top:50%;
  left:0;
  transform:translate(0,-50%);
  font-size:1.2em;
  letter-spacing:2px;
  height:100%;
  width:60px;
  display:flex;
  justify-content:center;
  align-items:center;
  p{
    transform:rotate(90deg);
  }
  &:hover{
    p{
      letter-spacing:6px;
      transition: ease-in-out 400ms;
    }
    
  }

`
const ListItemSkills = styled.li`
  position:absolute;
  top:0;
  left:50%;
  width:100%;
  height:60px;
  transform:translate(-50%,0);
  font-size:1.2em;
  letter-spacing:2px;
  text-align:center;
  &:hover{
    p{
      letter-spacing:6px;
      transition: ease-in-out 400ms;
    }
  }



`
const ListItemProjects = styled.li`
  right:0;
  position:absolute;
  top:50%;
  transform:translate(0,-50%);
  font-size:1.2em;
  letter-spacing:2px;
  height:100%;
  width:60px;
  display:flex;
  justify-content:center;
  align-items:center;
  p{
    transform:rotate(-90deg);
  }
  &:hover{
    p{
      letter-spacing:6px;
      transition: ease-in-out 400ms;
    }
    
  }
`
const ListItemContact = styled.li`
  position:absolute;
  bottom:0;
  left:50%;
  width:100%;
  transform:translate(-50%,0);
  font-size:1.2em;
  letter-spacing:2px;
  text-align:center;
  &:hover{
    p{
      letter-spacing:6px;
      transition: ease-in-out 400ms;
    }
  }
`


const Nav =  (props) => {
  return (
    <Navigation>
      <List>
        <ListItemAbout>
          <StyledLink to="/about">
            <p>About</p> 
          </StyledLink>
        </ListItemAbout>
        <ListItemSkills>
          <StyledLink to="/skills">
          <p>Skills</p>  
          </StyledLink>
        </ListItemSkills>
        <ListItemProjects>
          <StyledLink to="/projects">
           <p>Projects</p> 
          </StyledLink>
        </ListItemProjects>
        <ListItemContact>
          <StyledLink to="/contact">
           <p>Contact</p> 
          </StyledLink>
        </ListItemContact>
      </List>
    </Navigation>
  )
}



export default Nav;
