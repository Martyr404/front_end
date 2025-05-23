"use client";
import { ArrowIcon } from "@components/icons/arrow-icon"
import { cn } from "@lib/utils"
import { RingProgress } from "@components/icons/ring-progress"
import React,{ useEffect,useState } from "react"
import { motion, AnimatePresence } from "framer-motion";

interface ReturnTopButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ReturnTopButton = React.forwardRef<HTMLButtonElement, ReturnTopButtonProps>(
  ({ children, className, ...props }, ref) => {
    //处理函数
    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    //进度条监听函数
    const [angle,setAngle]=useState(0);
      useEffect(
      ()=>{
        const handleScroll=()=>{
          const docHeight=document.documentElement.scrollHeight;
          const scrollHeight=document.documentElement.scrollTop;
          setAngle(scrollHeight/docHeight*360);
        }
        window.addEventListener("scroll",handleScroll
        );
        return ()=>{
          window.removeEventListener("scroll",handleScroll)
        }
      }
    );
    //渲染
    return (
      <AnimatePresence>
        {angle>30&&(<motion.button 
        ref={ref}
        onClick={handleClick}
        className={cn("group fixed cursor-pointer bottom-10 right-10", className)}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{duration:0.3}}
        exit={{opacity:0,scale:0.5,transition:{duration:0.3}}}
        >
          <div className="relative">
            <RingProgress angle={1.1*angle} color="#0ea5e9"/>
            <ArrowIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />
          </div>
        </motion.button>)}
      </AnimatePresence>
    );
  }
);

ReturnTopButton.displayName = "ReturnTopButton";
