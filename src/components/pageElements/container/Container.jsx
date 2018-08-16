import React from 'react'
import  './Container.css'


const Container =  (props) => {
  return (
    <div className='fullpageBg'>
      {props.children}
    </div>
  )
}


export default Container;