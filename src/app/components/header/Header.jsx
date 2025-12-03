"use client";

import Image from "next/image";
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <ul className={`flex flex-col md:flex-row *:mx-4 font-medium uppercase *:tracking-[2%] *:text-nowrap  items-center text-center  md:text-start *:py-3`}>
        <li>
          <ActiveLink href="/">home</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/blog">blog</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/book">book table</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/contact">contact us</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/login">login</ActiveLink>
        </li>
      </ul>
    </>
  );
  return (
    <header className={` w-screen grid grid-cols-(--project-grid-cols) project-grid`}>
      <nav className="grid grid-cols-subgrid">
        <div className=" h-25 flex items-center justify-between w-full">
          <Link href="/">
            <Image
              src="/assets/Logo.png"
              width={200}
              height={200}
              alt="logo"
            />
          </Link>

          <button
            className="flex-0 cursor-pointer md:hidden"
            onClick={() => setOpen((s) => !s)}>
            <IoMenu size={40} />
          </button>
          <div className="hidden md:block">{links}</div>
        </div>
        {open && (
          <div className="grid grid-cols-(--project-grid-cols) project-grid md:hidden fixed top-0 left-0 w-screen  h-screen bg-black ">
            <div
              className="flex w-full h-25 justify-end items-center p-2 cursor-pointer "
              onClick={() => setOpen((s) => !s)}>
              <IoClose size={40} />
            </div>
            <div>
            {links}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
