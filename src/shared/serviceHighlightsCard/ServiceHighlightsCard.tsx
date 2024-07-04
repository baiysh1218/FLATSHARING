import React, { FC } from "react";
import styles from "./ui/index.module.css";
import { ServiceHightLightCardProps } from "./model/types";

const ServiceHighlightsCard: FC<ServiceHightLightCardProps> = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>{item.species}</p>
    </div>
  );
};

export default ServiceHighlightsCard;
