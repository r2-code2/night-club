"use client";

import Image from "next/image";
import ActiveLink from "./ActiveLink";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" w-screen grid grid-cols-(--project-grid-cols) project-grid">
      <div className="h-screen  md:h-20 md:flex items-center md:justify-between ">
        <div>
          <Link href="/">
            <Image
              className=""
              src="/assets/Logo.png"
              width={200}
              height={200}
              alt="logo"
            />
          </Link>
        </div>
        <nav>
          <ul className="flex flex-col md:flex-row *:mx-4 font-medium uppercase *:tracking-[2%] *:text-nowrap md:justify-between justify-center items-center  text-center  md:text-start *:py-3 ">
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
        </nav>
      </div>
    </header>
  );
}
