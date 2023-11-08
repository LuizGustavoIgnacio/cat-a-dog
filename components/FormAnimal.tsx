import React from 'react';

export const FormAnimal: React.FC = () => {
  return (
    <div className="flex flex-col w-[750px] text-white text-base font-bold space-y-7">
      <div className="flex space-x-3 items-center">
        <label htmlFor="microchip">
          Microchip<span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          id="microchip"
          name="microchip"
          className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
        />
      </div>

      <div className="flex space-x-5">
        <div className="w-1/3 flex items-center space-x-3">
          <label htmlFor="species">
            Espécie<span className="text-red-500">*</span>
          </label>

          <select
            name="species"
            id="species"
            form="animal_form"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          >
            <option value="little-dog">doguinho</option>
          </select>
        </div>

        <div className="w-1/3 flex items-center space-x-3">
          <label htmlFor="race">Raça</label>

          <input
            type="text"
            id="race"
            name="race"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          />
        </div>

        <div className="w-1/3 flex items-center space-x-3">
          <label htmlFor="animal-color">Cor</label>

          <input
            type="text"
            id="animal-color"
            name="animal-color"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          />
        </div>
      </div>

      <div className="flex space-x-5">
        <div className="w-3/6 flex items-center space-x-3">
          <label htmlFor="animal-date-birth">Data de Nascimento</label>

          <input
            type="date"
            id="animal-date-birth"
            name="animal-date-birth"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          ></input>
        </div>

        <div className="w-1/6 flex items-center space-x-3">
          <label htmlFor="animal-gender">Sexo</label>

          <select
            name="animal-gender"
            id="animal-gender"
            form="animal_form"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-1"
          >
            <option value="male">M</option>
            <option value="female">F</option>
          </select>
        </div>

        <div className="w-2/6 flex items-center space-x-3">
          <label htmlFor="dewormed-date">Vermifugado</label>

          <input
            type="date"
            id="dewormed-date"
            name="dewormed-date"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          ></input>
        </div>
      </div>

      <div className="flex space-x-5">
        <div className="w-2/6 flex items-center space-x-3">
          <label htmlFor="vaccine">
            Vacinado<span className="text-red-500">*</span>
          </label>

          <select
            name="vaccine"
            id="vaccine"
            form="animal_form"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-1"
          >
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>

        <div className="w-2/6 flex items-center space-x-3">
          <label htmlFor="vaccine-date">Data</label>

          <input
            type="date"
            id="vaccine-date"
            name="vaccine-date"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          ></input>
        </div>

        <div className="w-2/6 flex items-center space-x-3">
          <label htmlFor="czz">
            Retirado CZZ<span className="text-red-500">*</span>
          </label>

          <select
            name="czz"
            id="czz"
            form="animal_form"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-1"
          >
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-5">
        <div className="w-2/6 flex items-center space-x-3">
          <label htmlFor="castrate">
            Castrado<span className="text-red-500">*</span>
          </label>

          <select
            name="castrate"
            id="castrate"
            form="animal_form"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-1"
          >
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>

        <div className="w-2/6 flex items-center space-x-3">
          <label htmlFor="castrate-date">Data</label>

          <input
            type="date"
            id="castrate-date"
            name="castrate-date"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          ></input>
        </div>

        <div className="w-2/6 flex items-center space-x-3">
          <label htmlFor="adopt-visited">
            Visita Realizada<span className="text-red-500">*</span>
          </label>

          <select
            name="adopt-visited"
            id="cadopt-visited"
            form="animal_form"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-1"
          >
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>
      </div>
    </div>
  );
};
