import React, { Component } from 'react';
import styles from './Contact.css';
import Title from '../pageElements/title/Title';
import { Transition } from 'react-transition-group';
import { TweenMax, Power0, TimelineLite } from 'gsap';

/* eslint-disable*/

class Contact extends Component {
	constructor(props) {
		super(props);
		this.onEnter = this.onEnter.bind(this);
		this.state = {
			tl: new TimelineLite({ paused: true })
		};
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
		console.log('dadad');
	}

	componentDidMount() {
		setTimeout(() => {
			this.menuSlide(this.refs.b, this.refs.a).play();
		}, 400);
	}

	render() {
		return (
			<div className={styles.container} ref="b">
				<div className={styles.polygon}>
					<div onClick={this.onEnter} className={styles.titleCont} ref="a">
						<Title>
							<span>Contact</span>
							<span> me.</span>
						</Title>
					</div>

					<div className={styles.textContentContainer}>
						<form action="">
							<div>
								<input type="text" placeholder="name" />
							</div>
							<div>
								<input type="text" placeholder="email" />
							</div>
							<div>
								<textarea name="" id="" cols="30" rows="10" placeholder="message" />
							</div>
						</form>
					</div>
          <div>

          </div>
				</div>
			</div>
		);
	}
}

export default Contact;
