import React from "react";
import EmblaCarousel from "./emblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";

import "../components/emblaCarousel/css/base.css";
import "../components/emblaCarousel/css/embla.css";
import "../components/emblaCarousel/css/sandbox.css";

const ScrollingCards = () => {
  const OPTIONS: EmblaOptionsType = {
    dragFree: true,
    loop: true,
    align: "start",
  };

  return (
    //vat or vit to select html element

    <EmblaCarousel options={OPTIONS} />
  );
};

export default ScrollingCards;
