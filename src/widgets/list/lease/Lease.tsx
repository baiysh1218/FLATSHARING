import React, { FC } from "react";
import Slider from "react-slick";
import styles from "./ui/index.module.css";
import { LeaseDataArray } from "./model/data";
import LeaseCard from "../../../shared/lease/LeaseCard";
import Title from "../../../shared/title/Title";
import NextArrow from "../../../shared/nextArrow/NextArrow";
import PrevArrow from "../../../shared/nextArrow/PrevArrow";
import Button from "../../../shared/button/Button";

const Lease = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };

  return (
    <div className={styles.lease}>
      <div className={`container ${styles.lease_title_wrapper}`}>
        <div className={styles.title}>
          <Title>Convenient to rent a place on a trip</Title>
        </div>
      </div>
      <div className={styles.lease_list}>
        <Slider {...settings}>
          {LeaseDataArray.map((item) => (
            <LeaseCard item={item} key={item.id} />
          ))}
        </Slider>
      </div>
      <div
        className="container"
        style={{ alignSelf: "flex-start", marginTop: "40px" }}
      >
        <Button>Try it yourself</Button>
      </div>
    </div>
  );
};

export default Lease;
