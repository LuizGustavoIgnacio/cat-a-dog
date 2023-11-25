import { ButtonLoad } from '~/components/ButtonLoad';
import { CardLostPet } from '~/components/CardLostPet';
import { FooterMenu } from '~/components/FooterMenu';
import { HeaderMenu } from '~/components/HeaderMenu';
import { SearchBar } from '~/components/SearchBar';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-2/6 justify-end absolute">
        <div className="w-[65px] h-[65px] blur-[50px] md:w-[130px] md:h-[100px] md:blur-[70px] bg-[#E76F00] rounded-full absolute"></div>
      </div>

      <div className="md:mx-[10px] lg:mx-[100px] 2xl:mx-[150px]">
        <HeaderMenu />

        <div className="mx-[20px] mt-16 mb-[100px]">
          <h1 className="text-white font-bold text-xl md:text-[32px]">
            É extremamente importante informar imediatamente se o seu animal de
            estimação desapareceu ou se você encontrou um animal que possa
            pertencer a outra pessoa.
          </h1>

          <h2 className="text-white font-normal text-lg md:text-2xl mt-6">
            Aqui você irá encontrar formas de informar que seu animal de
            companhia está desaparecido ou informações sobre como prosseguir
            caso tenha encontrado um animal.
          </h2>
        </div>

        <div className="flex flex-col w-ful bg-[#2A2A3A]/30 rounded-xl mb-[100px] backdrop:blur-lg z-50">
          <div className="flex flex-col mx-10 mt-6">
            <SearchBar />

            <div className="flex flex-col items-center">
              <div className="flex justify-center mb-5">
                <div className="grid grid-flow-row md:grid-cols-2 md:grid-rows-4 xl:grid-cols-3 xl:grid-rows-3 2xl:grid-cols-4 2xl:grid-rows-2 gap-5 xl:gap-10 content-around w-full">
                  <Link href="#">
                    <CardLostPet />
                  </Link>

                  <Link href="#">
                    <CardLostPet />
                  </Link>

                  <Link href="#">
                    <CardLostPet />
                  </Link>

                  <Link href="#">
                    <CardLostPet />
                  </Link>

                  <Link href="#">
                    <CardLostPet />
                  </Link>

                  <Link href="#">
                    <CardLostPet />
                  </Link>

                  <Link href="#">
                    <CardLostPet />
                  </Link>

                  <Link href="#">
                    <CardLostPet />
                  </Link>
                </div>
              </div>

              <div className="flex justify-center bottom-0">
                <ButtonLoad />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterMenu />
    </div>
  );
}
