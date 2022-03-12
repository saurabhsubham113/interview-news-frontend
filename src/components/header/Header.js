// business entertainment general health science sports technology
import React from 'react'
import { NavLink } from "react-router-dom"
import "./header.css";
const Header = () => {
  return (
    <header className="Header">
      <div className="Header-logo">
        <NavLink to="" >
          The News Hour
        </NavLink>

      </div>
      <div className="Header-right">
        <nav className="Header-navbar">
          <ul className="Header-nav-item-container">
            <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')} to="business">
              <li className="Header-nav-item">Business</li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')} to="entertainment">
              <li className="Header-nav-item">Entertainment</li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')} to="health">
              <li className="Header-nav-item">Health</li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')} to="science">
              <li className="Header-nav-item">Science</li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')} to="sports">
              <li className="Header-nav-item">Sports</li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')} to="technology">
              <li className="Header-nav-item">Technology</li>
            </NavLink>

          </ul>
          <div className="Header-search">
            <input type="search" className="Header-search-news" placeholder="search latest news" />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header