import React, { Component } from 'react';
import './NavStyle.css';
import logo from '../../assets/images/logo3.jpg';
import { TimelineLite } from 'gsap';
import { NavLink } from 'react-router-dom';
import { animation } from '../../animations/animation';
import classNames from 'classnames';

class Nav extends Component {
	constructor() {
		super();
		this.onEnter = this.onEnter.bind(this);
		this.onLeave = this.onLeave.bind(this);
		this.state = {
			tl: new TimelineLite({ paused: true })
		};
	}

	onEnter() {
		animation
			.show({
				tl: this.state.tl,
				elem: this.refs.burgerLines,
				elem2: this.refs.round,
				elem3: this.refs.list
			})
			.play();
	}

	onLeave() {
		animation
			.show({
				tl: this.state.tl,
				elem: this.refs.burgerLines,
				elem2: this.refs.round,
				elem3: this.refs.list
			})
			.reverse();
	}

	render() {
		return (
			<div className="fixedMenu">
				<div className="burgerCont" onMouseEnter={this.onEnter} onMouseLeave={this.onLeave}>
					<div className="burgerRound" ref="round">
						<ul className="navReset" ref="list">
							<NavLink to="/" activeClassName="isActive" className="decorLink">
								<li>Home</li>
							</NavLink>
							<NavLink to="/about" activeClassName="isActive" className="decorLink">
								<li>About</li>
							</NavLink>
							<NavLink to="/projects" activeClassName="isActive" className="decorLink">
								<li>Projects</li>
							</NavLink>
							<NavLink to="/contact" activeClassName="isActive" className="decorLink">
								<li>Contact</li>
							</NavLink>
						</ul>
						<div className="burgerLineCont" ref="burgerLines">
							<div className="burgerLine" />
							<div className={classNames('burgerLine', 'spaced')} />
							<div className="burgerLine" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Nav;
