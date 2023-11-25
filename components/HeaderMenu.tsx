'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

export const HeaderMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="top-0 right-0 left-0 h-[50px] md:h-36">
      <span className="md:hidden">
        <Image
          alt="toggle-menu"
          className="m-5 w-[55px]"
          width="60"
          height="60"
          src="/images/vectors/header-responsive-icon.png"
          onClick={handleNav}
        />
      </span>

      <nav
        className="navLink flex flex-col absolute space-y-3 pt-4 pb-4 z-50 right-0 left-0 bg-[#191A26] opacity-0
        items-center
      text-white text-base
        md:relative md:bg-transparent md:flex-row md:justify-between md:pb-8 md:pt-8 md:space-y-0 md:top-auto md:right-auto md:left-auto md:opacity-100"
      >
        <Link href="/">Início</Link>
        <Link href="/pet-perdido">Pet Perdido</Link>
        <Link href="/adocao">Adoção</Link>
        <Link href="#">Cat a Dog</Link>
        <Link href="/sobre-nos">Sobre a SOS</Link>
        <Link href="/login">Login</Link>
        <Link href="#">Suporte</Link>
      </nav>
    </div>
  );
};
