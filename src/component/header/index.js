import './index.module.css';
import React, { useEffect } from 'react';
import styles from './index.module.css';
import menu from '../../assests/images/menu.png';
import { useState } from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';

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
    setMenuOpen(!isMenuOpen);
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
              <Link to='/' className={styles.linktext} id={styles.hometext}>
                Home
              </Link>
            </li>
            <li>
              <Link href='/' className={styles.linktext} id={styles.eventtext}>
                Event
              </Link>
            </li>
            <li>
              <Link
                to='/'
                href='#'
                className={styles.linktext}
                id={styles.chemethanstext}
              >
                Chem-E-Thons
              </Link>
            </li>
            <li>
              <Link
                to='/department'
                className={styles.linktext}
                id={styles.departmenttext}
              >
                Department
              </Link>
            </li>
            <li>
              <Link
                to='/team'
                href='#'
                className={styles.linktext}
                id={styles.teamtext}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to='/'
                className={styles.linktext}
                id={styles.contactustext}
              >
                Contact-Us
              </Link>
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
