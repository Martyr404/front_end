'use client'
import { ArrowIcon } from "@components/icons/arrow-icon"
import { cn } from "@lib/utils"
import React from "react"

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

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={cn("group fixed cursor-pointer bottom-10 right-10", className)}
        {...props}
      >
        <ArrowIcon className="rotate-90" />
      </button>
    );
  }
);

ReturnTopButton.displayName = "ReturnTopButton";
