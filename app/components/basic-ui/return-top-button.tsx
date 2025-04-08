'use client'
import { ArrowIcon } from "@components/icons/arrow-icon"
import { cn } from "@lib/utils"
import { radialGradient } from "framer-motion/client"
import React from "react"
import { RingProgress } from "@components/icons/ring-progress"
import { useEffect,useState } from "react"

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
    )

    return (
      <button
      ref={ref}
      onClick={handleClick}
      className={cn("group fixed cursor-pointer bottom-10 right-10", className)}
      {...props}
    >
      <div className="relative w-12 h-12">
        <RingProgress angle={1.076*angle} color="#0ea5e9"/>
        <ArrowIcon className="rotate-90" />
      </div>
    </button>
    );
  }
);

ReturnTopButton.displayName = "ReturnTopButton";
