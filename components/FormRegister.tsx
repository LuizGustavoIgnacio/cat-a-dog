/* eslint-disable import-helpers/order-imports */
'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import addressService, { Address } from '~/services/address-service';
import adoptedAnimalService from '~/services/adopted-animal-service';
import adopterService from '~/services/adopter-service';

const schema = z.object({
  adoptorName: z
    .string()
    .min(3, { message: 'O nome precisa ter no mínimo 3 caracteres' }),
  cpf: z
    .string()
    .min(11, { message: 'O CPF precisa ter no mínimo 11 caracteres' })
    .max(12),
  rg: z
    .string()
    .min(9, { message: 'O RG precisa ter no mínimo 9 caracteres' })
    .max(10),
  zip: z
    .string()
    .min(8, { message: 'O CEP precisa ter no mínimo 8 caracteres' })
    .max(9),
  cel: z
    .string()
    .min(8, { message: 'O celular precisa ter no mínimo 8 caracteres' })
    .max(20),
  city: z
    .string()
    .min(3, { message: 'A cidade precisa ter no mínimo 3 caracteres' }),
  district: z
    .string()
    .min(3, { message: 'O bairro precisa ter no mínimo 3 caracteres' }),
  profession: z
    .string()
    .min(3, { message: 'A profissão precisa ter no mínimo 3 caracteres' }),
  state: z
    .string()
    .min(1, { message: 'O estado precisa ter no mínimo 1 caractere' })
    .max(3),
  street: z
    .string()
    .min(3, { message: 'A rua precisa ter no mínimo 3 caracteres' }),
  number: z.number(),

  species: z
    .string()
    .min(3, { message: 'A espécie precisa ter no mínimo 3 caracteres' }),
  sex: z.string(),
  race: z
    .string()
    .min(3, { message: 'A raça precisa ter no mínimo 3 caracteres' }),
  name: z
    .string()
    .min(2, { message: 'O nome precisa ter no mínimo 2 caracteres' }),
  microchip: z
    .string()
    .min(40, { message: 'O microchip precisa ter no mínimo 40 caracteres' })
    .max(45),
  color: z
    .string()
    .min(3, { message: 'A cor precisa ter no mínimo 3 caracteres' }),
  ccz: z.boolean(),

  age: z.string().includes('-', { message: 'Data Obrigatória' }),
  dewormed: z.string().includes('-', { message: 'Data Obrigatória' }),
  neutered: z.string().includes('-', { message: 'Data Obrigatória' }),
  vaccinated: z.string().includes('-', { message: 'Data Obrigatória' }),
  adoption: z.string().includes('-', { message: 'Data Obrigatória' }),
});

type FormType = z.infer<typeof schema>;

export const FormRegister: React.FC = () => {
  // const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), mode: 'onChange' });

  const handleSubmitedData = async (data: FormType) => {
    const address = {
      id: 0,
      street: data.street,
      number: Number(data.number),
      district: data.district,
      state: data.state,
      zip: data.zip,
      city: data.city,
    };

    const responseAddress = await addressService.create<Address>(address);

    const adopter = {
      id: 0,
      firstName: data.name,
      lastName: data.name,
      profession: data.profession,
      cpf: data.cpf,
      rg: data.rg,
      phoneNumber: data.cel,
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
      sex: Number(data.sex),
      ccz: data.ccz,
      dates: {
        dewormed: data.dewormed,
        vaccinated: data.vaccinated,
        neutered: data.neutered,
        age: data.age,
        adoption: data.adoption,
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
          <div className="flex flex-col space-x-3 items-center">
            <div className="flex w-full items-center space-x-3">
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

            {errors.microchip && (
              <p className="text-red-500 text-[12px]">
                {errors.microchip.message as string}
              </p>
            )}
          </div>
          <div className="flex flex-col space-x-3 items-center">
            <div className="flex w-full items-center space-x-3">
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
            {errors.name && (
              <p className="text-red-500 text-[12px]">
                {errors.name.message as string}
              </p>
            )}
          </div>

          <div className="flex space-x-5">
            <div className="w-1/3 flex items-center space-x-3">
              <div className="flex w-full items-center space-x-3">
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
            </div>

            <div className="w-1/3 flex flex-col items-center space-x-3">
              <label htmlFor="race">Raça</label>

              <input
                {...register('race')}
                type="text"
                id="race"
                name="race"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
              />
              {errors.race && (
                <p className="text-red-500 text-[12px]">
                  {errors.race.message as string}
                </p>
              )}
            </div>

            <div className="w-1/3 flex flex-col">
              <div className="flex items-center space-x-3">
                <label htmlFor="color">Cor</label>

                <input
                  {...register('color')}
                  type="text"
                  id="color"
                  name="color"
                  className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
                />
              </div>

              {errors.color && (
                <p className="text-red-500 text-[12px]">
                  {errors.color.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="w-3/6 flex flex-col">
              <div className="flex items-center space-x-3">
                <label htmlFor="age">Data de Nascimento</label>

                <input
                  {...register('age')}
                  type="date"
                  id="age"
                  name="age"
                  className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
                ></input>
              </div>

              {errors.age && (
                <p className="text-red-500 text-[12px]">
                  {errors.age.message as string}
                </p>
              )}
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
                <option value="0">M</option>
                <option value="1">F</option>
              </select>
            </div>

            <div className="w-2/6 flex flex-col">
              <div className="flex items-center space-x-3">
                <label htmlFor="dewormed">Vermifugado</label>

                <input
                  {...register('dewormed')}
                  type="date"
                  id="dewormed"
                  name="dewormed"
                  className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
                ></input>
              </div>

              {errors.dewormed && (
                <p className="text-red-500 text-[12px]">
                  {errors.dewormed.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="w-2/6 flex flex-col">
              <div className="flex items-center space-x-3">
                <label htmlFor="vaccine">
                  Vacinado<span className="text-red-500">*</span>
                </label>
                <input
                  {...register('vaccinated')}
                  type="date"
                  id="vaccinated"
                  name="vaccinated"
                  className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
                ></input>
              </div>
              {errors.vaccinated && (
                <p className="text-red-500 text-[12px]">
                  {errors.vaccinated.message as string}
                </p>
              )}
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
            <div className="w-2/6 flex flex-col">
              <div className="flex items-center space-x-3">
                <label htmlFor="castrate">
                  Castrado<span className="text-red-500">*</span>
                </label>

                <input
                  {...register('neutered')}
                  type="date"
                  id="neutered"
                  name="neutered"
                  className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
                ></input>
              </div>

              {errors.neutered && (
                <p className="text-red-500 text-[12px]">
                  {errors.neutered.message as string}
                </p>
              )}
            </div>

            <div className="w-2/6 flex flex-col">
              <div className="flex items-center space-x-3">
                <label htmlFor="castrate">
                  Data da Adoção<span className="text-red-500">*</span>
                </label>
                <input
                  {...register('adoption')}
                  type="date"
                  id="adoption"
                  name="adoption"
                  className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
                ></input>
              </div>

              {errors.adoption && (
                <p className="text-red-500 text-[12px]">
                  {errors.adoption.message as string}
                </p>
              )}
            </div>
          </div>
        </div>

        <label className="font-bold mb-5 mt-8 text-[#737180] uppercase">
          Dados do Adotante
        </label>

        <div className="flex flex-col w-[750px] text-white text-base font-bold space-y-7">
          <div className="flex flex-col">
            <div className="flex space-x-3 items-center">
              <label htmlFor="name">
                Nome Completo<span className="text-red-500">*</span>
              </label>
              <input
                {...register('adoptorName')}
                type="text"
                id="adoptorName"
                name="adoptorName"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3 capitalize"
              />
            </div>

            {errors.adoptorName && (
              <p className="text-red-500 text-[12px]">
                {errors.adoptorName.message as string}
              </p>
            )}
          </div>

          <div className="flex space-x-5">
            <div className="flex flex-col w-4/6">
              <div className="flex space-x-3 items-center">
                <label htmlFor="cpf">
                  CPF<span className="text-red-500">*</span>
                </label>

                <input
                  {...register('cpf')}
                  type="text"
                  id="cpf"
                  name="cpf"
                  className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
                />
              </div>

              {errors.cpf && (
                <p className="text-red-500 text-[12px]">
                  {errors.cpf.message as string}
                </p>
              )}
            </div>

            <div className="flex flex-col w-2/6">
              <div className="flex space-x-3 items-center">
                <label htmlFor="rg">
                  RG<span className="text-red-500">*</span>
                </label>

                <input
                  {...register('rg')}
                  type="text"
                  id="rg"
                  name="rg"
                  className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
                />
              </div>
              {errors.rg && (
                <p className="text-red-500 text-[12px]">
                  {errors.rg.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="flex flex-col w-1/3 ">
              <div className="flex space-x-3 items-center">
                <label htmlFor="zip">
                  CEP<span className="text-red-500">*</span>
                </label>

                <input
                  {...register('zip')}
                  type="text"
                  id="zip"
                  name="zip"
                  className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
                />
              </div>

              {errors.zip && (
                <p className="text-red-500 text-[12px]">
                  {errors.zip.message as string}
                </p>
              )}
            </div>

            <div className="flex flex-col w-1/3">
              <div className="flex space-x-3 items-center">
                <label htmlFor="cel">
                  Celular<span className="text-red-500">*</span>
                </label>

                <input
                  {...register('cel')}
                  type="tel"
                  pattern="+55[0-9]{2}[0-9]{5}-[0-9]{4}"
                  id="cel"
                  name="cel"
                  className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
                />
              </div>

              {errors.cel && (
                <p className="text-red-500 text-[12px]">
                  {errors.cel.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="flex flex-col w-5/12 ">
              <div className="flex space-x-3 items-center">
                <label htmlFor="street">Rua</label>

                <input
                  {...register('street')}
                  type="text"
                  id="street"
                  name="street"
                  className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
                />
              </div>

              {errors.street && (
                <p className="text-red-500 text-[12px]">
                  {errors.street.message as string}
                </p>
              )}
            </div>

            <div className="flex w-3/12 space-x-3 items-center">
              <label htmlFor="number">N</label>

              <input
                {...register('number', { valueAsNumber: true })}
                type="number"
                id="number"
                name="number"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
              />
            </div>

            <div className="flex flex-col w-4/12">
              <div className="flex space-x-3 items-center">
                <label htmlFor="district">Bairro</label>

                <input
                  {...register('district')}
                  type="text"
                  id="district"
                  name="district"
                  className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
                />
              </div>

              {errors.district && (
                <p className="text-red-500 text-[12px]">
                  {errors.district.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="flex flex-col w-2/3">
              <div className="flex space-x-3 items-center">
                <label htmlFor="city">Cidade</label>

                <input
                  {...register('city')}
                  type="text"
                  id="city"
                  name="city"
                  className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3"
                />
              </div>

              {errors.city && (
                <p className="text-red-500 text-[12px]">
                  {errors.city.message as string}
                </p>
              )}
            </div>

            <div className="flex w-1/3 space-x-3 items-center">
              <label htmlFor="state">Estado</label>

              <select
                {...register('state')}
                id="state"
                name="state"
                className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-1"
              >
                <option value="SP">SP</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="flex flex-col w-1/2">
              <div className="flex items-center space-x-3">
                <label htmlFor="profession">Profissão</label>

                <input
                  {...register('profession')}
                  type="text"
                  id="profession"
                  name="profession"
                  className="w-full bg-[#4E4D61] rounded-[5px] h-10 px-3 lowercase"
                />
              </div>
              {errors.profession && (
                <p className="text-red-500 text-[12px]">
                  {errors.profession.message as string}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <button
          type="submit"
          className={
            'w-[225px] h-16 bg-[rgba(0,249,189,0.45)] uppercase rounded-3xl hover:bg-[rgba(40,100,90,0.99)] text-white font-bold mt-5'
          }
        >
          cadastrar
        </button>
      </div>
    </form>
  );
};
