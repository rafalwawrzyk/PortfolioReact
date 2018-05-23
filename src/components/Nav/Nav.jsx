import React, { Component } from 'react';
import styles from './NavStyle.css';
import logo from '../../assets/images/logo.jpg'

class Nav extends Component {
	render() {
		return (
			<div className={styles.fixedMenu}>
				<div className={styles.container}>
					<div>
            <img src={logo} alt="" className={styles.imageLogo}/>
          </div>
					<div className={styles.burgerCont}>
						<div className={styles.burgerRound}>
							{/* <ul className={styles.navReset}>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul> */}
							<div className={styles.burgerLine} />
							<div className={`${styles.burgerLine} ${styles.spaced}`} />
							<div className={styles.burgerLine} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Nav;
