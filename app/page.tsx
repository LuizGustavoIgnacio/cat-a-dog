import { CarouselHome } from '~/components/CarouselHome';
import { FooterMenu } from '~/components/FooterMenu';
import { HeaderMenu } from '~/components/HeaderMenu';

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="md:mx-[10px] lg:mx-[150px]">
        <HeaderMenu />

        <div className="flex justify-end w-4/6">
          <div className="flex flex-col justify-end h-[250px] md:h-[350px] absolute">
            <div className="w-[60px] h-[60px] blur-[40px] md:w-[170px] md:h-[170px] md:blur-[120px] bg-green-800 rounded-full  absolute"></div>
          </div>
        </div>

        <div className="text-white font-bold flex flex-col items-center mt-5">
          <span className="text-7xl">SOS</span>
          <span className="text-4xl">Animais</span>
        </div>

        <div className="flex justify-end w-1/5">
          <div className="flex flex-col justify-end h-[250px] md:h-[550px] absolute">
            <div className="w-[60px] h-[60px] blur-[70px] md:w-[100px] md:h-[100px] md:blur-[130px] bg-blue-700 rounded-full absolute"></div>
          </div>
        </div>

        <CarouselHome />

        <div className="flex flex-col md:w-full rounded-[20px] z-40 bg-[#10101BFA]/90 mb-12 relative">
          <div className="text-white font-bold w-full mt-[75px] capitalize">
            <h1 className="text-center text-3xl md:text-4xl">nossa missão</h1>
          </div>

          <div className="flex flex-col lg:flex-row m-[44px] h-full">
            <div className="lg:w-2/4 flex justify-center items-center">
              <p className="text-white font-normal text-base md:text-lg lg:text-2xl m-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempus consequat laoreet. Quisque non metus neque. Sed lacinia
                ipsum sem, sit amet lacinia neque pellentesque ac. Aenean ac
                molestie diam, eget pharetra diam. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Nullam ex mi, pharetra non lacinia id, ultricies ac sem.
              </p>
            </div>

            <div className="lg:w-2/4 flex justify-center overflow-hidden items-center">
              <div className="rounded-full h-[150px] w-[150px] md:h-[300px] md:w-[300px] shadow-[0_0_4.2em_0_rgba(13,13,22)]">
                <img src="/images/animals/gato.png" alt="gatinho" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterMenu />
    </div>
  );
}
