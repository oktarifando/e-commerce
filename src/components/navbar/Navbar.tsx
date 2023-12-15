import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/ecommerce logo.png";
import { redirect } from "next/navigation";

async function searchProducts(formData: FormData) {
  "use server";
  const searchQuery = formData.get("searchQuery")?.toString();
  if (searchQuery) {
    redirect(`/search?query=${searchQuery}`);
  }
}

export default function Navbar() {
  return (
    <div className="bg-base-100 ">
      <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-lg normal-case">
            <Image src={logo} alt="Ecommerce Logo" width={40} height={40} />
            <span className="ml-1">Ecommerce</span>
          </Link>
        </div>
        <div className="flex-none gap-2">
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
      </div>
    </div>
  );
}
