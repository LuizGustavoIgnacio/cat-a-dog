import React from 'react';

import Link from 'next/link';

export const HeaderMenu: React.FC = () => {
  return (
    <nav className="p-8 flex justify-between text-white text-base">
      <Link href="/">Pet Perdido</Link>
      <Link href="#">Adoção</Link>
      <Link href="#">Cat a Dog</Link>
      <Link href="/sobre-nos">Sobre a SOS</Link>
      <Link href="#">Login</Link>
      <Link href="#">Suporte</Link>
    </nav>
  );
};
