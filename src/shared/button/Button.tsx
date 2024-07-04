import React, { FC } from "react";
import { ButtonProps } from "./model/types";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import styles from "./ui/index.module.css";

const Button: FC<ButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <button className={styles.button} onClick={onClick} {...props}>
      {children}
      <div className={styles.arrow}>
        <Arrow />
      </div>
    </button>
  );
};

export default Button;
