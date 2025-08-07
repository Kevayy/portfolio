"use client";

import { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full text-white px-4 md:px-24 py-4 md:py-6 z-50 shadow-lg bg-black ">
      <div className="flex justify-between items-center">
        <div className="flex flex-1 justify-start items-center space-x-2 md:space-x-4">
          <Image
            src="/assets/logo.svg"
            alt="Kevin van Bommel Logo"
            width={180}
            height={56}
            className="drop-shadow-lg"
          />
        </div>
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span
            className={cn(
              "block w-6 h-0.5 bg-white mb-1 transition",
              menuOpen && "rotate-45 translate-y-2"
            )}
          ></span>
          <span
            className={cn(
              "block w-6 h-0.5 bg-white mb-1 transition",
              menuOpen && "opacity-0"
            )}
          ></span>
          <span
            className={cn(
              "block w-6 h-0.5 bg-white transition",
              menuOpen && "-rotate-45 -translate-y-2"
            )}
          ></span>
        </button>

        <ul className="hidden md:flex space-x-12 items-center text-base font-semibold uppercase tracking-wide">
          <li>
            <Link href="#about" className="hover:text-purple-300 transition">
              Over mij
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-purple-300 transition">
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#education"
              className="hover:text-purple-300 transition"
            >
              Opleiding
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="hover:text-purple-300 transition"
            >
              Werkervaring
            </Link>
          </li>
        </ul>
        <Link
          href="#contact"
          className="hidden md:block ml-12 px-6 py-2 rounded-md text-white font-bold uppercase text-base bg-gradient-to-r from-purple-600 to-blue-500 hover:brightness-110 shadow transition"
        >
          Contact
        </Link>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gradient-to-br from-purple-900 via-blue-900 to-blue-700 rounded-lg shadow-lg p-4 transition">
          <ul className="flex flex-col space-y-4 text-lg font-semibold uppercase tracking-wide transition">
            <li>
              <Link
                href="#about"
                className="hover:text-purple-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                Over mij
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="hover:text-purple-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#education"
                className="hover:text-purple-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                Opleiding
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className="hover:text-purple-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                Werkervaring
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="mt-2 px-6 py-2 rounded-md text-white font-bold uppercase text-base bg-gradient-to-r from-purple-600 to-blue-500 hover:brightness-110 shadow transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
