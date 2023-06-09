import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            <h1 className="logo">BLOG-BOX</h1>
        </div>
    </nav>
  )
}

export default Navbar