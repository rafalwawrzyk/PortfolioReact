import React from 'react'
import styles from './Title.css'

 const Title = (props) => {
  return (
    <div>
      <h3>
          <span className={styles.titleRed}>{props.children[0].props.children}</span>
          <span>{props.children[1].props.children}</span>
      </h3>
    </div>
  )
}


export default Title;