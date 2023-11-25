import React from 'react';

export const CardLostPet: React.FC = () => {
  return (
    <div className="w-[260px] h-[300px] md:w-[340px] md:h-[380px] bg-[#4E4D61] rounded-xl relative p-2.5 overflow-hidden group">
      <div className="h-full bg-[#787878] rounded-xl"></div>

      <div className="absolute left-0 right-0 bottom-0 h-[40%] md:h-1/2 bg-[#393845] px-6 pt-3 pb-9 transition transform md:translate-y-4 ease-in-out md:invisible group-hover:visible md:group-hover:translate-y-0">
        <div className="flex flex-col text-white text-sm md:text-base">
          <h1 className="font-bold">Raça</h1>

          <p className="font-normal text-right md:mb-2">Indefinida</p>

          <h1 className="font-bold">Local</h1>

          <p className="font-normal text-right">
            Bairro exemplo, Cidade exemplo - Região Exemplo
          </p>
        </div>
      </div>
    </div>
  );
};
