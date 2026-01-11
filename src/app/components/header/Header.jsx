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
      <ul className={`flex flex-col md:flex-row *:ml-8 font-medium uppercase *:tracking-[2%] *:text-nowrap  items-center text-center  md:text-start *:py-3`}>
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
      </ul>
    </>
  );
  return (
    <div className="w-screen sticky top-0 z-20">
      <header className={`border-accent border frame bg-background w-screen grid grid-cols-(--project-grid-cols) project-grid `}>
        <nav className="grid grid-cols-subgrid ">
          <div className=" h-25 flex items-center justify-between w-full">
            <Link href="/">
              <Image src="/assets/icon/Logo_main.svg" width={200} height={200} alt="logo" />
            </Link>

            <button className="cursor-pointer md:hidden -mr-2" onClick={() => setOpen((s) => !s)} aria-label="Open menu">
              <IoMenu size={40} />
            </button>

            <div className="hidden md:block">{links}</div>
          </div>
          {open && (
            <div className="grid grid-cols-(--project-grid-cols) project-grid md:hidden fixed inset-0 z-50 w-screen h-screen bg-black/90">
              <div className="flex w-full h-25 justify-end items-center -mb-30">
                <button className="cursor-pointer" onClick={() => setOpen((s) => !s)} aria-label="Close menu">
                  <IoClose size={40} />
                </button>
              </div>
              <div className="flex justify-center items-start my-50 h-screen">{links}</div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}
