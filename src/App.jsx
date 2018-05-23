import React, { Component } from 'react'
import Main from './components/Main/Main'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contact/Contact'


 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <About />
        <Projects />
        <Contacts />
      </div>
    );
  }
}

export default App;
