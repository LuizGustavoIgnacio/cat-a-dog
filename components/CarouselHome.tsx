'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export const CarouselHome: React.FC = () => {
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      interval={3000}
      dynamicHeight={false}
      showStatus={false}
      stopOnHover={false}
      autoPlay
      infiniteLoop
      showIndicators={false}
      thumbWidth={0}
      className=""
    >
      <div className="flex justify-center">
        <div className="w-[350px] -z-0 min-w-[60%]">
          <img src="/cao.png" className="relative" />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[350px] -z-0 min-w-[60%]">
          <img src="/cao1.png" className="relative" />
        </div>
      </div>
    </Carousel>
  );
};
