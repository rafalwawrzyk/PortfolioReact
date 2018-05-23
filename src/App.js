import React, { Component } from 'react';
import styles from './App.css';
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <About />
        <Projects/>
        <Contact />
      </div>
    );
  }
}

export default App;
