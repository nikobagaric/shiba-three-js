import React from "react";
import ShibaCanvas from "./canvas/Shiba";

import { styles } from "../styles";

function Hero() {
  return (
    <div className="flex justify-evenly mt-20">
      <div className="flex flex-col w-[600px] justify-around">
        <div>
          <h3 className={styles.heroSubText}>A three.js web-project</h3>
          <h1 className={styles.heroHeadText}>Shiba Inu</h1>
          <p className="text-[48px] leading-[1.05em]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>
        <div>
          <p>Hop into it!</p>
          <button>Wow! Such button!</button>
        </div>
      </div>
      <div>
        <div className="w-[800px] h-[800px] relative flex items-center justify-center">
          <div className="absolute w-[700px] h-[700px] border-primary border-[56px] rounded-full"></div>
          <ShibaCanvas />
        </div>
      </div>
    </div>
  );
}

export default Hero;
