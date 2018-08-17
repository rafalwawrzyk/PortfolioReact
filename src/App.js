import React, { Component } from 'react';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App" ref="backgroundImage">
				<Nav />
				<Route render={({location}) => (
					<TransitionGroup>
					<CSSTransition
						timeout={1250}
						classNames="fade"
						key={location.key}
						appear={true}
						in={true}
					>
						<Switch location={location}>
							<Route exact path="/" component={Main} />
							<Route path="/about" component={About} />
							<Route path="/projects" component={Projects} />
							<Route path="/contact" component={Contact} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
				)} />
				
			</div>
		);
	}
}

export default App;
