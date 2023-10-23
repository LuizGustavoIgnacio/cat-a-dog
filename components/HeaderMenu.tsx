import React from 'react';

import Link from 'next/link';

export const HeaderMenu: React.FC = () => {
  return (
    <nav className="pt-8 pb-8 flex justify-between text-white text-base">
      <Link href="/pet-perdido">Pet Perdido</Link>
      <Link href="/adocao">Adoção</Link>
      <Link href="#">Cat a Dog</Link>
      <Link href="/sobre-nos">Sobre a SOS</Link>
      <Link href="/login">Login</Link>
      <Link href="#">Suporte</Link>
    </nav>
  );
};
