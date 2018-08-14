import React, { Component } from 'react';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
class App extends Component {
	render() {
		const supportsHistory = 'pushState' in window.history;
		return (
			<BrowserRouter forceRefresh={!supportsHistory}>
				<div>
					<Nav />
					<main>
						<Route
							render={({ location }) => {
								const { pathname } = location;
								return (
									<TransitionGroup>
										<CSSTransition
											key={pathname}
											classNames="page"
											timeout={{
												enter: 6000,
												exit: 1000
											}}
										>
											<Route
												location={location}
												render={() => {
													return (
														<Switch>
															<Route exact path="/" component={Main} />
															<Route path="/about" component={About} />
															<Route path="/projects" component={Projects} />
															<Route path="/contact" component={Contact} />
														</Switch>
													);
												}}
											/>
										</CSSTransition>
									</TransitionGroup>
								);
							}}
						/>
					</main>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
