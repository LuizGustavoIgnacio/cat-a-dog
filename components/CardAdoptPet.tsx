import React from 'react';

export interface AnimalType {
  name: string;
  breed: string;
}

interface CardAdoptPetProps {
  animalInfo: AnimalType;
}

export const CardAdoptPet: React.FC<CardAdoptPetProps> = ({ animalInfo }) => {
  return (
    <div className="w-60 h-[350px] bg-[#2F2F2F] rounded-[10px] overflow-hidden relative group">
      <div className="absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] h-1/3 px-6 pt-5 pb-6 transition transform translate-y-8 ease-in-out invisible group-hover:visible group-hover:translate-y-0">
        <div className="flex flex-col text-white space-y-2">
          <h1 className="font-bold text-xl text-[#FFA859]">
            {animalInfo.name}
          </h1>
          <h2 className="font-normal text-lg">{animalInfo.breed}</h2>
        </div>
      </div>
    </div>
  );
};
