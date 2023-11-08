import React from 'react';

export const FormAnimalAdoption: React.FC = () => {
  return (
    <form action="#" id="animal_adoption">
      <div className="flex flex-col text-white space-y-5 md:justify-center md:w-[570px] text-base font-bold">
        <h1 className="font-bold mb-5 text-[#737180] uppercase text-center">
          Dados do Animal
        </h1>
        <div className="flex space-x-2 items-center">
          <label htmlFor="adoption-name">Nome</label>

          <input
            type="text"
            name="adoption-name"
            id="adoption-name"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          />
        </div>

        <div className="flex space-x-2 items-center">
          <label htmlFor="adoption-birth">Data do Nascimento</label>

          <input
            type="date"
            name="adoption-birth"
            id="adoption-birth"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          />
        </div>

        <div className="flex space-x-2 items-center">
          <label htmlFor="aadoption-animal-gender">Sexo</label>

          <select
            id="adoption-animal-gender"
            name="adoption-animal-gender"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          >
            <option value="female">Femêa</option>
            <option value="male">Macho</option>
          </select>
        </div>

        <div className="flex space-x-2 items-center">
          <label htmlFor="adoption-castrate">Castrado</label>

          <select
            id="aadoption-castrate"
            name="adoption-castrate"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          >
            <option value="yes">Sim</option>
            <option value="No">Não</option>
          </select>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[225px] h-16 bg-[rgba(0,249,189,0.35)] uppercase rounded-3xl hover:bg-[rgba(40,100,90,0.99)] text-white font-bold"
            form="full_register_adopt_animal"
          >
            cadastrar
          </button>
        </div>
      </div>
    </form>
  );
};
