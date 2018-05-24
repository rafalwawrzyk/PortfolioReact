import React from 'react';
import styles from './About.css';
import Title from '../pageElements/title/Title';

/* eslint-disable*/

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.polygon}>
				<Title>
					<span>About</span>
					<span> me.</span>
				</Title>
				<div className={styles.textContentContainer}>
					<h4>words a few...</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae quam diam. Maecenas
						diam diam, finibus ut eleifend nec, ullamcorper vel dolor. Nulla in dui quis elit dictum porta
					</p>
					<p>
						Aenean risus massa, maximus ultrices nunc quis, mollis dictum ipsum. Nullam venenatis, neque ac
						posuere blandit, ligula nibh placerat leo, quis cursus turpis est a quam. Nam nec lorem risus.
						Curabitur luctus id erat a maximus.{' '}
					</p>
				</div>
			</div>

		</div>
	);
};

export default About;
