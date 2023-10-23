import { ButtonLoad } from '~/components/ButtonLoad';
import { CardAdoptPet } from '~/components/CardAdoptPet';
import { FooterMenu } from '~/components/FooterMenu';
import { HeaderMenu } from '~/components/HeaderMenu';
import { SearchBar } from '~/components/SearchBar';

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="mx-[150px]">
        <HeaderMenu />

        <div className="flex flex-col mx-5 mt-14 mb-16 space-y-3 text-white">
          <h1 className="font-bold text-3xl mb-5">
            A SOS está recheada de fofuxos esperando para ter um lar!
          </h1>

          <p className="font-normal text-2xl">
            Você pode transformar a vida de um animal, lhe dando lar e uma boa
            quantidade de carinho e cuidado!
          </p>

          <p className="font-normal text-2xl">
            Na SOS é necessário comparecer pessoalmente para realizar a adoção,
            mas é possível ver por aqui muitos dos peludinhos que vão encontrar
            por lá, e claro ver os documentos adiantadamente para levar e
            agilizar o processo!
          </p>
        </div>

        <div className="h-[993px] bg-black/30 rounded-3xl relative pt-6 px-12 mb-28">
          <SearchBar />

          <div className="flex justify-center">
            <div className="grid grid-flow-row grid-rows-2 grid-cols-4 gap-28 mb-4">
              <CardAdoptPet />

              <CardAdoptPet />

              <CardAdoptPet />

              <CardAdoptPet />

              <CardAdoptPet />

              <CardAdoptPet />

              <CardAdoptPet />

              <CardAdoptPet />
            </div>
          </div>

          <div className="flex justify-center">
            <ButtonLoad />
          </div>
        </div>
      </div>

      <FooterMenu />
    </div>
  );
}
