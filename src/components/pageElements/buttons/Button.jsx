import React from 'react';
import styles from './Button.css';

const Button = (props) => {
	return (
		<div className={styles.btnCont}>
			<button>{props.children}</button>
		</div>
	);
};

export default Button;
