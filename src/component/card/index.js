import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './index.module.css';

const SocialIcon = ({ icon, href, id }) => (
  <div className={styles.socialiconcontainer} id={id}>
    <a href={href} target='_blank' rel='noreferrer'>
      <FontAwesomeIcon icon={icon} className={styles.vector} />
    </a>
  </div>
);

function Card({ image_link, name, fb, insta }) {
  const SocialIconLists = [
    {
      icon: faFacebookF,
      href: fb,
      id: 'fb',
    },
    {
      icon: faInstagram,
      href: insta,
      id: 'insta',
    },
  ];

  return (
    <div className={styles.card}>
      <img className={styles.image} src={image_link} alt='img' />
      <div className={styles.namecontainer}>{name}</div>
      <div className={styles.socialIconGroup}>
        {SocialIconLists.map((item) => (
          <SocialIcon key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Card;
