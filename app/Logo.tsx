import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import localFont from "@next/font/local";
import Link from "next/link";
const openSansExtraBold = localFont({
  src: "../public/Monoton-Regular.ttf",
});

function FadeInWhenVisible({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

const Logo = () => {
  return (
    <FadeInWhenVisible>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ rotate: 360, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0.5 }}
      >
        <Link
          href="/"
          className={`${openSansExtraBold.className} text-3xl font-medium upsidedown cursor-pointer hover:text-[#f14a4a] transition-all duration-300 ease-in-out`}
        >
          AK
        </Link>
      </motion.div>
    </FadeInWhenVisible>
  );
};

export default Logo;
