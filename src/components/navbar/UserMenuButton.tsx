"use client";

import Image from "next/image";
import userProfileIcon from "../../../public/user-profile-icon.png";
import { signIn, signOut, useSession } from "next-auth/react";

export default function UserMenuButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="gap-x-10 text-lg">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <Image
              src={userProfileIcon}
              alt="Avatar"
              className="w-10 h-10 -mt-3"
            />
            <p className="-mt-4">{session.user?.name}</p>
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
          <button
            onClick={() => signOut()}
            className="hover:shadow-2xl hover:text-primary"
          >
            Keluar
          </button>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="navbar-user gap-x-7 text-lg">
        <button
          onClick={() => signIn()}
          className="hover:shadow-2xl hover:text-primary"
        >
          Masuk
        </button>
      </div>
    );
  }
}
