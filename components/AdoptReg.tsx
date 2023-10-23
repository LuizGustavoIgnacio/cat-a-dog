import React from 'react';

import Link from 'next/link';

export const AdoptReg: React.FC = () => {
  return (
    <div className="w-[800px] h-[60px]">
      <div className="flex h-full items-center bg-[#4E4D61] rounded-[5px] ">
        <div className="w-9/12 flex text-white space-x-5 px-5 py-3">
          <p className="min-w-[250px] max-w-[250px] border-r-[1px]">
            Fernando Cruzes Montanha Jato
          </p>
          <p className="min-w-[135px] max-w-[135px] border-r-[1px] capitalize">
            (99) 99999-9999
          </p>
          <p className="min-w-[135px] max-w-[135px] capitalize">
            999.999.999-99
          </p>
        </div>

        <div className="w-3/12">
          <div className="flex justify-center items-center">
            <Link href="/editar-reg-adotante">
              <div className="w-10 h-10 bg-[#00F8BC] rounded-full"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
