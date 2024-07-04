import React from "react";
import styles from "./ui/index.module.css";
import PromoTextSection from "../../widgets/promoTextSection/PromoTextSection";
import PromoImageSection from "../../widgets/promoImageSection/PromoImageSection";

const PromotionBanner = () => {
  return (
    <div className={`container ${styles.promotion_bunner}`}>
      <PromoTextSection />
      <PromoImageSection />
    </div>
  );
};

export default PromotionBanner;
