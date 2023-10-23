import { RequisitionReg } from '~/components/RequisitionReg';
import { UserMenu } from '~/components/UserMenu';

export default function Page() {
  return (
    <div className="flex">
      <UserMenu />

      <div className="bg-[#23222F] w-full h-[100vh] py-[45px] px-[40px]">
        <div className="flex flex-col space-y-10">
          <h1 className="font-bold text-white uppercase text-2xl">
            aprovações para animais perdidos
          </h1>

          <div className="flex flex-col space-y-3">
            <RequisitionReg />
            <RequisitionReg />
            <RequisitionReg />
            <RequisitionReg />
            <RequisitionReg />
            <RequisitionReg />
          </div>
        </div>
      </div>
    </div>
  );
}
