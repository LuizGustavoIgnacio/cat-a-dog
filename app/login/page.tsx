import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex w-full h-[100vh] justify-center items-center relative">
      <div className="w-[790px] h-[540px] bg-[#3E3F43] rounded-xl relative overflow-hidden -z-0">
        <div className="flex flex-col px-6 py-5 md:px-24 md:py-10 text-white">
          <h1 className="text-center font-bold text-2xl md:text-3xl mb-11">
            Vamos ajudar nossos aumiguinhos!
          </h1>

          <form action="#">
            <div className="flex flex-col font-bold text-xl">
              <div className="flex flex-col mb-8">
                <label htmlFor="user-mail" className="uppercase mb-3">
                  E-mail <span className="text-[#F10808]">*</span>
                </label>

                <input
                  type="text"
                  id="user-mail"
                  name="user-mail"
                  placeholder="exemplo@email.com"
                  className="bg-[#1C1C26] h-12 rounded-xl px-3 font-normal text-base md:text-xl placeholder:text-base placeholder:md:text-xl"
                />
              </div>

              <div className="flex flex-col mb-3">
                <label htmlFor="user-passwd" className="uppercase mb-3">
                  Senha <span className="text-[#F10808]">*</span>
                </label>

                <input
                  type="password"
                  id="user-passwd"
                  name="user-passwd"
                  className="bg-[#1C1C26] h-12 rounded-xl px-3 font-normal text-base md:text-xl"
                />
              </div>

              <Link
                href="#"
                className="font-normal underline text-base md:text-xl text-[#2B74FF] mb-5 md:mb-6 md:hover:underline md:no-underline"
              >
                Esqueceu sua senha?
              </Link>

              <input
                type="submit"
                className="text-white rounded-xl font-normal bg-[#2F4F8F] h-[75px] text-3xl hover:border hover:border-white w-full"
                value="Entrar"
              />
            </div>
          </form>
        </div>

        <div className="w-[100px] md:w-[229.85px] h-[838.28px] origin-top-left rotate-[25deg] bg-[rgba(29,31,40,0.15)] absolute -top-[200px] right-20 -z-10"></div>
      </div>

      <div className="h-[100px] w-[100px] absolute left-0 top-0 m-6 rounded-full bg-[#3E3E42]">
        <div className="flex justify-center items-center h-full">
          <Link href="/" className="w-1/4">
            <img src="/images/vectors/arrow-back.png" className="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
