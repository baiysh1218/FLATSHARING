import React, { FC } from "react";
import { LeaseProps } from "./model/types";
import styles from "./ui/index.module.css";

const LeaseCard: FC<LeaseProps> = ({
  item: { title, description, images, job, name },
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_top}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.card_bottom}>
        <img src={images} alt={name} />
        <h4>{name}</h4>
        <span>{job}</span>
      </div>
    </div>
  );
};

export default LeaseCard;
