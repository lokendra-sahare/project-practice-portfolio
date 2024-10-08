import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.scss";

export const Parallax = ({ type }) => {
  const ref = useRef(null); // Initialize ref with null

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "About Me?" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains" style={{ y: yBg }}></motion.div>{" "}
      {/* Fixed missing 'style' */}
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planet.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  );
};
