import React from 'react';
import styles from './Button.css';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovered:false
		}
		this.onButtonHover = this.onButtonHover.bind(this)
	}

	onButtonHover = () => {
		this.setState({isHovered:!this.state.isHovered})
	}

	render() {
		const { props } = this;
		const btnClass = this.state.isHovered ? styles.animated : "";
		return (
			<div className={styles.btnCont}>
				<button 
					className={btnClass} 
					onMouseEnter={this.onButtonHover}
					onMouseLeave={this.onButtonHover}
					>{props.children}</button>
			</div>
		);
	}
}

export default Button;
