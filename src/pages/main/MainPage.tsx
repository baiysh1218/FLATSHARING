import React from "react";
import PromotionBanner from "../../features/promotionBanner/PromotionBanner";
import Community from "../../widgets/community/Community";
import Lease from "../../widgets/list/lease/Lease";
import ServiceHighlights from "../../features/serviceHighlights/ServiceHighlights";
import StoriesCarousel from "../../widgets/list/stories/StoriesCarousel";
import Accordion from "../../features/accordion/Accordion";

const MainPage = () => {
  return (
    <div>
      <PromotionBanner />
      <Community />
      <Lease />
      <ServiceHighlights />
      <StoriesCarousel />
      <Accordion />
    </div>
  );
};

export default MainPage;
