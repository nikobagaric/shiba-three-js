import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const AboutCard = ({ index, text, minitext, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full lg:my-0 my-7">
      <motion.div
        variants={fadeIn("left", "spring", index * 0.5, 0.75)}
        className="w-full"
      >
        <div className="bg-white rounded-xl min-h-[200px] relative flex flex-col items-center">
          <div className="absolute top-[-35px] rounded-full w-[70px] h-[70px] bg-white p-2">
            <img src={icon} alt="card-image" />
          </div>

          <h3 className="text-[48px] mt-5 text-center">{text}</h3>
          <p className="text-center text-[32px]">{minitext}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="flex flex-col justify-evenly items-center w-full">
      <h2 className="text-primary text-gradient text-[115px] mb-2">
        About Shibas
      </h2>
      <div className="flex lg:flex-row flex-col">
        <div className="flex-col flex">
          <p className="text-[32px] text-center my-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            aliquid corporis nam nihil maxime iure voluptas corrupti animi
            magni. Facilis accusantium voluptates corporis dicta necessitatibus
            molestias, nihil illo aspernatur non.
          </p>
          <div className="flex w-full items-center justify-evenly mt-20 lg:flex-row flex-col">
            <AboutCard
              index={1}
              text={"Lorem"}
              minitext={"lorem ipsum dolor sit"}
              icon={"/img/paw.svg"}
            />
            <AboutCard
              index={2}
              text={"Lorem"}
              minitext={"lorem ipsum dolor sit"}
              icon={"/img/paw.svg"}
            />
            <AboutCard
              index={3}
              text={"Lorem"}
              minitext={"lorem ipsum dolor sit"}
              icon={"/img/paw.svg"}
            />
          </div>
        </div>
        <img src="/img/shiba-two.png" className="max-w-2xl" alt="dog-2" />
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
