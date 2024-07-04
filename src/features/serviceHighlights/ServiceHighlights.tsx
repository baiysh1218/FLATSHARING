import React from "react";
import Title from "../../shared/title/Title";
import styles from "./ui/index.module.css";
import ServiceHighlightsList from "../../widgets/list/serviceHighlights/ServiceHighlightsList";
import Button from "../../shared/button/Button";

const ServiceHighlights = () => {
  return (
    <div className={`container ${styles.serviceHighlights}`}>
      <Title style={{ display: "flex", justifyContent: "center" }}>
        How It Work
      </Title>

      <ServiceHighlightsList />
      <Button
        style={{
          margin: "auto",
        }}
      >
        See more
      </Button>
    </div>
  );
};

export default ServiceHighlights;
