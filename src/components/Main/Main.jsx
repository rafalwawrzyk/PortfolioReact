import React, { Component } from 'react';
import background from '../../assets/images/photo3.jpeg';
import styles from './Main.css';
import Button from '../pageElements/buttons/Button';
import Container from '../pageElements/container/Container'

/* eslint-disable*/

const Main = () => {
	return (
		<Container>
			<div className={styles.container}>
				<h1 className={styles.title}>
					<span className={styles.colorMain}>front</span> <br />
					<span className={styles.colorMain}> end</span>
					<span> dev.</span>
					<br />
				</h1>
				<p className={styles.subtext}>passion through the code</p>
				<div className={styles.btnCont}>
					<Button>Check</Button>
				</div>
			</div>
			</Container>
		
	);
};

export default Main;
