// business entertainment general health science sports technology
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import searchIcon from '../../assets/Icons/iconsSearch.svg'
import "./header.css";

const Header = () => {
  const [query, setQuery] = useState('');
  const [isMenuActive, setIsMenuActive] = useState(false);
  const navigate = useNavigate()
  const menu = useRef()
//TODO: this needs to be tested
  useEffect(() => {
    menu.current.addEventListener('click', navHandle)
    return () => {
      document.removeEventListener("click", navHandle)
    };
  }, [isMenuActive]);
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const navHandle = () => {
    setIsMenuActive(!isMenuActive)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query !== '') {
      navigate({
        pathname: "/search",
        search: `?keywords=${query}`
      })
      setQuery('')
    }

  }

  return (
    <header className="Header">
      <div className="Header-logo">
        <NavLink to="" >
          The News Hour
        </NavLink>

      </div>
      <div className="Header-right">
        <nav className="Header-navbar">
          <ul ref={menu} className={(isMenuActive ? "nav-links nav-active Header-nav-item-container" : "nav-links Header-nav-item-container")} >
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
          <div onClick={navHandle} className="Header-burger">
            <div className="bar bar-1"></div>
            <div className="bar bar-2"></div>
            <div className="bar bar-3"></div>
          </div>
          <div className="Header-search">
            <form className="Header-form" onSubmit={handleSubmit}>
              <input type="search" value={query} onChange={handleChange} className="Header-search-news" placeholder="search" />
              <button type="submit" className="Header-form-submit">
                <img src={searchIcon} alt="search Icon" />
              </button>
            </form>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header