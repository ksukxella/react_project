import React from 'react';
import d from'./Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={d.nav}>
        <div className={d.item}><NavLink to="/profile_content" activeClassName={d.activeLink}>Profile</NavLink></div>
        <div className={d.item}><NavLink to="/dialogs" activeClassName={d.activeLink}> Messages</NavLink></div>
        <div className={d.item}><NavLink to="/profile_content" activeClassName={d.activeLink}>News</NavLink></div>
        <div className={d.item}><NavLink to="/dialogs">Music</NavLink></div>
        <div className={d.item}><NavLink to="/profile_content">Settings</NavLink></div>
      </nav>
    );
  };
  
  export default Nav;
