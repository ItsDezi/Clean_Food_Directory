import React from "react";
import { Link } from "react-router-dom";

import { useState } from 'react';
import styles from '../styles/Navbar.module.css';
function Navbar() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }
  return (
    <div className="App">
      <header className={`${styles.appheadernav}`}>
      <span className="">
        <div className={`${styles.homebuttonnav}`}>
        <a href = "/" >
              Local Eats
            </a>
        </div>

          </span>
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='/#map' className={`${styles.navLink}`}>Map</a>
            </li>
            <li onClick={removeActive}>
              <a href='/contribute' className={`${styles.navLink}`}>Contribute</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>All products</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Contact</a>
            </li>
          </ul>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
;