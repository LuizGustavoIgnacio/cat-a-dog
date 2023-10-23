import React from 'react';

export const CardLostPet: React.FC = () => {
  return (
    <div className="w-[340px] h-[380px] bg-[#4E4D61] rounded-xl relative p-2.5 overflow-hidden group">
      <div className="h-full bg-[#787878] rounded-xl"></div>
      <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-[#393845] px-6 pt-3 pb-9 transition transform translate-y-4 ease-in-out invisible group-hover:visible group-hover:translate-y-0">
        <div className="flex flex-col text-white">
          <h1 className="font-bold">Raça</h1>
          <p className="font-normal text-right mb-2">Indefinida</p>
          <h1 className="font-bold">Local</h1>
          <p className="font-normal text-right">
            Bairro exemplo, Cidade exemplo - Região Exemplo
          </p>
        </div>
      </div>
    </div>
  );
};
