import './style.css';
import React from 'react';
import logo from '../../../assets/logo.svg';

function Home() {
    return (
        <div className="Home">
            <h1>Home</h1>
            <h2>TESTING THE UPDATING</h2>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header>
        </div>
    );
}

export default Home;
