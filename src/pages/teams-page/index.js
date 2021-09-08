import React from 'react';
import { Card } from '../../component';
import styles from './index.module.css';
import { MemberSection } from '../../constants/members';

const Title = ({ name }) => (
  <div className={styles.titleRoot}>
    <div className={styles.titleLine} />
    <div className={styles.titleText}>{name}</div>
  </div>
);

const Teams = () => {
  console.log(MemberSection);
  return (
    <div className={styles.container}>
      {Object.keys(MemberSection).map((key) => (
        <div key={key}>
          <Title name={key} />
          <div className={styles.cardSectionRoot}>
            {MemberSection[key].map((item) => (
              <Card name={item.name} key={item.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export { Teams };
