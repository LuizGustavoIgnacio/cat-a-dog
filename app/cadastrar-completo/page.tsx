import { FormRegister } from '~/components/FormRegister';
import { UserMenu } from '~/components/UserMenu';

export default function Page() {
  return (
    <div className="flex">
      <UserMenu />

      <div className="bg-[#23222F] w-full h-full py-[45px] px-[40px]">
        <div className="flex flex-col space-y-24 items-center">
          <FormRegister />

          <button
            type="submit"
            className="w-[225px] h-16 bg-[rgba(0,249,189,0.35)] uppercase rounded-3xl hover:bg-[rgba(40,100,90,0.99)] text-white font-bold"
            form="full_register_adopt_animal"
          >
            cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}
