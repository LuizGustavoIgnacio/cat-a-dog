import { FooterMenu } from '~/components/FooterMenu';
import { HeaderMenu } from '~/components/HeaderMenu';
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <div className="md:mx-[10px] lg:mx-[100px] 2xl:mx-[150px]">
        <HeaderMenu />

        <div className="flex flex-col md:flex-row mx-[20px] md:mb-4 md:pt-[130px]">
          <div className="md:w-1/2">
            <div className="flex flex-col text-white pt-4">
              <h1 className="font-bold text-3xl mb-4 lg:text-4xl">Cat a Dog</h1>

              <p className="lg:text-2xl">
                É fundamental anunciar um pet perdido ou encontrado o quanto
                antes.
              </p>

              <p className="lg:text-2xl">
                Utilize o nosso App para celular
                <span className="text-[#47CE95]"> Cat a Dog</span> para divulgar
                seu <span className="text-[#FBBC04]">Pet desaparecido</span>.
                <br /> É a forma mais acessível e portátil para receber retornos
                de seu <span className="text-[#FBBC04]">Pet desaparecido </span>
                ou mostrar que um fofuxo de outro anunciante foi encontrado.
              </p>

              <div className="mt-4">
                <button className="flex items-center font-bold text-base border border-white rounded-[5px] p-5 lg:text-3xl lg:p-8 lg:pr-24 lg:hover:bg-white lg:transition lg:ease-in-out lg:hover:text-black group">
                  <Image
                    src="/images/vectors/logos_google-play-icon.svg"
                    width={60}
                    height={67}
                    alt="logo"
                    className="w-[30px] mr-4 lg:w-[60px] group-hover:invisible group-hover:ease-in-out"
                  />
                  Disponivel em breve na GooglePlay
                </button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center items-center mt-3 mb-3 md:mt-auto md:mb-auto">
            <div className="w-[230px] h-[460px] bg-[#1C1C3C] rounded-[20px]">
              <div className="flex h-full justify-center items-center text-white font-bold">
                APP
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterMenu />
    </div>
  );
}
