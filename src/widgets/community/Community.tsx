import React from "react";
import styles from "./ui/index.module.css";
import Title from "../../shared/title/Title";
import { partnersArray } from "./model/data";

const Community = () => {
  return (
    <div className={styles.community}>
      <div className={`container ${styles.community_title}`}>
        <Title>Community of</Title>
      </div>

      <div className={styles.community_partners}>
        <div className={`container ${styles.community_mapping}`}>
          {partnersArray.map((icon) => (
            <img src={icon} alt="partner" key={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
