import React, { FC } from "react";
import { StoriesCardProps } from "./model/types";
import styles from "./ui/index.module.css";

const StoriesCard: FC<StoriesCardProps> = ({ item, style }) => {
  return (
    <div className={styles.stories_card}>
      <img src={item.image} alt="images" style={{ ...style }} />
      <p>{item.city}</p>
    </div>
  );
};

export default StoriesCard;
