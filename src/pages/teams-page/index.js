import React from 'react';
import { Card } from '../../component';
import styles from './index.module.css';

function Teams() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.facultyadvisor}>
          <div className={styles.line}></div>
          <div className={styles.facultyadvisortext}>Faculty-Advisor</div>
        </div>
        <div className={styles.innercontainer}>
          <div className={styles.cardwrapper} id={styles.firstcard}>
            <Card />
          </div>
        </div>
      </div>
      <div className={styles.container} id={styles.secondcontainer}>
        <div className={styles.facultyadvisor}>
          <div className={styles.line}></div>
          <div className={styles.facultyadvisortext}>Co-Ordinator</div>
        </div>
        <div className={styles.innercontainer}>
          <div className={styles.cardwrapper} id={styles.firstcard}>
            <Card />
          </div>
          <div className={styles.cardwrapper} id={styles.restcard}>
            <Card />
          </div>
          <div className={styles.cardwrapper} id={styles.restcard}>
            <Card />
          </div>
          <div className={styles.cardwrapper} id={styles.restcard}>
            <Card />
          </div>
          <div className={styles.cardwrapper} id={styles.restcard}>
            <Card />
          </div>
        </div>
        <div className={styles.innercontainer}>
          <div className={styles.cardwrapper} id={styles.firstcard}>
            <Card />
          </div>
          <div className={styles.cardwrapper} id={styles.restcard}>
            <Card />
          </div>
          <div className={styles.cardwrapper} id={styles.restcard}>
            <Card />
          </div>
          <div className={styles.cardwrapper} id={styles.restcard}>
            <Card />
          </div>
          <div className={styles.cardwrapper} id={styles.restcard}>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Teams };
