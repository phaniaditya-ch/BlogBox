import React from 'react';
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';

export const someContext = React.createContext();

function App() {
  const [count, setCount] = useState(0)
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <someContext.Provider value={darkTheme}>
        <Router>
          <div className="App">
            <Navbar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        </Router>
      </someContext.Provider>
    </>
  )
}

export default App;