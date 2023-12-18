import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/ecommerce logo.png";
import { redirect } from "next/navigation";
import UserMenuButton from "./UserMenuButton";

async function searchProducts(formData: FormData) {
  "use server";
  const searchQuery = formData.get("searchQuery")?.toString();
  if (searchQuery) {
    redirect(`/search?query=${searchQuery}`);
  }
}

export default async function Navbar() {

  return (
    <div className="bg-base-100 ">
      <div className="navbar max-w-7xl m-auto flex flex-col sm:flex-row gap-2 justify-between">
        <div className="navbar-link gap-x-8 flex-col sm:flex-row text-lg">
          <Link href="/" className="btn btn-ghost text-lg normal-case">
            <Image src={logo} alt="Ecommerce Logo" width={40} height={40} />
            <span className="ml-1">Ecommerce</span>
          </Link>
          <Link href="/women" className="hover:shadow-2xl hover:text-primary">
            Wanita
          </Link>
          <Link href="/men" className="hover:shadow-2xl hover:text-primary">
            Pria
          </Link>
          <Link href="/child" className="hover:shadow-2xl hover:text-primary">
            Anak
          </Link>
        </div>

        <div className="flex-none gap-2 navbar-center">
          <form action={searchProducts}>
            <div className="form-control">
              <input
                name="searchQuery"
                type="text"
                placeholder="Cari Pakaian Disini"
                className="input input-bordered w-full min-w-[100px]"
              />
            </div>
          </form>
        </div>

        <UserMenuButton />
      </div>
    </div>
  );
}
