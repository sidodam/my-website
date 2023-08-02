"use client"; //to avoid render framer components on server that requires client-dependant hooks like useEffect
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import meirlAnimation from "../public/meirl.json";
const page = () => {
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
    </div>
  );
};

export default page;
