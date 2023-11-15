'use client'
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from "next/image";

const Login = () => {
  // const { data , setData } = useContext(ToggleContext)
  const { data } = useSession()
  return (
    <dialog id="login_modal_1" className="modal">
      <form method="dialog" className="modal-box">
        {/* <LoginMethods desktop={true}></LoginMethods> */}
        <div className="w-full h-full py-2">
          <h1 className="text-base md:text-lg font-bold text-black">
            Sign up or Log in
          </h1>
          <div className="mt-4">
            <div className="flex flex-col w-full border-opacity-50">
              {
                data?.user ?
                  <button onClick={() => signOut()} className="outline-none p-1 bg-gray-300">
                    Logout
                  </button>
                  : <button
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                    className="w-full py-1 outline-none border rounded text-sm md:text-base font-medium text-slate-500 flex items-center justify-center gap-2">
                    <Image
                      src="https://i.ibb.co/5x1KjyG/googleicon-removebg-preview.png"
                      alt="googleicon"
                      width={15}
                      height={15}></Image>
                    Continue With Google
                  </button>
              }
              <div className="divider text-sm md:text-base text-slate-500">
                OR
              </div>
              <button
                className="w-full py-1 focus:outline-none border rounded text-sm md:text-base font-medium text-slate-500 flex items-center justify-center gap-2">
                <Image
                  src="https://i.ibb.co/JjydDG7/email-removebg-preview.png"
                  alt="googleicon"
                  width={15}
                  height={15}></Image>
                Continue With Email
              </button>
            </div>
          </div>
        </div>
        {/* Button */}

        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      {/* <DesktopEmailLogin /> */}
    </dialog>
  );
};

export default Login;