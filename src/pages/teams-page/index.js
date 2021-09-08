import React from 'react';
import { Card } from '../../component';
import styles from './index.module.css';
import { MemberSection, Designation } from '../../constants/members';

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
      {Object.values(Designation).map((key) => (
        <div key={key} className={styles.sectionRoot}>
          <Title name={key} />
          <div className={styles.cardSectionRoot}>
            {MemberSection[key] &&
              MemberSection[key].map((item) => (
                <div key={item.name} className={styles.card}>
                  <Card
                    name={item.name}
                    fb={item.fb}
                    insta={item.insta}
                    image_link={item.img}
                  />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export { Teams };
