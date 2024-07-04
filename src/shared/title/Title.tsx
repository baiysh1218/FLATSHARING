import React, { FC } from "react";
import styles from "./ui/index.module.css";
import { TitleProps } from "./model/types";

const Title: FC<TitleProps> = ({ children, style }) => {
  return (
    <h3 style={{ ...style }} className={styles.title}>
      {children}
    </h3>
  );
};

export default Title;
