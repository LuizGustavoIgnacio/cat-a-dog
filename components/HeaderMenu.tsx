import React from 'react';

import Link from 'next/link';

export const HeaderMenu: React.FC = () => {
  return (
    <nav className="flex flex-col pt-4 pb-4 space-y-3.5 items-center text-white text-base bg-white/5 md:bg-transparent md:flex-row md:justify-between md:pb-8 md:pt-8">
      <Link href="/pet-perdido">Pet Perdido</Link>
      <Link href="/adocao">Adoção</Link>
      <Link href="#">Cat a Dog</Link>
      <Link href="/sobre-nos">Sobre a SOS</Link>
      <Link href="/login">Login</Link>
      <Link href="#">Suporte</Link>
    </nav>
  );
};
