import React from 'react';

import Link from 'next/link';

export const RequisitionReg: React.FC = () => {
  return (
    <div className="w-[500px] h-[60px]">
      <div className="flex h-full items-center bg-[#4E4D61] rounded-[5px] ">
        <div className="w-9/12 flex text-white space-x-5 px-5 py-3">
          <p className="min-w-[150px] max-w-[150px] border-r-[1px] capitalize">
            rosinha
          </p>
          <p className="min-w-[135px] max-w-[135px]">09 - 04 - 2023</p>
        </div>

        <div className="w-3/12">
          <div className="flex justify-center items-center">
            <Link href="/requisicao">
              <button className="uppercase w-[100px] h-[50px] bg-[#3E3E3E] rounded-[15px] text-white font-bold">
                ver
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
