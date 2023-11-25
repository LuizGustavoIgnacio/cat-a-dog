import { ButtonLoad } from '~/components/ButtonLoad';
import { AnimalType, CardAdoptPet } from '~/components/CardAdoptPet';
import { FooterMenu } from '~/components/FooterMenu';
import { HeaderMenu } from '~/components/HeaderMenu';
import { SearchBar } from '~/components/SearchBar';

export default function Page() {
  const animals: AnimalType[] = [
    {
      name: 'Brutus',
      breed: 'Pitbull',
    },
    {
      name: 'Brutus',
      breed: 'Pitbull',
    },
    {
      name: 'Brutus',
      breed: 'Pitbull',
    },
    {
      name: 'Brutus',
      breed: 'Pitbull',
    },
    {
      name: 'Brutus',
      breed: 'Pitbull',
    },
    {
      name: 'Brutus',
      breed: 'Pitbull',
    },
    {
      name: 'Brutus',
      breed: 'Pitbull',
    },
    {
      name: 'Brutus',
      breed: 'Pitbull',
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="mx-[5%] md:mx-[10px] lg:mx-[100px] 2xl:mx-[150px]">
        <HeaderMenu />

        <div className="flex flex-col mx-5 mt-14 mb-16 space-y-3 text-white z-50">
          <h1 className="font-bold text-2xl md:text-3xl mb-5">
            A SOS está recheada de fofuxos esperando para ter um lar!
          </h1>

          <p className="font-normal text-lg md:text-2xl">
            Você pode transformar a vida de um animal, lhe dando lar e uma boa
            quantidade de carinho e cuidado!
          </p>

          <p className="font-normal text-lg md:text-2xl">
            Na SOS é necessário comparecer pessoalmente para realizar a adoção,
            mas é possível ver por aqui muitos dos peludinhos que vão encontrar
            por lá, e claro ver os documentos adiantadamente para levar e
            agilizar o processo!
          </p>
        </div>

        <div className="flex flex-col-reverse justify-start absolute z-0">
          <div className="w-[95px] h-[95px] blur-[40px] md:w-[130px] md:h-[100px] md:blur-[70px] bg-[#1E284B] rounded-full absolute"></div>
        </div>

        <div className="flex justify-center">
          <div className="bg-black/40 rounded-3xl relative pt-6 px-5 md:px-9 mb-28 z-50 2xl:px-4 min-w-full">
            <SearchBar />

            <div className="flex justify-center">
              <div className="grid grid-flow-row gap-3 w-full md:grid-cols-3 md:grid-rows-4 lg:grid-rows-3 lg:grid-cols-3 xl:grid-cols-4 xl:grid-rows-2 md:gap-14 2xl:grid-cols-6 2xl:grid:rows-2 mb-4 place-content-center">
                {animals.map((animalInfo, index) => (
                  <CardAdoptPet key={index} animalInfo={animalInfo} />
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <ButtonLoad />
            </div>
          </div>
        </div>
      </div>

      <FooterMenu />
    </div>
  );
}
