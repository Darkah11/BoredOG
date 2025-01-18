"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import img1 from "../../public/ms/ms-access.png";
import img2 from "../../public/ms/ms-delve.png";
import img3 from "../../public/ms/ms-excel.png";
import img4 from "../../public/ms/ms-note.png";
import img5 from "../../public/ms/ms-office.png";
import img6 from "../../public/ms/ms-outlook.png";
import img7 from "../../public/ms/ms-powerpoint.png";
import img8 from "../../public/ms/ms-word.png";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";

export default function Slider({ src }) {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 32;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);
  return (
    <motion.div
      className=" flex gap-8 overflow-x-clip"
      ref={ref}
      style={{x:xTranslation, width: "max-content"}}
    >
      {[...images, ...images].map((item, index) => {
        //   return <Card src={item}  />
        return (
          <Image
            src={item}
            key={index}
            alt={"ms office"}
            className=" md:w-32 w-16"
          />
        );
      })}
    </motion.div>
  );
}
