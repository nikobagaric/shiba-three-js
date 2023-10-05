import React from "react";
import { motion } from "framer-motion";
import ShibaCanvas from "./canvas/Shiba";

import { styles } from "../styles";

// TO DO: Shiba Inu header animations

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-stretch mt-32">
      <div className="flex flex-col w-[600px] justify-around lg:items-stretch items-center">
        <motion.div className="lg:block flex items-center flex-col">
          <h3 className={styles.heroSubText}>A three.js web-project</h3>
          <h1 className={styles.heroHeadText}>Shiba Inu</h1>
          <p className="text-[48px] leading-[1.05em]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </motion.div>
        <div>
          <p className="text-[40px] ml-5 mb-5">Hop into it!</p>
          <button className="bg-primary rounded-[35px] text-[48px] py-2 px-5 shadow-lg">
            Wow! Such button!
          </button>
        </div>
      </div>
      <div>
        <div className="w-[800px] h-[800px] relative flex items-center justify-center">
          <ShibaCanvas />
          <div className="absolute w-[700px] h-[700px] border-primary border-[56px] rounded-full z-[-1]"></div>
          <div className="absolute w-[400px] h-[400px] border-primary border-[56px] rounded-full z-[-1]"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
