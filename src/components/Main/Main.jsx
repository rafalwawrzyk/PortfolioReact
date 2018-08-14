import React, { Component } from 'react';
import styles from './Main.css';
import Button from '../pageElements/buttons/Button';
import { TimelineLite } from 'gsap';
import { animation } from '../../animations/animation';

/* eslint-disable*/

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tl: new TimelineLite({ paused: true })
		};
	}

	menuSlide(elem, elem2) {
		return this.state.tl
			.from(elem2, 0.5, {
				autoAlpha: 0,
				ease: Power0.easeInOut
			})
			.to(elem2, 0.1, {
				autoAlpha: 1,
				ease: Power0.easeInOut
			})
			.from(elem, 1.2, {
				autoAlpha: 0,
				ease: Power0.easeInOut
			})
			.to(elem, 0.2, {
				autoAlpha: 1,
				ease: Power0.easeInOut
			});
	}

	onEnter() {
		this.menuSlide(this.refs.a).play();
	}

	componentDidMount() {
		setTimeout(() => {
			this.menuSlide(this.refs.b, this.refs.backgroundImage).play();
		}, 400);
	}

	render() {
		return (
			<div className={styles.fullpageBg} ref="backgroundImage">
				<div className={styles.container} ref="b">
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
