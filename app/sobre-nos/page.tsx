import { CarouselAboutus } from '~/components/CarouselAboutus';
import { FooterMenu } from '~/components/FooterMenu';
import { HeaderMenu } from '~/components/HeaderMenu';

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="md:mx-[10px] lg:mx-[100px] 2xl:mx-[150px]">
        <HeaderMenu />

        <div className="flex flex-col md:flex-row xl:h-[420px] text-center mb-4">
          <div className="lg:w-1/2 text-white pt-20 px-8">
            <h1 className="font-bold text-2xl md:text-3xl xl:text-[32px] mb-6">
              Sobre nós
            </h1>
            <p className="text-base md:text-xl mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-base md:text-xl">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="w-1/2"></div>
        </div>

        <div className="xl:h-[600px] bg-[rgba(217,217,217,0.2)] rounded-xl mb-10 py-[100px] px-[80px]">
          <div className="flex flex-col md:flex-row h-full space-x-3.5">
            <div className="flex flex-col md:w-1/2 text-white space-y-[20px] mb-5">
              <h1 className="font-bold text-2xl md:text-[32px] mb-5">
                Objetivos da SOS
              </h1>
              <p className="text-base md:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p className="text-base md:text-2xl">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="flex min-h-[250px] min-w-[250px] md:w-1/2 bg-gray-600"></div>
          </div>
        </div>

        <div className="w-full h-[300px] mb-28 relative">
          <div className="flex flex-col">
            <div className="flex justify-center text-white mb-6">
              <h2 className="font-bold text-2xl md:text-[32px]">Parceiros</h2>
            </div>

            <div className="flex justify-center">
              <CarouselAboutus />
            </div>
          </div>
        </div>
      </div>

      <FooterMenu />
    </div>
  );
}
