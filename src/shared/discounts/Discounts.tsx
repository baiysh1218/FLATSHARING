import React, { FC } from "react";
import styles from "./ui/index.module.css";
import { DiscountsProps } from "./model/types";

const Discounts: FC<DiscountsProps> = ({ title, description }) => {
  return (
    <div className={styles.discount}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Discounts;
