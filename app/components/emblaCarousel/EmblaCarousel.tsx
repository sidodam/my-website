import { useCallback } from "react";
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType,
} from "embla-carousel-react";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

import Autoplay from "embla-carousel-autoplay";

import CardContent from "../CardContent";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onButtonClick);

  const items = [
    <CardContent
      key={1}
      title="Noteworthy technology acquisitions 2021"
      description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
      imagesrc="/java.jpg"
    />,
    <CardContent
      key={2}
      title="Noteworthy technology acquisitions 2021"
      description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
      imagesrc="/java.jpg"
    />,
    <CardContent
      key={3}
      title="Noteworthy technology acquisitions 2021"
      description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
      imagesrc="/java.jpg"
    />,
    <CardContent
      key={4}
      title="Noteworthy technology acquisitions 2021"
      description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
      imagesrc="/java.jpg"
    />,
  ];

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {items.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};

export default EmblaCarousel;
