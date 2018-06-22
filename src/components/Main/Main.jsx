import React, { Component } from 'react';
import styles from './Main.css';
import Button from '../pageElements/buttons/Button';
import { Power0, TimelineLite } from 'gsap';
import {animation} from '../../animations/animation'

/* eslint-disable*/

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tl: new TimelineLite({ paused: true })
		};
	}



	onEnter() {
		animation.menuSlide({
			elem:this.refs.a,
			tl:this.state.tl}
		).play();
	}

	componentDidMount(){
		setTimeout(() => {
			animation.menuSlide({
				elem:this.refs.backgroundImage,
				tl:this.state.tl
			}).play();
		}, 400);
	}

	render() {
		return (
			<div className={styles.fullpageBg} ref='backgroundImage'>
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
			</div>
		);
	}
}

export default Main;
