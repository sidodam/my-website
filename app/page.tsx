"use client"; //to avoid render framer components on server that requires client-dependant hooks like useEffect
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import ImageAndText from "./components/ImageAndText";

import meirlAnimation from "../public/meirl.json";
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

  return (
    <div className="">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: -50, opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 0.5,
        }}
        className="flex justify-between h-fit  mx-32 items-center"
      >
        <div className="flex flex-col">
          <div className="flex items-end">
            <h1 className="text-[#275E68]  mt-36 text-7xl ">
              Hi, my <br></br>
              name is <strong>Asid Kouki</strong>{" "}
              <span className="-ml-4">.</span>
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

          <p className="text-[#275E68] text-2xl  mt-10 tracking-wide">
            I&#39;m a <strong>Full stack junior developer</strong> from Spain.
          </p>
        </div>

        <div className=" mt-36 opacity-100">
          <Lottie animationData={meirlAnimation} loop={true} />
        </div>
      </motion.div>

      <div className="text-center md:ml-40  md:-mt-20">
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
          className=" text-[#275E68] md:absolute md:left-[20.5rem]  "
        >
          SCROLL
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

      <div className="">
        <ImageAndText
          image="/bilingual.svg"
          title="Language Skills"
          className=" md:!flex-row-reverse"
        >
          I speak both <strong>English</strong> and <strong>Spanish</strong>{" "}
          fluently, which allows me to connect with a broader audience and
          collaborate seamlessly with diverse teams.
        </ImageAndText>
      </div>

      <div className="mt-20">
        <ImageAndText image="/global.svg" title="Global Mindset" className="">
          am ready to take on new challenges and embark on exciting
          opportunities around the world. Working abroad excites me, as it
          offers the chance to immerse myself in different cultures and learn
          from a wide range of perspectives.
        </ImageAndText>
      </div>

      <div className="mt-20">
        <ImageAndText
          image="/backedup.svg"
          title="Let's Work Together!"
          className=" md:!flex-row-reverse"
        >
          If you are looking for a dedicated and motivated junior web developer
          who is ready to make a positive impact, I would love to be part of
          your team. Let's join forces and create something extraordinary
          together!
        </ImageAndText>
      </div>
    </div>
  );
};

export default page;
