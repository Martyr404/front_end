"use client";

import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@lib/utils";
import localFont from "next/font/local";

const Rubik = localFont({
  src: '../../../public/fonts/Rubik-SemiBold.woff2',
  display: 'swap',
})

interface WordRotateProps {
  words: string[];
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
}

function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className={cn(className)}
          {...motionProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
  );
}



interface TitleProps extends React.HTMLAttributes<HTMLDivElement>{}

export const Title=({...props}:TitleProps)=>{
  return(
<div className="ml-10 lg:ml-40 text-white flex flex-col gap-4">
    <h1 className={cn(Rubik.className,"text-4xl")}>Intelligent Imaging Computing Lab</h1>
    <div>
    <span className={cn(Rubik.className,"")}>A laboratory focused on  </span>
    <span className={cn(Rubik.className,"inline-block")}>
        <WordRotate words={["low-level vision","medical image processing"]}/>
    </span>
    </div>
</div>
  )
}
