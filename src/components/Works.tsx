import React from "react";
import Tilty from "react-tilty";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, webapp } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Project } from "../configs/types";

interface ProjectCardProps extends Project {
  index: number;
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className=" w-[100%] xs:w-[80%] sm:w-[46%] lg:w-[31%] m-0 "
    >
      <Tilty>
        <div className="bg-tertiary p-5 rounded-2xl">
          <div className="relative h-[200px] xs:h-[200px] sm:h-[160px] md:h-[180px] lg:h-[180px] xl:h-[240px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute top-0 right-0 flex-col justify-end m-3 card-img_hover ">
              {source_code_link && source_code_link.length > 0 && (
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mb-3"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-start justify-between">
              <h3 className="flex-1 break-all text-white font-bold text-[24px]">
                {name}
              </h3>
              {live_link && live_link.length > 0 && (
                <button
                  style={{
                    backgroundColor: "rgba(28, 37, 79, 0.8)",
                    border: "3px solid rgba(255,255,255,0.02)",
                  }}
                  className=" flex items-center pr-2 rounded "
                >
                  <img
                    src={webapp}
                    alt="source code"
                    className="w-[30px] h-[30px] object-contain p-2"
                  />
                  <span style={{ color: "#FC573B" }}>Live</span>
                </button>
              )}
            </div>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 items-start">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] items-center ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilty>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-row flex-wrap justify-start gap-[30px]">
        {projects.map((project, index) => (
          // <div className="h-[20px] bg-indigo-500 w-[100%] sm:w-[30%]"></div>
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
