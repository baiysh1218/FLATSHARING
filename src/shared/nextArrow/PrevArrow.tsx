import React, { FC } from "react";
import { ArrowProps } from "./model/types";
import styles from "./ui/index.module.css";
import { ReactComponent as Arrow } from "../../assets/arrow_carousel.svg";

const PrevArrow: FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styles.customArrow}`}
      style={{
        ...style,
        display: "block",
        left: "50px",
        transform: "rotate(180deg)",
      }}
      onClick={onClick}
    >
      <Arrow className={styles.arrowIcon} />
    </div>
  );
};

export default PrevArrow;
