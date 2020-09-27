import './App.css';
import React from 'react';
import Contact from './screens/Contact'
import Game from './screens/Game'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { screens: 'Home' }
  }

  render() {
    return (

      <div className="App">
        APP: {this.state.screens}
        <div className="menu">
          <h2 onClick={() => this.setState({ screens: 'game' })}>Play Game</h2>
        </div>
        <button onClick={() => this.setState({ screens: 'contact' })}>Contact</button>
        {this.state.screens === 'contact' ? <Contact /> : null}
        {this.state.screens === 'game' ? <Game /> : null}
      </div>
    )
  }
}

export default App;
