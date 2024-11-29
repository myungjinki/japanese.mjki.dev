"use client";

import { useState } from "react";
import { japaneseDict } from "../utils/db";
import { motion, Variants } from "framer-motion";

const mainVariants: Variants = {
  hidden: { x: 500 },
  visible: { x: 0, transition: { type: "tween" } },
};

const subVariants: Variants = {
  visible: {
    fontSize: "20px",
  },
};

export default function DetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const [index, setIndex] = useState(0);
  const word = japaneseDict.find((word) => word.id === Number(id));

  function handleNext() {
    if (index < 4) {
      setIndex((prev) => prev + 1);
    }
  }

  if (!word) {
    return <div>Word not found</div>;
  }

  const renderChild = (childIndex: number) => (
    <motion.div
      variants={subVariants}
      animate="visible"
      layoutId={String(childIndex)}
      transition={{ type: "tween", duration: 0.5 }}
    >
      <div>{word.children[childIndex].hiragana}</div>
      <div>{word.children[childIndex].korean}</div>
    </motion.div>
  );

  return (
    <div className="grid w-full h-full grid-cols-2" onClick={handleNext}>
      <div className="relative flex items-center justify-end bg-blue-300">
        <div className="absolute text-3xl text-white top-4 left-4">
          <div>{`${word.root.hiragana}${word.verb.hiragana}`}</div>
          <div>{`${word.root.korean}${word.verb.korean}`}</div>
        </div>
        <div className="text-4xl text-blue-950">
          <div>{`${word.root.hiragana}${word.common.hiragana}`}</div>
          <div>{`${word.root.korean}${word.common.korean}`}</div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 text-blue-500">
        {[0, 1].map((childIndex) => (
          <div key={childIndex}>
            {index > childIndex && renderChild(childIndex)}
          </div>
        ))}
        <div className="self-center col-span-2">
          {[0, 1, 2, 3, 4].map(
            (num) =>
              num === index && (
                <motion.div
                  variants={mainVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ fontSize: "36px", lineHeight: "40px" }}
                  layoutId={String(index)}
                  key={index}
                >
                  <div>{word.children[index].hiragana}</div>
                  <div>{word.children[index].korean}</div>
                </motion.div>
              )
          )}
        </div>
        {[2, 3].map((childIndex) => (
          <div key={childIndex} className="self-end">
            {index > childIndex && renderChild(childIndex)}
          </div>
        ))}
      </div>
    </div>
  );
}
