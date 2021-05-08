import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import { GlobalStyle } from './GlobalStyle';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <div className="App">
                <Hero />
            </div>
        </Router>
    );
}

export default App;
