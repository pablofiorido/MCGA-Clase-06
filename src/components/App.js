import './App.css';
import React from 'react';
import SignIn from './screens/SignIn'
import Products from './screens/Products'
import Home from './screens/Home'
import Game from './screens/Game'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { screens: 'Home' }
  }

  render() {
    return (
      <div className="App">
        <ul className="menu">
          <li onClick={() => this.setState({ screens: 'signin' })}>Sign In</li>
          <li onClick={() => this.setState({ screens: 'products' })}>Products</li>
          <li onClick={() => this.setState({ screens: 'home' })}>Home</li>
          <li onClick={() => this.setState({ screens: 'game' })}>Game</li>
        </ul>
      APP: {this.state.screens}
        {this.state.screens === 'signin' ? <SignIn /> : null}
        {this.state.screens === 'products' ? <Products /> : null}
        {this.state.screens === 'home' ? <Home /> : null}
        {this.state.screens === 'game' ? <Game /> : null}
      </div>
    )
  }
}

export default App;
