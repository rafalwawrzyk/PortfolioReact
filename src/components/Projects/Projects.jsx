import React, { Component } from 'react';
import styles from './Projects.css';
import Title from '../pageElements/title/Title';
import Button from '../pageElements/buttons/Button';
import {  Power0, TimelineLite } from 'gsap';


/* eslint-disable*/

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tl: new TimelineLite({ paused: true })
		};
		this.onEnter = this.onEnter.bind(this);
	}


	menuSlide(elem, elem2) {
		return this.state.tl
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
			this.menuSlide(this.refs.b, this.refs.a).play();
		}, 400);
	}

	render() {
		return (
			<div>
				<div className={styles.container} ref="b">
					<div className={styles.polygon}>
						<div onClick={this.onEnter} className={styles.titleCont} ref="a">
							<Title>
								<span>My</span>
								<span> work.</span>
							</Title>
							<div className={styles.textContentContainer}>
								<h4>words a few...</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae quam
									diam. Maecenas diam diam, finibus ut eleifend nec, ullamcorper vel dolor. Nulla in
									dui quis elit dictum porta
								</p>
								<p>
									Aenean risus massa, maximus ultrices nunc quis, mollis dictum ipsum. Nullam
									venenatis, neque ac posuere blandit, ligula nibh placerat leo, quis cursus turpis
									est a quam. Nam nec lorem risus. Curabitur luctus id erat a maximus.{' '}
								</p>
							</div>
						</div>
					</div>
					<div className={styles.darkSide}>
						<div className={styles.subtitleCont}>
							<h3><span>E</span>xamples</h3>
						</div>
						<div className={styles.btnContainer}>
							<Button>Projects</Button>
							<Button>GitHub</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
