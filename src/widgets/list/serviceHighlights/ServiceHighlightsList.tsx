import React from "react";
import { useGetCharactersQuery } from "../../../app/redux/api";
import ServiceHighlightsCard from "../../../shared/serviceHighlightsCard/ServiceHighlightsCard";
import { ItemType } from "./model/types";
import styles from "./ui/index.module.css";
import Button from "../../../shared/button/Button";

const ServiceHighlightsList = () => {
  const { data, isError, isLoading } = useGetCharactersQuery({});

  if (isError) {
    return <p>Error</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.list}>
      {data.results.slice(0, 4).map((item: ItemType) => (
        <ServiceHighlightsCard item={item} />
      ))}
    </div>
  );
};

export default ServiceHighlightsList;
