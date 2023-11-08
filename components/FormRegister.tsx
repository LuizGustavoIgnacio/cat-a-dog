'use client';
import React from 'react';

import { FormAdopt } from './FormAdopt';
import { FormAnimal } from './FormAnimal';

export const FormRegister: React.FC = () => {
  return (
    <form action="#" id="full_register_adopt_animal">
      <div className="flex flex-col text-white text-center">
        <label className="font-bold mb-5 text-[#737180] uppercase">
          Dados do Animal
        </label>
        <FormAnimal />

        <label className="font-bold mb-5 mt-8 text-[#737180] uppercase">
          Dados do Adotante
        </label>
        <FormAdopt />
      </div>
    </form>
  );
};
