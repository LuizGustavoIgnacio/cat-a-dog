'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

import addressService, { Address } from '~/services/address-service';
import adoptedAnimalService from '~/services/adopted-animal-service';
import adopterService from '~/services/adopter-service';

interface FormType {
  adopt: {
    name: string;
    cpf: string;
    rg: string;
    zip: string;
    cel: string;
    city: string;
    district: string;
    profession: string;
    state: string;
    street: string;
    number: string;
  };
  species: string;
  sex: string;
  race: string;
  name: string;
  microchip: string;
  color: string;
  ccz: boolean;
  dates: {
    age: string;
    dewormed: string;
    neutered: string;
    vaccinated: string;
    adoption: string;
  };
}

export const FormRegister: React.FC = () => {
  // const [show, setShow] = useState(false);

  const { register, handleSubmit } = useForm();

  const handleSubmitedData = async (data: FormType) => {
    const address = {
      id: 0,
      street: data.adopt.street,
      number: Number(data.adopt.number),
      district: data.adopt.district,
      state: data.adopt.state,
      zip: data.adopt.zip,
      city: data.adopt.city,
    };

    const responseAddress = await addressService.create<Address>(address);

    const adopter = {
      id: 0,
      firstName: data.adopt.name.split(' ').slice(0, -1).join(' '),
      lastName: data.adopt.name.split(' ').slice(-1).join(' '),
      profession: data.adopt.profession,
      cpf: data.adopt.cpf,
      rg: data.adopt.rg,
      phoneNumber: data.adopt.cel,
      addressId: Number(responseAddress.data.id),
    };

    const responseAdopter = await adopterService.create(adopter);

    const animal = {
      id: 0,
      microchip: data.microchip,
      name: data.name,
      species: data.species,
      race: data.race,
      color: data.color,
      sex: data.sex === 'M' ? 1 : 0,
      ccz: data.ccz,
      dates: {
        dewormed: data.dates.dewormed,
        vaccinated: data.dates.vaccinated,
        neutered: data.dates.neutered,
        age: data.dates.age,
        adoption: data.dates.adoption,
      },
      adopterId: Number(responseAdopter.data.id),
    };

    adoptedAnimalService.create(animal).then((res) => console.log(res.data));
  };

  return (
    <form
      action="#"
      id="full_register_adopt_animal"
      onSubmit={handleSubmit((data) => handleSubmitedData(data as FormType))}
    >
      <div className="flex flex-col text-white text-center">
        <label className="font-bold mb-5 text-[#737180] uppercase">
          Dados do Animal
        </label>
        <div className="flex flex-col w-[750px] text-white text-base font-bold space-y-7">
          <div className="flex space-x-3 items-center">
            <label htmlFor="microchip">
              Microchip<span className="text-red-500">*</span>
            </label>

            <input
              {...register('microchip')}
              type="text"
              id="microchip"
              name="microchip"
              className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
            />
          </div>
          <div className="flex space-x-3 items-center">
            <label htmlFor="name">
              Nome<span className="text-red-500">*</span>
            </label>

            <input
              {...register('name')}
              type="text"
              id="name"
              name="name"
              className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
            />
          </div>

          <div className="flex space-x-5">
            <div className="w-1/3 flex items-center space-x-3">
              <label htmlFor="species">
                Espécie<span className="text-red-500">*</span>
              </label>

              <select
                {...register('species')}
                name="species"
                id="species"
                form="animal_form"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
              >
                <option value="cachorro">Cachorro</option>
                <option value="gato">Gato</option>
              </select>
            </div>

            <div className="w-1/3 flex items-center space-x-3">
              <label htmlFor="race">Raça</label>

              <input
                {...register('race')}
                type="text"
                id="race"
                name="race"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
              />
            </div>

            <div className="w-1/3 flex items-center space-x-3">
              <label htmlFor="color">Cor</label>

              <input
                {...register('color')}
                type="text"
                id="color"
                name="color"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
              />
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="w-3/6 flex items-center space-x-3">
              <label htmlFor="dates.age">Data de Nascimento</label>

              <input
                {...register('dates.age')}
                type="date"
                id="dates.age"
                name="dates.age"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
              ></input>
            </div>

            <div className="w-1/6 flex items-center space-x-3">
              <label htmlFor="sex">Sexo</label>

              <select
                {...register('sex')}
                name="sex"
                id="sex"
                form="animal_form"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-1"
              >
                <option value="M">M</option>
                <option value="F">F</option>
              </select>
            </div>

            <div className="w-2/6 flex items-center space-x-3">
              <label htmlFor="dates.dewormed">Vermifugado</label>

              <input
                {...register('dates.dewormed')}
                type="date"
                id="dates.dewormed"
                name="dates.dewormed"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
              ></input>
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="w-2/6 flex items-center space-x-3">
              <label htmlFor="vaccine">
                Vacinado<span className="text-red-500">*</span>
              </label>

              <input
                {...register('dates.vaccinated')}
                type="date"
                id="dates.vaccinated"
                name="dates.vaccinated"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
              ></input>
            </div>

            <div className="w-2/6 flex items-center space-x-3">
              <label htmlFor="czz">
                Retirado CZZ<span className="text-red-500">*</span>
              </label>

              <input
                {...register('ccz')}
                type="checkbox"
                name="czz"
                id="czz"
                form="animal_form"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-1"
              />
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="w-2/6 flex items-center space-x-3">
              <label htmlFor="castrate">
                Castrado<span className="text-red-500">*</span>
              </label>
              <input
                {...register('dates.neutered')}
                type="date"
                id="dates.neutered"
                name="dates.neutered"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
              ></input>
            </div>
          </div>
        </div>

        <label className="font-bold mb-5 mt-8 text-[#737180] uppercase">
          Dados do Adotante
        </label>

        <div className="flex flex-col w-[750px] text-white text-base font-bold space-y-7">
          <div className="flex space-x-3 items-center">
            <label htmlFor="adopt.name">
              Nome Completo<span className="text-red-500">*</span>
            </label>

            <input
              {...register('adopt.name')}
              type="text"
              id="adopt.name"
              name="adopt.name"
              className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3 capitalize"
            />
          </div>

          <div className="flex space-x-5">
            <div className="flex w-4/6 space-x-3 items-center">
              <label htmlFor="adopt.cpf">
                CPF<span className="text-red-500">*</span>
              </label>

              <input
                {...register('adopt.cpf')}
                type="text"
                id="adopt.cpf"
                name="adopt.cpf"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
              />
            </div>
            <div className="flex w-2/6 space-x-3 items-center">
              <label htmlFor="adopt.rg">
                RG<span className="text-red-500">*</span>
              </label>

              <input
                {...register('adopt.rg')}
                type="text"
                id="adopt.rg"
                name="adopt.rg"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
              />
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="flex w-1/3 space-x-3 items-center">
              <label htmlFor="adopt.zip">
                CEP<span className="text-red-500">*</span>
              </label>

              <input
                {...register('adopt.zip')}
                type="text"
                id="adopt.zip"
                name="adopt.zip"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
              />
            </div>

            <div className="flex w-1/3 space-x-3 items-center">
              <label htmlFor="adopt.cel">
                Celular<span className="text-red-500">*</span>
              </label>

              <input
                {...register('adopt.cel')}
                type="tel"
                pattern="+55[0-9]{2}[0-9]{5}-[0-9]{4}"
                id="adopt.cel"
                name="adopt.cel"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
              />
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="flex w-5/12 space-x-3 items-center">
              <label htmlFor="adopt.street">Rua</label>

              <input
                {...register('adopt.street')}
                type="text"
                id="adopt.street"
                name="adopt.street"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
              />
            </div>

            <div className="flex w-3/12 space-x-3 items-center">
              <label htmlFor="adopt.number">N</label>

              <input
                {...register('adopt.number')}
                type="number"
                id="adopt.number"
                name="adopt.number"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
              />
            </div>

            <div className="flex w-4/12 space-x-3 items-center">
              <label htmlFor="adopt.district">Bairro</label>

              <input
                {...register('adopt.district')}
                type="text"
                id="adopt.district"
                name="adopt.district"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
              />
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="flex w-2/3 space-x-3 items-center">
              <label htmlFor="adopt.city">Cidade</label>

              <input
                {...register('adopt.city')}
                type="text"
                id="adopt.city"
                name="adopt.city"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
              />
            </div>

            <div className="flex w-1/3 space-x-3 items-center">
              <label htmlFor="adopt.state">Estado</label>

              <select
                {...register('adopt.state')}
                id="adopt.state"
                name="adopt.state"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-1"
              >
                <option value="SP">SP</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="flex w-1/2 space-x-3 items-center">
              <label htmlFor="adopt.profession">Profissão</label>

              <input
                {...register('adopt.profession')}
                type="text"
                id="adopt.profession"
                name="adopt.profession"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3 lowercase"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <button
          type="submit"
          className="w-[225px] h-16 bg-[rgba(0,249,189,0.35)] uppercase rounded-3xl hover:bg-[rgba(40,100,90,0.99)] text-white font-bold mt-5 "
        >
          cadastrar
        </button>
      </div>
    </form>
  );
};
