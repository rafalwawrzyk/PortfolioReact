import React from 'react'
import  './Title.css'

 const Title = (props) => {
  return (
    <div>
      <h3>
          <span className='titleRed'>{props.children[0].props.children}</span>
          <span>{props.children[1].props.children}</span>
      </h3>
    </div>
  )
}


export default Title;