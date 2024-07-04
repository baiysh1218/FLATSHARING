import React from "react";
import images1 from "../../assets/1photo.png";
import images2 from "../../assets/2photo.png";
import images3 from "../../assets/3photo.png";

import styles from "./ui/index.module.css";
import Discounts from "../../shared/discounts/Discounts";
import Button from "../../shared/button/Button";

const Accordion = () => {
  return (
    <div className={`container `}>
      <div className={styles.wrapper}>
        <div
          className={styles.accordion}
          style={{ backgroundImage: `url(${images1})` }}
        >
          <Discounts
            title="Houston, Texas"
            description="160$+/night Airbnb 75$/night"
          />
        </div>
        <div
          className={styles.accordion}
          style={{ backgroundImage: `url(${images2})` }}
        >
          <Discounts
            title="Madrid, Spain"
            description="150$+/night Airbnb 70$/night"
          />
        </div>
        <div
          className={styles.accordion}
          style={{ backgroundImage: `url(${images3})` }}
        >
          <Discounts
            title="Atlanta, Georgia"
            description="190$+/night Airbnb 80$/night"
          />
        </div>
      </div>
      <Button>Browse apartments</Button>
    </div>
  );
};

export default Accordion;
