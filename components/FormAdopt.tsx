import React from 'react';

export const FormAdopt: React.FC = () => {
  return (
    <div className="flex flex-col w-[750px] text-white text-base font-bold space-y-7">
      <div className="flex space-x-3 items-center">
        <label htmlFor="adopt-name">
          Nome Completo<span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          id="adopt-name"
          name="adopt-name"
          className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3 capitalize"
        />
      </div>

      <div className="flex space-x-5">
        <div className="flex w-4/6 space-x-3 items-center">
          <label htmlFor="adopt-cpf">
            CPF<span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            id="adopt-cpf"
            name="adopt-cpf"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          />
        </div>
        <div className="flex w-2/6 space-x-3 items-center">
          <label htmlFor="adopt-rg">
            RG<span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            id="adopt-rg"
            name="adopt-rg"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          />
        </div>
      </div>

      <div className="flex space-x-5">
        <div className="flex w-1/3 space-x-3 items-center">
          <label htmlFor="adopt-cep">
            CEP<span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            id="adopt-cep"
            name="adopt-cep"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          />
        </div>

        <div className="flex w-1/3 space-x-3 items-center">
          <label htmlFor="adopt-tel">Telefone</label>

          <input
            type="number"
            id="adopt-tel"
            name="adopt-tel"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          />
        </div>

        <div className="flex w-1/3 space-x-3 items-center">
          <label htmlFor="adopt-cel">
            Celular<span className="text-red-500">*</span>
          </label>

          <input
            type="tel"
            pattern="+55[0-9]{2}[0-9]{5}-[0-9]{4}"
            id="adopt-cel"
            name="adopt-cel"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          />
        </div>
      </div>

      <div className="flex space-x-5">
        <div className="flex w-5/12 space-x-3 items-center">
          <label htmlFor="adopt-street">Rua</label>

          <input
            type="text"
            id="adopt-street"
            name="adopt-street"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          />
        </div>

        <div className="flex w-3/12 space-x-3 items-center">
          <label htmlFor="adopt-house-number">N</label>

          <input
            type="number"
            id="adopt-house-number"
            name="adopt-house-number"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          />
        </div>

        <div className="flex w-4/12 space-x-3 items-center">
          <label htmlFor="adopt-nbhood">Bairro</label>

          <input
            type="text"
            id="adopt-nbhood"
            name="adopt-nbhood"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          />
        </div>
      </div>

      <div className="flex space-x-5">
        <div className="flex w-2/3 space-x-3 items-center">
          <label htmlFor="adopt-city">Cidade</label>

          <input
            type="text"
            id="adopt-city"
            name="adopt-city"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
          />
        </div>

        <div className="flex w-1/3 space-x-3 items-center">
          <label htmlFor="adopt-country">Estado</label>

          <select
            id="adopt-country"
            name="adopt-country"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-1"
          >
            <option value="sao-paulo">SP</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-5">
        <div className="flex w-1/2 space-x-3 items-center">
          <label htmlFor="adopt-profession">Profissão</label>

          <input
            type="text"
            id="adopt-profession"
            name="adopt-profession"
            className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3 lowercase"
          />
        </div>
      </div>
    </div>
  );
};
