import React from 'react'
import styles from './Container.css'


const Container =  (props) => {
  return (
    <div className={styles.fullpageBg}>
      {props.children}
    </div>
  )
}


export default Container;