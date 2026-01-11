"use client";

import Image from "next/image";
import ActiveLink from "./ActiveLink";
import Link from "next/link";

import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  const links = (
    <ul className="flex flex-col md:flex-row font-medium uppercase items-center text-center md:text-start space-y-8 md:space-y-0 md:space-x-8">
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
  );

  return (
    <div className="w-screen sticky top-0 z-20">
      <motion.header className="border-accent border bg-background w-screen grid grid-cols-(--project-grid-cols) project-grid">
        <nav className="grid grid-cols-subgrid">
          <div className="h-25 flex items-center justify-between w-full">
            <Link href="/">
              <Image
                src="/assets/icon/Logo_main.svg"
                width={200}
                height={200}
                alt="logo"
              />
            </Link>
            <AnimatePresence>
              {!open && (
                <motion.button
                  className="cursor-pointer md:hidden -mr-2"
                  onClick={() => setOpen(true)}
                  aria-label="Open menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}>
                  <IoMenu size={40} />
                </motion.button>
              )}
            </AnimatePresence>

            <div className="hidden md:block">{links}</div>
          </div>
        </nav>
      </motion.header>

      {/* mobil */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 w-screen h-screen bg-black/90 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <div className="flex w-full h-25 justify-end items-center p-4">
              <button
                className="cursor-pointer"
                onClick={() => setOpen(false)}
                aria-label="Close menu">
                <IoClose size={40} />
              </button>
            </div>

            <div className="flex flex-1 justify-center items-start mt-40">
              {links}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
