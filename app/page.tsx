"use client"; //to avoid render framer components on server that requires client-dependant hooks like useEffect
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import ImageAndText from "./components/ImageAndText";
import ScrollingCards from "./components/ScrollingCards";
import meirlAnimation from "../public/meirl.json";
import useLangStore from "./components/langStore";
const page = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const lang = useLangStore((state) => ({
    currentLang: state.currentLang,
  }));

  const translations = {
    en: {
      profession: (
        <>
          I&#39;m a <strong>Full stack junior developer</strong> from Spain.
        </>
      ),

      scrollText: "SCROLL",
      languageProficiencyTitle: "Language proficiency",
      languageProficiencyText: (
        <>
          {" "}
          I speak both <strong>English</strong> and <strong>Spanish</strong>{" "}
          fluently, which allows me to connect with a broader audience and
          collaborate seamlessly with diverse teams.{" "}
        </>
      ),
      globalMindsetTitle: "Global Mindset",
      globalMindsetText: (
        <>
          {" "}
          I&#39;m ready to take on new challenges and embark on exciting
          opportunities around the world. Working abroad excites me, as it
          offers the chance to immerse myself in different cultures and learn
          from a wide range of perspectives.
        </>
      ),
      letsWorkTogetherTitle: "Let's Work Together!",
      letsWorkTogetherText: (
        <>
          {" "}
          If you are looking for a dedicated and motivated junior web developer
          who is ready to make a positive impact, I would love to be part of
          your team. Let&#39;s join forces and create something extraordinary
          together!
        </>
      ),
      programmingLanguagesTitle: "PROGRAMMING LANGUAGES & LIBRARIES",
      includingButNotLimitedTo: "INCLUDING BUT NOT LIMITED TO",
      copyrightText: "Copyright © 2024 Asid Kouki®. All rights reserved.",
    },
    // Add translations for other languages as needed
    es: {
      profession: (
        <>
          Soy un <strong>desarrollador Full Stack junior</strong> de España.{" "}
        </>
      ),

      scrollText: "DESPLAZARSE",
      languageProficiencyTitle: "Competencia lingüística",
      languageProficiencyText: (
        <>
          Hablo <strong>Inglés</strong> y <strong>Español</strong> con fluidez,
          lo que me permite conectar con una audiencia más amplia y colaborar de
          manera fluida con equipos diversos.
        </>
      ),
      globalMindsetTitle: "Mentalidad global",
      globalMindsetText:
        "Estoy listo para enfrentar nuevos retos y aprovechar oportunidades emocionantes en todo el mundo. Trabajar en el extranjero me entusiasma, ya que me brinda la oportunidad de sumergirme en diferentes culturas y aprender de una amplia variedad de perspectivas.",
      letsWorkTogetherTitle: "!Vamos a trabajar juntos!",
      letsWorkTogetherText:
        "Si estás buscando a un desarrollador web junior dedicado y motivado, listo para hacer un impacto positivo, me encantaría formar parte de tu equipo. ¡Unamos fuerzas y creemos algo extraordinario juntos!",
      programmingLanguagesTitle: "LENGUAJES DE PROGRAMACIÓN Y BIBLIOTECAS",
      includingButNotLimitedTo: "INCLUYENDO PERO NO LIMITADO A",
      copyrightText:
        "Derechos de autor © 2024 Asid Kouki®. Todos los derechos reservados.",
    },

    //DEUTSCH

    de: {
      profession: (
        <>
          Ich bin ein <strong>Full Stack Entwickler</strong> aus Spanien.{" "}
        </>
      ),

      scrollText: "SCROLLEN",
      languageProficiencyTitle: "Sprachkenntnisse",
      languageProficiencyText: (
        <>
          {" "}
          Ich spreche sowohl<strong> Englisch</strong> als auch{" "}
          <strong> Spanisch </strong>
          fließend, was es mir ermöglicht, eine breitere Zielgruppe anzusprechen
          und nahtlos mit vielfältigen Teams zusammenzuarbeiten. Zurzeit lerne
          ich Deutsch.
        </>
      ),
      globalMindsetTitle: "Globale Mentalität",
      globalMindsetText:
        "Ich bin bereit, aus Spanien wegzuziehen und an meinem Arbeitsort zu leben, sei es in Deutschland oder anderswo.",
      letsWorkTogetherTitle: "lassen Sie uns zusammenarbeiten!",
      letsWorkTogetherText:
        "Wenn Sie nach einem engagierten und motivierten Junior-Webentwickler suchen, der bereit ist, einen positiven Beitrag zu leisten, würde ich gerne Teil Ihres Teams sein.!",
      programmingLanguagesTitle: "PROGRAMMIERSPRACHEN UND BIBLIOTHEKEN",
      includingButNotLimitedTo: "EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF",
      copyrightText:
        "Urheberrecht © 2024 Asid Kouki Aiwaz®. Alle Rechte vorbehalten.",
    },
  };

  return (
    <div className="">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: -50, opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 0.5,
        }}
        className="flex justify-between h-fit  md:mx-32 mx-4 items-center"
      >
        <div className="flex flex-col">
          <div className="flex items-end">
            <h1 className="text-[#275E68]  mt-36 md:text-7xl text-2xl !leading-tight">
              {lang.currentLang === "en"
                ? "Hi, my name is"
                : lang.currentLang === "es"
                ? "Hola, mi nombre es"
                : "Hallo,Ich heiße"}{" "}
              <br></br>{" "}
              <strong className="whitespace-nowrap">Asid Kouki Aiwaz.</strong>
            </h1>

            <motion.span
              className="inline-block pb-5 pr-11 text-5xl"
              animate={{
                rotate: 20,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              👋
            </motion.span>
          </div>

          <p className="text-[#275E68] text-2xl  mt-6 tracking-wide">
            {translations[lang.currentLang].profession}
          </p>
        </div>

        <div className=" mt-36 opacity-100">
          <Lottie animationData={meirlAnimation} loop={true} />
        </div>
      </motion.div>

      <div className="text-center hidden md:block  md:absolute md:left-[19.5rem] md:top-[33rem] my-20">
        <motion.span
          initial={{ y: 0, opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            repeat: 2,
            repeatType: "reverse",
          }}
          className=" text-[#275E68]  "
        >
          {translations[lang.currentLang].scrollText}
        </motion.span>

        <motion.svg initial="hidden" animate="visible" height="400" width="400">
          <motion.line
            x1="200"
            y1="30"
            x2="200"
            y2="300"
            stroke="#275E68"
            strokeWidth="3"
            variants={draw}
          />
        </motion.svg>
      </div>

      <div className="md:mt-96 mt-8">
        <ImageAndText
          image="/bilingual.svg"
          title={translations[lang.currentLang].languageProficiencyTitle}
          className=" md:!flex-row-reverse"
        >
          {translations[lang.currentLang].languageProficiencyText}
        </ImageAndText>
      </div>

      <div className="mt-20">
        <ImageAndText
          image="/global.svg"
          title={translations[lang.currentLang].globalMindsetTitle}
          className=""
        >
          {translations[lang.currentLang].globalMindsetText}
        </ImageAndText>
      </div>

      <div className="mt-20">
        <ImageAndText
          image="/backedup.svg"
          title={translations[lang.currentLang].letsWorkTogetherTitle}
          className=" md:!flex-row-reverse"
        >
          {translations[lang.currentLang].letsWorkTogetherText}
        </ImageAndText>

        <h2 className="text-center mt-32 text-[#214F59]   font-semibold">
          {translations[lang.currentLang].programmingLanguagesTitle}
        </h2>

        <h3 className="text-center mt-2 text-[#214F59] text-xs ">
          {translations[lang.currentLang].includingButNotLimitedTo}
        </h3>
        <ScrollingCards></ScrollingCards>

        <footer>
          <p className="text-xs text-center text-[#505050]">
            {" "}
            {translations[lang.currentLang].copyrightText}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default page;
