import React, { Component } from 'react';
// import  './Contact.css';
import Title from '../pageElements/title/Title';
import {  Power0, TimelineLite } from 'gsap';

/* eslint-disable*/

class Contact extends Component {s
	constructor(props) {
		super(props);
		// this.onEnter = this.onEnter.bind(this);
		this.state = {
			tl: new TimelineLite({ paused: true })
		};
	}

	// menuSlide(elem, elem2) {
	// 	return this.state.tl
	// 		.from(elem, 1.2, {
	// 			autoAlpha: 0,
	// 			ease: Power0.easeInOut
	// 		})
	// 		.to(elem, 0.2, {
	// 			autoAlpha: 1,
	// 			ease: Power0.easeInOut
	// 		});
	// }

	// onEnter() {
	// 	this.menuSlide(this.refs.a).play();
	// }

	// componentDidMount() {
	// 	setTimeout(() => {
	// 		this.menuSlide(this.refs.b, this.refs.a).play();
	// 	}, 400);
	// }

	render() {
		return (
			<div className='container' ref="b">
				<div className='polygon'>
					<div className={styles.titleCont} ref="a">
						<Title>
							<span>Contact</span>
							<span> me.</span>
						</Title>
					</div>

					<div className='textContentContainer'>
						<form action="" className='contactForm'>
							<div>
								<input type="text" placeholder="name" />
							</div>
							<div>
								<input type="text" placeholder="email" />
							</div>
							<div>
								<textarea name="" id="" cols="30" rows="10" placeholder="message" />
							</div>
              <button className='submit'>Submit</button>
						</form>
					</div>
          <div className='socialCont'>
            <div><span>email: </span>rafal.wawrzyk@gmail.com</div>
            <div><span>phone: </span>505-246-348</div>
            <div><span>linkedin: </span>https://www.linkedin.com/in/rafal-wawrzyk/</div>
            <div><span>facebook: </span>https://www.facebook.com/profile.php?id=100004350698629</div>
          </div>
				</div>
			</div>
		);
	}
}

export default Contact;
