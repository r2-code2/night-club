"use client";

import Image from "next/image";
import ActiveLink from "./ActiveLink";
import Link from "next/link";

export default function Header() {
  return (
    <header className="/*grid grid-cols-(--project-grid-cols) col-full/*">
      <nav className="col-content">
        <ul className="justify-between flex items-center ">
          <li>
            <Link href="/">
              <Image
                src="/assets/Logo.png"
                width={200}
                height={200}
                alt="logo"
              />
            </Link>
          </li>
          <div className="flex *:mx-4 font-medium uppercase *:tracking-[2%] *:text-nowrap">
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
          </div>
        </ul>
      </nav>
    </header>
  );
}
