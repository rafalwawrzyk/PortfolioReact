import React, { Component } from 'react';
import background from '../../assets/images/photo3.jpeg';
import styles from './Main.css';
import Button from '../pageElements/buttons/Button';
import Container from '../pageElements/container/Container';
import { TweenMax, Power0, TimelineLite } from 'gsap';

/* eslint-disable*/

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tl: new TimelineLite({ paused: true })
		};
	}

	menuSlide(elem) {
		return this.state.tl
			.from(elem, 0.2, {
				ease: Power0.easeInOut
			})
			.to(elem, 0.2, {
				autoAlpha: 1,
				ease: Power0.easeInOut
			});
	}

	onEnter() {
		this.menuSlide(this.refs.a).play();
		console.log('dadad');
	}

	componentDidMount(){
		setTimeout(() => {
			this.menuSlide(this.refs.backgroundImage).play();
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
