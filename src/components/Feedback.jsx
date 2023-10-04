import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({ index, title, body, iconPath }) => {
  return (
    <Tilt className="xs:w-[350px] w-full my-10">
      <motion.div
        variants={fadeIn("left", "spring", index * 0.5, 0.75)}
        className="w-full rounded-xl p-1"
      >
        <div
          className="min-h-[500px] bg-white rounded-xl
        py-5 px-8 flex flex-col justify-evenly items-center"
        >
          <img src={iconPath} alt="insert-icon"
          className=" max-w-[70px] absolute left-[10px] top-[10px] rotate-[-45deg]" />
          <h3 className="text-[40px] text-center">{title}</h3>
          <p className="text-[30px] text-center">{body}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Feedback = () => {
  return (
    <div className="flex flex-col justify-evenly items-center w-full">
      <h2 className="text-primary text-gradient text-[115px] mb-10">Feedback Shibas</h2>
      <div className="flex lg:flex-row flex-col justify-evenly items-center w-full">
        <FeedbackCard
          index={1}
          title={"Lorem ipsum"}
          body={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
          }
          iconPath={"/img/paw.svg"}
        />
        <FeedbackCard
          index={2}
          title={"Lorem ipsum"}
          body={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
          }
          iconPath={"/img/paw.svg"}
        />
        <FeedbackCard
          index={3}
          title={"Lorem ipsum"}
          body={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
          }
          iconPath={"/img/paw.svg"}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Feedback, "feedback");
