import React, { Component } from 'react'
import Main from './components/Main/Main'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contact/Contact'
import Nav from './components/Nav/Nav'


 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <About />
        <Projects />
        <Contacts />
      </div>
    );
  }
}

export default App;
