"use client";
import Link from "next/link";

import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "@next/font/local";
import Logo from "./Logo";

const openSansExtraBold = localFont({
  src: "../public/Monoton-Regular.ttf",
});

const Navmenu = () => {
  return (
    <nav className="p-4 bg-[#F7F7F7] sticky top-0 z-50">
      <ul className=" flex gap-4 justify-between  mx-32">
        <Logo></Logo>
        <div className="flex gap-20">
          <li className=" text-lg cursor-pointer">
            <Link
              href="/page"
              className="text-[#11282D] hover:text-[#388394] text-xl relative group"
            >
              CV
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#11282D] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </li>
          <li className=" text-lg">
            <Link
              href="/page"
              className="text-[#11282D] hover:text-[#388394] text-xl relative group"
            >
              Github
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#11282D] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </li>
          <li className=" text-lg">
            <Link
              href="/page"
              className="text-[#11282D] hover:text-[#79CD7D] text-xl relative group"
            >
              Contact
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#11282D] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navmenu;
