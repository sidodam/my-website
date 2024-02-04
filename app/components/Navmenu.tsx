"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import useLangStore from "./langStore";
import Image from "next/image";

const Navmenu = () => {
  const languages = ["en", "es"];
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const lang = useLangStore((state) => ({
    currentLang: state.currentLang,
    setCurrentLang: state.setCurrentLang,
  }));

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    lang.setCurrentLang(language);
  };

  const translations = {
    en: "CONTACT",
    es: "CONTACTO",
  };

  const pdfUrls = {
    en: "/cv.pdf",
    es: "/curriculum.pdf",
  };

  return (
    <nav className="p-4  bg-[#F7F7F7] sticky top-0 z-50 ">
      <ul className=" flex md:justify-between justify-center  lg:mx-32 items-baseline ">
        <div className="hidden md:block">
          <Logo></Logo>
        </div>

        <div className=" flex flex-col md:flex-row gap-2 md:gap-10 items-center">
          <li className=" text-lg cursor-pointer">
            <Link
              href={pdfUrls[lang.currentLang]}
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
              href="mailto:sidokouki1@gmail.com"
              className="text-[#11282D] hover:text-[#79CD7D] text-xl relative group"
            >
              {translations[lang.currentLang]}
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#11282D] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </li>

          <div className="py-1" role="none">
            {languages.map((language) => (
              <button
                key={language}
                onClick={() => changeLanguage(language)}
                className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-transform ${
                  currentLanguage === language
                    ? " border-[#11282D] transform scale-110 grayscale-0"
                    : "grayscale"
                }`}
                role="menuitem"
              >
                <Image
                  src={`/${language}.png`}
                  alt={`Flag for ${language}`}
                  width={24} // Set the desired width
                  height={16} // Set the desired height
                  className="w-6 h-4 mr-1"
                />
              </button>
            ))}
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navmenu;
