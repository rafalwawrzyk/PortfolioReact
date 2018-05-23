import React,{Component} from 'react';
import background from '../../assets/images/logo.jpg'
import {Route} from 'react-router-dom'




/* eslint-disable*/ 




class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            mainTitle:{
                primary:'Wawrzyk',
                second:'Web Developer'
            }
        }
    }

    render(){
        return(
            <div>
                Main
            </div>
        )
    }

}




export default Main;