import { CarouselHome } from '~/components/CarouselHome';
import { FooterMenu } from '~/components/FooterMenu';
import { HeaderMenu } from '~/components/HeaderMenu';

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="mx-[150px]">
        <HeaderMenu />

        <div className="flex justify-end w-4/6">
          <div className="flex flex-col justify-end h-[350px] absolute">
            <div className="w-[150px] h-[150px] bg-green-800 rounded-full blur-[120px] absolute"></div>
          </div>
        </div>

        <div className="text-white font-bold flex flex-col items-center">
          <span className="text-7xl">SOS</span>
          <span className="text-4xl">Animais</span>
        </div>

        <div className="flex justify-end w-1/5">
          <div className="flex flex-col justify-end h-[450px] absolute">
            <div className="w-[80px] h-[80px] bg-blue-700 rounded-full blur-[130px] absolute"></div>
          </div>
        </div>

        <CarouselHome />

        <div className="flex flex-col w-full h-[570px] rounded-[20px] z-40 bg-[#10101BFA]/90 mb-12 relative">
          <div className="text-white font-bold w-full mt-[75px] capitalize">
            <h1 className="text-center text-4xl">nossa missão</h1>
          </div>

          <div className="flex m-[44px] h-full">
            <div className="w-2/4 flex justify-center items-center">
              <p className="text-white font-normal text-2xl m-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempus consequat laoreet. Quisque non metus neque. Sed lacinia
                ipsum sem, sit amet lacinia neque pellentesque ac. Aenean ac
                molestie diam, eget pharetra diam. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Nullam ex mi, pharetra non lacinia id, ultricies ac sem.
              </p>
            </div>

            <div className="w-2/4 flex justify-center overflow-hidden items-center">
              <div className="rounded-full  h-[300px] w-[300px] shadow-[0_0_4.2em_0_rgba(13,13,22)]">
                <img src="/images/animals/gato.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterMenu />
    </div>
  );
}
