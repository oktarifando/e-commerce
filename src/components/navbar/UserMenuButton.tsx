import Image from "next/image";
import userProfileIcon from "../../../public/user-profile-icon.png";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function UserMenuButton() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  const isLoggedIn = await isAuthenticated();

  if (isLoggedIn) {
    return (
      <div className="gap-x-10 text-lg">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <Image src={userProfileIcon} alt="Avatar" className="w-10 h-10" />
            <p className="-mt-3">{user?.given_name}</p>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <LogoutLink className="hover:shadow-2xl hover:text-primary">
            Logout
          </LogoutLink>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="navbar-user gap-x-7 text-lg">
        <LoginLink className="hover:shadow-2xl hover:text-primary">
          Masuk
        </LoginLink>
        <RegisterLink className="hover:shadow-2xl hover:text-primary">
          Daftar
        </RegisterLink>
      </div>
    );
  }
}
