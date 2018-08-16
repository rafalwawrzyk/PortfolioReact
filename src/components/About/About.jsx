import React, { Component } from 'react';
import './About.css';
// import stylesMain from '../../index.css';
import Title from '../pageElements/title/Title';
import { Power0, TimelineLite } from 'gsap';

/* eslint-disable*/

class About extends Component {
	constructor(props) {
		super(props);
		// this.onEnter = this.onEnter.bind(this);
		this.state = {
			tl: new TimelineLite({ paused: true })
		};
	}

	// menuSlide(elem,elem2) {
	// 	return this.state.tl
	// 	.from(elem, 1.2, {
	// 		autoAlpha:0,
	// 		ease: Power0.easeInOut
	// 	})
	// 	.to(elem,0.8,{
	// 		autoAlpha:1,
	// 		ease: Power0.easeInOut
	// 	})

	// }

	// onEnter() {
	// 	this.menuSlide(this.refs.a).play();
	// 	console.log('dadad');
	// }

	// componentDidMount(){
	// 	setTimeout(() => {
	// 		this.menuSlide(this.refs.b,this.refs.a).play();
	// 	}, 400);
	// }

	render() {
		return (
			<div className='fullpageBg' ref="backgroundImage" ref='b' >
				<div className='polygon'>
					<div className='titleCont'ref="a">
						<Title>
							<span>About</span>
							<span> me.</span>
						</Title>
					</div>

					<div className='textContentContainer'>
						<h4>
							words a few...
						</h4>
						<p>
							Hi, I'm Rafal and I am a front-end developer.
						</p>
						<p>
						I am glad that you came to my website. I am a graduate of the CodersLab bootcamp, after which I took a hard time working to polish my acquired skills and gain more.
						</p>
						<p>
						I have created many projects for clients but also for my own pleasure because that's what programming is all about.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
