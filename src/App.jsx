import React, { Component } from 'react'
import About from './components/About/About'
import Main from './components/Main'


import {BrowserRouter,Route} from 'react-router-dom'
 

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
