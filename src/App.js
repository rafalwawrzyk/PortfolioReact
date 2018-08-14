import React, { Component } from 'react';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { Route, Switch, withRouter } from 'react-router-dom';

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
