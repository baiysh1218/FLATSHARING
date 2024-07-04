import React, { FC } from "react";
import Slider from "react-slick";
import styles from "./ui/index.module.css";
import NextArrow from "../../../shared/nextArrow/NextArrow";
import PrevArrow from "../../../shared/nextArrow/PrevArrow";
import Title from "../../../shared/title/Title";
import StoriesCard from "../../../shared/stories/StoriesCard";
import { StoriesCArouselData } from "./model/data";

const StoriesCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: (
      <NextArrow
        style={{ width: "55px", height: "55px", background: "#282828" }}
      />
    ),
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
          <Title>Homes in the community</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
      <div className={` container ${styles.lease_list}`}>
        <Slider {...settings}>
          {StoriesCArouselData.map((item) => (
            <StoriesCard item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default StoriesCarousel;
