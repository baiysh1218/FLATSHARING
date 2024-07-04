import React, { FC } from "react";
import { ArrowProps } from "./model/types";
import styles from "./ui/index.module.css"; // Проверьте путь к файлу CSS
import { ReactComponent as Arrow } from "../../assets/arrow_carousel.svg"; // Проверьте путь к SVG

const NextArrow: FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styles.customArrow}`}
      style={{
        ...style,
        display: "block",
        right: "50px",
      }}
      onClick={onClick}
    >
      <Arrow className={styles.arrowIcon} />
    </div>
  );
};

export default NextArrow;
