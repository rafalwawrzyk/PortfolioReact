import React, { Component } from 'react';
import styles from './NavStyle.css';
import logo from '../../assets/images/logo.jpg';
import { TweenMax, Power0 ,TimelineLite} from 'gsap';

class Nav extends Component {
	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
	}

	menuSlide(elem,elem2,elem3) {
		const tl = new TimelineLite();
		return tl
		.to(elem, 0.6, {
			autoAlpha: 0,
			ease: Power0.easeInOut
		})
		.to(elem,0.1,{
			display:'none'
		})
		.to(elem2,0.4,{
			backgroundColor:'red',
			borderRadius:0
		})
		.to(elem2,0.6,{
			width:'500px'
		})
		.to(elem3,0.3,{
			autoAlpha:1,
			visibility:'visible',
			display:'flex'
		})
	}

	onClick() {
		this.menuSlide(this.refs.burgerLines,this.refs.round,this.refs.list);
	}

	render() {
		return (
			<div className={styles.fixedMenu}>
				<div className={styles.container}>
					<div>
						<img src={logo} alt="" className={styles.imageLogo} ref="logo" />
					</div>
					<div className={styles.burgerCont} onClick={this.onClick}>
						<div className={styles.burgerRound} ref='round'>
							<ul className={styles.navReset} ref='list'>
								<li>About</li>
								<li>Projects</li>
								<li>Contact</li>
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
