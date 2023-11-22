import Link from 'next/link';
import { UserMenu } from '~/components/UserMenu';

export default function Page() {
  return (
    <div className="flex">
      <UserMenu />

      <div className="bg-[#23222F] w-full h-[100vh] py-[45px] px-[40px]">
        <div className="w-[815px] h-[240px] bg-[#313040] rounded-[15px] overflow-hidden">
          <div className="top-0 left-0 right-0 h-[50px] bg-[rgba(78,77,97,0.2)] py-[10px] px-8">
            <h1 className="font-bold text-white text-xl">Acessos Rápidos</h1>
          </div>

          <div className="flex py-6 px-8 space-x-3">
            <div className="w-[125px] h-[125px] bg-[#4E4D61] rounded-[15px] py-3">
              <Link href="#" className="text-[13px] text-white">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="/images/vectors/fast-acess-adotante.png"
                    className="w-1/2"
                  />
                  Procurar Adotante
                </div>
              </Link>
            </div>

            <div className="w-[125px] h-[125px] bg-[#4E4D61] rounded-[15px] py-3">
              <Link href="#" className="text-[13px] text-white">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="/images/vectors/fast-acess-indicadores.png"
                    className="w-1/2"
                  />
                  Gerar Gráficos
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
