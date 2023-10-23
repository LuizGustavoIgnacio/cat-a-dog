'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export const CarouselAboutus: React.FC = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      mt-3interval={3000}
      dynamicHeight={false}
      showStatus={false}
      stopOnHover={false}
      showIndicators={false}
      autoPlay
      centerMode
      centerSlidePercentage={20}
      infiniteLoop
    >
      <div className="flex flex-col items-center text-white">
        <div className="w-[150px] h-[150px] bg-slate-900 rounded-full"></div>
        <h3 className="font-bold mt-3">Parceiro 1</h3>
      </div>

      <div className="flex flex-col items-center text-white">
        <div className="w-[150px] h-[150px] bg-slate-900 rounded-full"></div>
        <h3 className="font-bold mt-3">Parceiro 2</h3>
      </div>

      <div className="flex flex-col items-center text-white">
        <div className="w-[150px] h-[150px] bg-slate-900 rounded-full"></div>
        <h3 className="font-bold mt-3">Parceiro 3</h3>
      </div>

      <div className="flex flex-col items-center text-white">
        <div className="w-[150px] h-[150px] bg-slate-900 rounded-full"></div>
        <h3 className="font-bold mt-3">Parceiro 4</h3>
      </div>

      <div className="flex flex-col items-center text-white">
        <div className="w-[150px] h-[150px] bg-slate-900 rounded-full"></div>
        <h3 className="font-bold mt-3">Parceiro 5</h3>
      </div>
    </Carousel>
  );
};
