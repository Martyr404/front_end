import Link from "next/link";
import { Eyes } from "@icons/eyes-icon"
import localFont from 'next/font/local'
import { cn } from "@lib/utils";
 
const Rubik = localFont({
  src: '../../../public/fonts/Rubik-SemiBold.woff2',
  display: 'swap',
})

const navItems = [
  { href: "/Introduction", label: "Introduction" },
  { href: "/Member", label: "Member" },
  { href: "/News", label: "News" },
  { href: "/Activity", label: "Activity" },
  { href: "/Communication", label: "Communication" },
  { href: "/Book", label: "Book" },
];


import React from "react";

interface SceneryHeaderProps extends React.HTMLAttributes<HTMLDivElement>{}

export const SceneryHeader=({...props}:SceneryHeaderProps)=>{
  const HoverStyle= cn(Rubik.className,"relative inline-block after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full");
  return(
<div className="flex flex-row fixed items-center justify-center w-full h-15 bg-transparent">
  <div className="flex-[1] ml-5">
    <Eyes></Eyes>
  </div>
  <div className="flex-[9] flex gap-8 flex-row text-lg text-white">
    <p className={HoverStyle}>Introduction</p>
    <p className={HoverStyle}>Member</p>
    <p className={HoverStyle}>Achievement</p>
  </div>
</div>
  )
}

