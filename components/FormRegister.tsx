'use client';
import React, { useState } from 'react';
import Switch from 'react-switch';

import { FormAdopt } from './FormAdopt';
import { FormAnimal } from './FormAnimal';
import { SearchBar } from './SearchBar';

export const FormRegister: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <form action="#" id="full_register_adopt_animal">
      <div className="flex flex-col text-white text-center">
        <label className="font-bold mb-5 text-[#737180] uppercase">
          Dados do Animal
        </label>
        <FormAnimal />

        <div className="flex space-x-3 my-5 justify-center text-lg">
          <p className="font-bold">Adotante Cadastrado?</p>

          <Switch
            onChange={() => setShow(!show)}
            checked={show}
            name="switch-adopter"
          />
        </div>

        <label className="font-bold mb-5 mt-8 text-[#737180] uppercase">
          Dados do Adotante
        </label>

        {show ? <SearchBar /> : <FormAdopt />}
      </div>
    </form>
  );
};
