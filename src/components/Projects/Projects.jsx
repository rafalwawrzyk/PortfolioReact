import React, { Component } from 'react';
import './Projects.css';
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
	}

	render() {
		return (
			<div className='page' ref="backgroundImage">
				<div className='container' ref="b">
						<div className='titleCont' ref="a">
							<Title>
								<span>My</span>
								<span> work.</span>
							</Title>
							<div className='textContentContainer'>
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
					<div className='darkSide'>
						<div className='subtitleCont'>
							<h3><span>E</span>xamples</h3>
						</div>
						<div className='btnContainer'>
							<Button>Projects</Button>
							<Button>GitHub</Button>
						</div>
					</div>
				</div>
		);
	}
}

export default About;
