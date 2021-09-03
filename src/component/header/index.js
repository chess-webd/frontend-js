import './index.module.css';
import React, { useEffect, useRef } from 'react';
import styles from  './index.module.css';
import menu from '../../assests/images/menu.png';
import { useState } from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';


const Header=()=>{
    
    const [isMenuOpen,setMenuOpen] =useState(true); 
    const matches = useMediaQuery('(min-width:700px)');
    useEffect(()=>{
        if(matches){
        setMenuOpen(true);}
        else{
            setMenuOpen(false);
        }
    },[matches])
    const toggle=()=>{
    setMenuOpen(!isMenuOpen)
    }

    return(
        <div className="App">
     <header className={styles.header}>
    <div className={styles.container}>
        <div className={styles.navbar}>
            
           
            <nav>
              <div class={styles.chesslogo}>
                <div className={styles.ChessText}><b>ChESS</b></div>
                    <div className={styles.iitrtext}>
                    IITR
                    </div>
                
            </div> 
                <ul className={isMenuOpen?styles.menuOpen:styles.menuClose}>
                    <li><a href=""><b>Home</b></a></li>
                    <li><a href=""><b>Events</b></a></li>
                    <li><a href=""><b>Chem-E-thons</b></a></li>
                    <li><a href=""><b>Department</b></a></li>
                    <li><a href=""><b>Team</b></a></li>
                    <li><a href=""><b>Contact Us</b></a></li>
                </ul>
            </nav>
            <img className={styles.menu} src={menu} onClick={toggle} ></img>
        </div>
    </div>
  </header>

      
    </div>
    );
}
export default Header;