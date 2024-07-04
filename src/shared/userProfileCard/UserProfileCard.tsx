import React from "react";
import styles from "./ui/index.module.css";
import { UserProfileCardProps } from "./model/types";

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  name,
  title,
  image,
  location,
}) => {
  return (
    <div className={styles.userProfileCard}>
      <div className={styles.infoContainer}>
        <img
          src={image}
          alt={`${name}'s profile`}
          className={styles.profileImage}
        />
        <div className={styles.textContainer}>
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>
      <div className={styles.location}>{location}</div>
    </div>
  );
};

export default UserProfileCard;
