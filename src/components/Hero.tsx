import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { user } from "../constants";

const Hero = () => {
  const aboutStringSplit =
    user.about_me_slogan && user.about_me_slogan.length > 0
      ? user.about_me_slogan.split(" ")
      : [];
  var aboutFirstSegment, aboutSecondSegment;
  if (aboutStringSplit.length > 4) {
    aboutFirstSegment = aboutStringSplit.slice(0, 5).join(" ");
    aboutSecondSegment = aboutStringSplit.slice(5).join(" ");
  } else {
    aboutFirstSegment = user.about_me_slogan;
    aboutSecondSegment = "";
  }
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{user.first_name}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {aboutFirstSegment} <br className="sm:block hidden" />
            {aboutSecondSegment}
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute bottom-14 xs:bottom-10 w-full flex justify-center items-center">
        <div
          className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
