import { signup } from "../../api/auth.api";
import { router, useEffect, useState } from "../../lib";
import { isAxiosError, setUserToLS } from "../../utils/util";

export default function SignUp() {
  const [error, setError] = useState("");

  useEffect(() => {
    const form = document.querySelector("form");
    const email = document.querySelector(
      'input[name="email"]'
    ) as HTMLInputElement;
    const password = document.querySelector(
      'input[name="password"]'
    ) as HTMLInputElement;

    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const body = {
          email: email.value,
          password: password.value,
          role: "user",
        };
        try {
          const res = await signup(body);
          const user = res.data.user;
          setUserToLS(user);
          router.navigate("/");
        } catch (error: unknown) {
          if (isAxiosError(error)) {
            const errorMessage = error.response?.data || error.message;
            setError(errorMessage);
          }
        }
      });
    }
  });

  return `<div class=" bg-slate-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-white">
                <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
                Flowbite    
            </a>
            <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-slate-800 border-slate-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Create and account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                            <input type="email" name="email" id="email" class=" border border-slate-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-slate-700 border-slate-600 placeholder-slate-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required="">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class=" border border-slate-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-slate-700 border-slate-600 placeholder-slate-400 text-white focus:ring-blue-500 focus:border-blue-500" required="">
                        </div>
                        <p class="text-red-400">${error}</p>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-slate-300 rounded" focus:ring-3 focus:ring-primary-300 bg-slate-700 border-slate-600 focus:ring-primary-600 ring-offset-slate-800" required="">
                            </div>
                            <div class="ml-3 text-sm">
                            <label for="terms" class="font-light text-slate-300">I accept the <a class="font-medium text-primary-600 hover:underline text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" class="w-full bg-slate-900 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Create an account</button>
                        <p class="text-sm font-light  text-slate-400">
                            Already have an account? <a href="/login" class="font-medium text-primary-600 hover:underline text-primary-500">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
  </div>
    `;
}
