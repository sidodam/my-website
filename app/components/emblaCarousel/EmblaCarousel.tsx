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
      imagesrc="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript_256x256.png"
    />,

    <CardContent
      key={1}
      imagesrc="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python_256x256.png"
    />,

    <CardContent
      key={1}
      imagesrc="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp_256x256.png"
    />,

    <CardContent
      key={1}
      imagesrc="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java_256x256.png"
    />,

    <CardContent key={1} imagesrc="/sql.png" />,

    <CardContent
      key={1}
      imagesrc="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/php/php_256x256.png"
    />,
    <CardContent key={1} imagesrc="/dotnet.png" />,

    <CardContent key={1} imagesrc="/react.png" />,
    <CardContent key={1} imagesrc="/nextjs.svg" />,
    <CardContent key={1} imagesrc="/tailwind.svg" />,
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
