'use client';
import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

export const HeaderMenu: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/images/vectors/header-responsive-close-icon.png"
                      width={30}
                      height={30}
                      alt="logo"
                    />
                  ) : (
                    <Image
                      src="/images/vectors/header-responsive-icon.png"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:mt-5">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center lg:justify-between md:flex">
                <li className="pb-2 mb-3 text-lg lg:text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-[#47CE95]  md:hover:text-[#47CE95] md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Inicio
                  </Link>
                </li>

                <li className="pb-2 mb-3 text-lg lg:text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#47CE95]  border-[#47CE95]  md:hover:text-[#47CE95] md:hover:bg-transparent">
                  <Link href="/pet-perdido" onClick={() => setNavbar(!navbar)}>
                    Pet Perdido
                  </Link>
                </li>

                <li className="pb-2 mb-3 text-lg lg:text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-[#47CE95]  md:hover:text-[#47CE95] md:hover:bg-transparent">
                  <Link href="/adocao" onClick={() => setNavbar(!navbar)}>
                    Adoção
                  </Link>
                </li>

                <li className="pb-2 mb-3 text-lg lg:text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-[#47CE95]  md:hover:text-[#47CE95] md:hover:bg-transparent">
                  <Link href="#" onClick={() => setNavbar(!navbar)}>
                    Cat a Dog
                  </Link>
                </li>

                <li className="pb-2 mb-3 text-lg lg:text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-[#47CE95]  md:hover:text-[#47CE95] md:hover:bg-transparent">
                  <Link href="/sobre-nos" onClick={() => setNavbar(!navbar)}>
                    Sobre a SOS
                  </Link>
                </li>

                <li className="pb-2 mb-3 text-lg lg:text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-[#47CE95]  md:hover:text-[#47CE95] md:hover:bg-transparent">
                  <Link href="/login" onClick={() => setNavbar(!navbar)}>
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
