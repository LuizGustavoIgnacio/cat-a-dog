import React from 'react';

import Link from 'next/link';

export const FooterMenu: React.FC = () => {
  return (
    <div className="flex w-full h-[550px] bg-[#212528] z-50">
      <div className="flex flex-col w-full mx-[20px] mt-[30px] lg:mx-[150px] lg:mt-[90px]">
        <div className="flex flex-col md:flex-row h-4/6">
          <div className="flex w-3/6 items-baseline mb-8">
            <div className="flex items-center space-x-[25px]">
              <Link href="#">
                <img src="/images/instagram-icon.png" />
              </Link>
              <Link href="#">
                <img src="/images/twitter-icon.png" />
              </Link>
              <Link href="#">
                <img src="/images/facebook-icon.png" />
              </Link>
              <Link href="#">
                <img src="/images/tiktok-icon.png" />
              </Link>
            </div>
          </div>

          <div className="flex flex-row w-3/6 gap-16 md:gap-0">
            <div className="flex flex-col w-1/3 space-y-[25px] text-white text-sm md:text-base md:space-y-[14px]">
              <Link className="text-[#2451C2]" href="#">
                Recursos
              </Link>
              <Link href="#">Pet Perdido</Link>
              <Link href="#">Adoção</Link>
              <Link href="#">Verificação do Pet</Link>
            </div>

            <div className="flex flex-col w-1/3 space-y-[25px] text-white text-sm md:text-base md:space-y-[14px]">
              <Link className="text-[#2451C2]" href="#">
                ONG
              </Link>
              <Link href="#">Sobre</Link>
              <Link href="#">Voluntário</Link>
              <Link href="#">Apoio</Link>
            </div>

            <div className="flex flex-col w-1/3 space-y-[25px] text-white text-sm md:text-base md:space-y-[14px]">
              <Link className="text-[#2451C2]" href="#">
                Política
              </Link>
              <Link href="#">Termos</Link>
              <Link href="#">Privacidade</Link>
              <Link href="#">Configuração de Cookies</Link>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#2451C2] w-[375px] md:w-auto"></div>

        <div className="text-white font-bold text-[45px] w-full flex justify-center mt-[5px]">
          <Link href="/">SOS</Link>
        </div>
      </div>
    </div>
  );
};
