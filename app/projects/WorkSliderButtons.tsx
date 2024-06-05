import React from 'react';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSwiper } from 'swiper/react';

interface Props {
  containerStyles: string;
  btnStyles: string;
}

const WorkSliderButtons: React.FunctionComponent<Props> = ({
  containerStyles,
  btnStyles,
}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        className={btnStyles}
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default WorkSliderButtons;
