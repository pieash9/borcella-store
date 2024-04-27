"use client";

import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const { user } = useUser();
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const cart = useCart();
  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex justify-between items-center gap-2 bg-white max-sm:px-2">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </Link>

      <div className="flex items-center gap-4 text-base-bold max-lg:hidden">
        <Link className="hover:text-red-1" href="/">
          Home
        </Link>
        <Link className="hover:text-red-1" href={user ? "/orders" : "/sign-in"}>
          Orders
        </Link>
        <Link
          className="hover:text-red-1"
          href={user ? "/wishlist" : "/sign-in"}
        >
          Wishlist
        </Link>
      </div>

      <div className=" flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
        <input
          className="outline-none max-sm:max-w-[120px]"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={query === "" || query.trim().length === 0}
          onClick={() => router.push(`/search/${query}`)}
        >
          <Search className="cursor-pointer size-4 hover:text-red-1" />
        </button>
      </div>

      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
        >
          <ShoppingCart />
          <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
        </Link>

        {user && (
          <Menu
            className="cursor-pointer lg:hidden"
            onClick={() => setDropdownMenu(!dropdownMenu)}
          />
        )}

        {user && dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden w-40">
            <Link className="hover:text-red-1" href="/">
              Home
            </Link>
            <Link
              className="hover:text-red-1"
              href={user ? "/orders" : "/sign-in"}
            >
              Orders
            </Link>
            <Link
              className="hover:text-red-1"
              href={user ? "/wishlist" : "/sign-in"}
            >
              Wishlist
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white "
            >
              <ShoppingCart />
              <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
            </Link>
          </div>
        )}

        {user ? (
          <UserButton />
        ) : (
          <Link href="/sign-in">
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
