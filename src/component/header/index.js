import './index.module.css';
import React, { useEffect } from 'react';
import styles from './index.module.css';
import menu from '../../assests/images/menu.png';
import { useState } from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { NavLink } from 'react-router-dom';

// const Link = ({ props, children }) => <NavLink {...props}>{children}</NavLink>;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const matches = useMediaQuery('(min-width:700px)');
  useEffect(() => {
    if (matches) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  }, [matches]);

  const toggle = () => {
    if (!matches) setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <nav>
          <div class={styles.chesslogo}>
            <div className={styles.ChessText}>
              <b>ChESS</b>
            </div>
            <div className={styles.iitrtext}>IITR</div>
          </div>
          <ul className={isMenuOpen ? styles.menuOpen : styles.menuClose}>
            <li>
              <NavLink
                activeClassName={styles.activeLinkText}
                to='/'
                exact
                onClick={(e) => {
                  toggle();
                }}
                className={styles.linktext}
                id={styles.hometext}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName={styles.activeLinkText}
                to='/event'
                onClick={(e) => {
                  toggle();
                }}
                className={styles.linktext}
                id={styles.eventtext}
              >
                Event
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName={styles.activeLinkText}
                to='/chem-e-thons'
                onClick={(e) => {
                  toggle();
                }}
                className={styles.linktext}
                id={styles.chemethanstext}
              >
                Chem-E-Thons
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to='/department'
                activeClassName={styles.activeLinkText}
                onClick={(e) => {
                  toggle();
                }}
                className={styles.linktext}
                id={styles.departmenttext}
              >
                Department
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName={styles.activeLinkText}
                to='/team'
                onClick={(e) => {
                  toggle();
                }}
                className={styles.linktext}
                id={styles.teamtext}
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName={styles.activeLinkText}
                to='/contact-us'
                onClick={(e) => {
                  toggle();
                }}
                className={styles.linktext}
                id={styles.contactustext}
              >
                Contact-Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <img
          className={styles.menu}
          src={menu}
          onClick={toggle}
          alt='menu'
        ></img>
      </div>
    </header>
  );
};
export { Header };
