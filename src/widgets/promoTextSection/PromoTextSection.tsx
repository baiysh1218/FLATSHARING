import React from "react";
import styles from "./ui/index.module.css";
import Button from "../../shared/button/Button";

const PromoTextSection = () => {
  return (
    <section className={styles.promo_text_section}>
      <div className={styles.promo_wrapper}>
        <h1>Travel 2–3 times cheaper</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <div className={styles.promo_button_wrapper}>
          <Button>Join the community</Button>
          <span>takes only 5 minutes</span>
        </div>
      </div>
    </section>
  );
};

export default PromoTextSection;
