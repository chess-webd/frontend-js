import React from 'react';
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
import { Images } from '../../constants/images';
import { ReactComponent as ChessLogo } from '../../assests/svg/chess-logo.svg';

const FooterLink = ({ to, label }) => (
  <div className={styles.footerLink}>
    <div className={styles.footerLine} />
    <Link to={to} className={styles.footerLinkText}>
      {label}
    </Link>
  </div>
);

const SocialIconLink = ({ href, icon }) => (
  <span className={styles.socialIcon}>
    <FontAwesomeIcon
      href={href}
      target='_blank'
      rel='noreferrer'
      icon={icon}
      style={{ color: 'gray' }}
    />
  </span>
);

function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.footerBody}>
          <div className={styles.footerContent}>
            <div className={styles.logoContainer}>
              <div className={styles.chessLogo}>
                <ChessLogo className={styles.chessLogoSVG} />
              </div>
              <div className={styles.socialIconMenu}>
                <SocialIconLink
                  icon={faFacebookF}
                  href='https://facebook.com'
                />
                <SocialIconLink
                  icon={faInstagram}
                  href='https://www.instagram.com'
                />
                <SocialIconLink
                  icon={faTwitter}
                  href='https://www.twitter.com'
                />
                <SocialIconLink
                  icon={faYoutube}
                  href='https://www.youtube.com'
                />
              </div>
            </div>
            <div className={styles.logoContainer}>
              <img
                className={styles.chessLogoPNG}
                src={Images.CHESS_LOGO_NO_BG}
                alt='chess-logo'
              />
            </div>
          </div>
          <div className={styles.footerContent}>
            <FooterLink to='/' label='Home' />
            <FooterLink to='/' label='Chem-E-Thons' />
            <FooterLink to='/team' label='Team' />
            <FooterLink to='/' label='Event' />
            <FooterLink to='/department' label='Department' />
            <FooterLink to='/' label='Contact-Us' />
          </div>
        </div>
        <div className={styles.copyrightRoot}>
          <Copyright className={styles.copyrightLogo} />
          <span className={styles.copyrightRootText}> 2021 ChESS IITR </span>
        </div>
      </div>
    </div>
  );
}

export { Footer };
