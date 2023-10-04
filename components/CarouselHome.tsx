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
    >
      <div className="flex justify-center">
        <div className="w-2/4">
          <img src="/cao1.png" />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-2/4">
          <img src="/cao2.png" />
        </div>
      </div>
    </Carousel>
  );
};