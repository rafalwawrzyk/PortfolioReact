import React, { Component } from 'react';
import styles from './NavStyle.css';
import logo from '../../assets/images/logo.jpg';
import { TweenMax, Power0 ,TimelineLite} from 'gsap';
import {NavLink} from 'react-router-dom'

class Nav extends Component {
	constructor() {
		super();
		this.onEnter = this.onEnter.bind(this);
		this.onLeave = this.onLeave.bind(this);
		this.state = {
			tl:new TimelineLite({paused:true})
		}
	}

	menuSlide(elem,elem2,elem3) {
		return this.state.tl
		.to(elem, 0.1, {
			autoAlpha: 0,
			ease: Power0.easeInOut
		})
		.to(elem,0.1,{
			display:'none'
		})
		.to(elem2,0.1,{
			backgroundColor:'#ff0045',
			borderRadius:0
		})
		.to(elem2,0.1,{
			width:'500px'
		})
		.to(elem3,0.2,{
			autoAlpha:1,
			visibility:'visible',
			display:'flex'
		})
	}



	onEnter() {
		this.menuSlide(this.refs.burgerLines,this.refs.round,this.refs.list).play();
	}

	onLeave(){
		this.menuSlide(this.refs.burgerLines,this.refs.round,this.refs.list).reverse();
	}

	render() {
		return (
			<div className={styles.fixedMenu}>
				<div className={styles.container}>
					<div>
						<NavLink to='/'>
						<img src={logo} alt="" className={styles.imageLogo} ref="logo" />
						</NavLink>
					</div>
					<div className={styles.burgerCont} onMouseEnter={this.onEnter} onMouseLeave={this.onLeave}>
						<div className={styles.burgerRound} ref='round'>
							<ul className={styles.navReset} ref='list'>
								<NavLink to="/about" activeClassName={styles.isActive} className={styles.decorLink}><li>About</li></NavLink>
								<NavLink to='/projects' activeClassName={styles.isActive}  className={styles.decorLink}><li>Projects</li></NavLink>
								<NavLink to='/contact'activeClassName={styles.isActive}  className={styles.decorLink}><li>Contact</li></NavLink>
							</ul>
							<div className={styles.burgerLineCont} ref='burgerLines'>
								<div className={styles.burgerLine} />
								<div className={`${styles.burgerLine} ${styles.spaced}`} />
								<div className={styles.burgerLine} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Nav;
