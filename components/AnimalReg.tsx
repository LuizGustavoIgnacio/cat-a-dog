import React from 'react';

import Link from 'next/link';

export const AnimalReg: React.FC = () => {
  return (
    <div className="w-[800px] h-[60px]">
      <div className="flex h-full items-center bg-[#4E4D61] rounded-[5px] ">
        <div className="w-9/12 flex text-white space-x-5 px-5 py-3">
          <p className="min-w-[125px] border-r-[1px]">9999999999999</p>
          <p className="min-w-[100px] border-r-[1px] capitalize">Canídeo</p>
          <p className="min-w-[100px] border-r-[1px] capitalize">Rottweiler</p>
          <p className="min-w-[250px] capitalize">
            Fernando Cruzes Montanha Jato
          </p>
        </div>

        <div className="w-3/12">
          <div className="flex justify-center items-center">
            <Link href="/editar-reg-animal">
              <div className="w-10 h-10 bg-[#00F8BC] rounded-full"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
