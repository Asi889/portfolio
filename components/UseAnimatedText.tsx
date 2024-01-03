import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const UseAnimatedText = ({ text }) => {
  // const text = 'Contact me' // This would normally be passed into this component as a prop!

  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.h2 className="flex flex-wrap" aria-label={text} role="heading">
      {text?.split(" ").map((word, index) => {
        return (
          <motion.span
            ref={ref}
            className="pr-2"
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.1,
              staggerChildren: 0.05,
            }}
          >
            {word?.split("").map((character, index) => {
              return (
                <motion.span
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                  className="text-[18px] lg:text-[25px]"
                >
                  {character}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </motion.h2>
  );
};

export default UseAnimatedText;
