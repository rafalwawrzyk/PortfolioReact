import React,{Component} from 'react'
import { Link } from 'react-router-dom'




class Nav extends Component{
  render(){
    return (
      <div>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }

}



export default Nav;
