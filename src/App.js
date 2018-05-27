import React, { Component } from 'react';
import styles from './App.css';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Route, Switch,withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition,Transition } from 'react-transition-group';

class App extends Component {



	render() {
		return (
			<div className="App">
					<div>
						<Nav />
								<Switch>
									<Route path="/" exact component={Main} />
									<Route path="/about" exact component={About} />
									<Route path="/projects" exact component={Projects} />
									<Route path="/contact" exact component={Contact} />
								</Switch>
					</div>
			</div>
		);
	}
}

export default withRouter(App);
