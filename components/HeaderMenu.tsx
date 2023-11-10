import React from 'react';

import Link from 'next/link';

export const HeaderMenu: React.FC = () => {
  return (
    <nav
      className="flex flex-col absolute space-y-3 pt-4 pb-4 z-50 right-0 left-0 bg-[#191A26]
      items-center
    text-white text-base
      md:relative md:bg-transparent md:flex-row md:justify-between md:pb-8 md:pt-8 md:space-y-0 md:top-auto md:right-auto md:left-auto"
    >
      <div></div>
      <Link href="/">Início</Link>
      <Link href="/pet-perdido">Pet Perdido</Link>
      <Link href="/adocao">Adoção</Link>
      <Link href="#">Cat a Dog</Link>
      <Link href="/sobre-nos">Sobre a SOS</Link>
      <Link href="/login">Login</Link>
      <Link href="#">Suporte</Link>
    </nav>
  );
};
