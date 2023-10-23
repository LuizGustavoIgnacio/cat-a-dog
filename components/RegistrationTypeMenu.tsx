import React from 'react';

import Link from 'next/link';

export const RegistrationTypeMenu: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-white text-2xl mb-3">Tipo de Cadastro</h1>
      <div className="w-[425px] h-10 rounded-[5px] bg-[#313040] overflow-hidden px-3">
        <div className="flex text-center text-2xl text-white h-full items-center">
          <div className="w-1/3 border-r-[1px] border-white">
            <Link href="/cadastrar-animal">ANIMAL</Link>
          </div>

          <div className="w-1/3 border-r-[1px] border-white">
            <Link href="/cadastrar-adotante">ADOTANTE</Link>
          </div>

          <div className="w-1/3">
            <Link href="/cadastrar-completo">COMPLETO</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
