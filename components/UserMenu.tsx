import React from 'react';

import Link from 'next/link';

export const UserMenu: React.FC = () => {
  return (
    <section className="w-[350px] h-[100vh] bg-[#0D0D1A] border-r-[6px] border-[#737180] py-11 pl-9 relative">
      <div className="flex flex-col text-white text-center items-center">
        <h1 className="font-bold text-2xl mb-5">Bem vindo(a) a SOS!</h1>

        <div className="h-[150px] w-[150px] rounded-full overflow-hidden object-cover border border-[#00F8BC] mb-[10px]">
          <img src="/images/animals/gato.png" id="user-img" />
        </div>

        <div className="flex space-x-1.5 text-[20px] font-bold capitalize">
          <p id="user_name">nome</p>
          <p id="user_lastname">sobrenome</p>
        </div>

        <p id="user-mail" className="text-[#008565] mb-5">
          usermail@mail.com
        </p>

        <div className="w-[225px] h-[45px] bg-[#1E1E3B] rounded-[15px] px-9 py-2 mb-6">
          <div className="flex justify-between h-[30px]">
            <img src="/images/vectors/home-user.png" />
            <img src="/images/vectors/config-user.png" />
            <img src="/images/vectors/help-user.png" />
          </div>
        </div>

        <div className="w-full h-[200px] pl-11">
          <div className="flex flex-col space-y-6 font-bold text-[#737180] text-xl">
            <Link href="/cadastrar-completo">
              <div className="flex space-x-3">
                <div className="w-1/6">
                  <img src="/images/vectors/menu-user-cadastrar.png" />
                </div>
                CADASTRAR
              </div>
            </Link>

            <Link href="/indicadores">
              <div className="flex space-x-3">
                <div className="w-1/6">
                  <img src="/images/vectors/menu-user-indicadores.png" />
                </div>
                INDICADORES
              </div>
            </Link>

            <Link href="/registros">
              <div className="flex space-x-3">
                <div className="w-1/6">
                  <img src="/images/vectors/menu-user-registros.png" />
                </div>
                REGISTROS
              </div>
            </Link>

            <Link href="/aprovacoes">
              <div className="flex space-x-3">
                <div className="w-1/6">
                  <img src="/images/vectors/menu-user-aprovacoes.png" />
                </div>
                APROVAÇÕES
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
