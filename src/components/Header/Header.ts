import { useEffect, useState } from "../../lib";
import { User } from "../../types/User.type";
import { clearLS, getUserFromLS } from "../../utils/util";

export default function Header() {
  const [user, setUser] = useState<User>(getUserFromLS());

  useEffect(() => {
    const btnLogout = document.querySelector(".btn-logout");
    if (btnLogout) {
      btnLogout.addEventListener("click", () => {
        clearLS();
        setUser(null);
      });
    }
  });
  return `<div class=" px-3 py-6">
  <div
    class="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between"
  >
    <a href="/"
      ><div
        class="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent"
      >
        <svg
          class="mr-1 h-10 w-10 stroke-cyan-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M0 0h24v24H0z" stroke="none"></path>
          <rect x="3" y="12" width="6" height="8" rx="1"></rect>
          <rect x="9" y="8" width="6" height="12" rx="1"></rect>
          <rect x="15" y="4" width="6" height="16" rx="1"></rect>
          <path d="M4 20h14"></path></svg
        >Viet Blog
      </div></a
    >
    <nav>
      ${
        user
          ? `<div class="flex items-center">
              <div>${user.email}</div>
              ${
                user.role === "admin"
                  ? `<a  href="admin/products"  class="text-white font-medium rounded-lg text-sm ml-2 hover:text-blue-700">Admin</a>`
                  : ""
              }
              <button type="button" class="text-white btn-logout font-medium rounded-lg text-sm ml-2 hover:text-blue-700 ">Đăng xuất</button>
            </div>`
          : `<ul class="flex items-center gap-x-3 font-medium text-gray-200">
        <li class="hover:text-white">
          <a href="/signup">
          <button type="button" class="text-white border border-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Sign Up</button>
          </a>
        </li>
        <li class="hover:text-white">
        <a href="/login">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Log In</button>
        </a>
      </li>
      </ul>`
      } 
    </nav>
  </div>
</div>
`;
}
