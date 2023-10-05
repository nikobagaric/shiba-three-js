import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({ index, title, body, iconPath }) => {
  return (
    <Tilt className="xs:w-[380px] w-full my-10">
      <motion.div
        variants={fadeIn("left", "spring", index * 0.5, 0.75)}
        className="w-full rounded-xl p-1"
      >
        <div
          className="min-h-[500px] bg-white rounded-xl
         py-5 flex flex-col justify-evenly items-center
        border-4 border-black shadow-2xl w-full"
        >
          <img
            src="/img/paw.svg"
            alt="paw-icon"
            className=" max-w-[70px] absolute left-[10px] top-[10px] rotate-[-45deg]"
          />
          <img
            src={iconPath}
            alt="person-icon"
            className="max-h-[225px] object-contain"
          />
          <hr className="border-2 border-black border-dashed w-full my-3" />
          <div className="flex-col flex justify-evenly items-center">
            <h3 className="text-[40px] text-center">{title}</h3>
            <p className="text-[30px] text-center">{body}</p>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Feedback = () => {
  return (
    <div className="flex flex-col justify-evenly items-center w-full">
      <h2 className="text-primary text-gradient text-[115px] mb-10 text-center">
        Feedback Shibas
      </h2>
      <div className="flex lg:flex-row flex-col justify-evenly items-center w-full">
        <FeedbackCard
          index={1}
          title={"The Doggo"}
          body={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
          }
          iconPath={"/img/shiba-two.png"}
        />
        <FeedbackCard
          index={2}
          title={"Der Hund"}
          body={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
          }
          iconPath={"/img/shiba-two.png"}
        />
        <FeedbackCard
          index={3}
          title={"El Perro"}
          body={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
          }
          iconPath={"/img/shiba-one.png"}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Feedback, "feedback");
