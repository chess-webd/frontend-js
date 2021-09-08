import React from 'react';
// import  './index.module.css'
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Copyright from '@material-ui/icons/Copyright';

function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.linkcontainer}>
          <div className={styles.link} id={styles.home}>
            <div className={styles.line} id={styles.homeline}></div>
            <Link to='/' className={styles.linktext} id={styles.hometext}>
              Home
            </Link>
          </div>
          <div className={styles.link} id={styles.chemethans}>
            <div className={styles.line} id={styles.chemethansline}></div>
            <Link
              to='/'
              href='#'
              className={styles.linktext}
              id={styles.chemethanstext}
            >
              Chem-E-Thons
            </Link>
          </div>
          <div className={styles.link} id={styles.team}>
            <div className={styles.line} id={styles.teamline}></div>
            <Link
              to='/team'
              href='#'
              className={styles.linktext}
              id={styles.teamtext}
            >
              Team
            </Link>
          </div>
        </div>
        <div className={styles.linkcontainer} id={styles.linkrowtwo}>
          <div className={styles.link} id={styles.event}>
            <div className={styles.line} id={styles.eventline}></div>
            <Link href='/' className={styles.linktext} id={styles.eventtext}>
              Event
            </Link>
          </div>
          <div className={styles.link} id={styles.department}>
            <div className={styles.line} id={styles.departmentline}></div>
            <Link
              to='/department'
              className={styles.linktext}
              id={styles.departmenttext}
            >
              Department
            </Link>
          </div>
          <div className={styles.link} id={styles.contactus}>
            <div className={styles.line} id={styles.contactusline}></div>
            <Link to='/' className={styles.linktext} id={styles.contactustext}>
              Contact-Us
            </Link>
          </div>
        </div>
        <div className={styles.chesslogo}>
          <div className={styles.ChessText}>ChESS</div>
          <div className={styles.iitrtext}>IITR</div>
        </div>
        <div className={styles.socialIconMenu}>
          <a
            className={styles.socialicon}
            id={styles.fb}
            href='https://www.facebook.com'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              classNameName={styles.vector}
              style={{ color: 'gray' }}
            ></FontAwesomeIcon>
          </a>
          <a
            className={styles.socialicon}
            id={styles.insta}
            href='https://www.instagram.com'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faInstagram}
              classNameName={styles.vector}
              style={{ color: 'gray' }}
            ></FontAwesomeIcon>
          </a>
          <a
            className={styles.socialicon}
            id={styles.twitter}
            href='https://www.twitter.com'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faTwitter}
              classNameName={styles.vector}
              style={{ color: 'gray' }}
            ></FontAwesomeIcon>
          </a>
          <a
            className={styles.socialicon}
            id={styles.yt}
            href='https://www.youtube.com'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faYoutube}
              classNameName={styles.vector}
              style={{ color: 'gray' }}
            ></FontAwesomeIcon>
          </a>
        </div>

        <div className={styles.footer1}>
          <Copyright />
          <span className={styles.footer1text}> 2021 Chess IITR </span>
        </div>
      </div>
    </div>
  );
}

export { Footer };
