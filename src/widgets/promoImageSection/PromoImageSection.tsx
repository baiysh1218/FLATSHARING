import React from "react";
import styles from "./ui/index.module.css";
import Discounts from "../../shared/discounts/Discounts";
import UserProfileCard from "../../shared/userProfileCard/UserProfileCard";
import Profile from "../../assets/photo_Ivan.png";

const PromoImageSection = () => {
  return (
    <section className={styles.promo_section}>
      <Discounts
        title="Central London"
        description="130$+/night Airbnb 60$/night"
      />
      <UserProfileCard
        name="Ivan"
        title="Founder Ozma.io, AI & Data consultant"
        image={Profile}
        location="Live at Ivan's flat"
      />
    </section>
  );
};

export default PromoImageSection;
