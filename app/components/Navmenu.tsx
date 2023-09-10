"use client";
import Link from "next/link";
import Logo from "./Logo";

const Navmenu = () => {
  return (
    <nav className="p-4  bg-[#F7F7F7] sticky top-0 z-50 ">
      <ul className=" flex md:justify-between justify-around  md:mx-32">
        <div className="md:block hidden">
          <Logo></Logo>
        </div>

        <div className="flex gap-20 items-center ">
          <li className=" text-lg cursor-pointer">
            <Link
              href="/cv.pdf"
              target="_blank"
              download="cv"
              className="text-[#11282D] hover:text-[#388394] text-xl relative group"
            >
              CV
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#11282D] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </li>
          <li className=" text-lg">
            <Link
              href="https://github.com/sidodam"
              passHref={true}
              target="_blank"
              className="text-[#11282D] hover:text-[#388394] text-xl relative group"
            >
              Github
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#11282D] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </li>
          <li className=" text-lg">
            <Link
              href="mailto:test@email.com"
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
