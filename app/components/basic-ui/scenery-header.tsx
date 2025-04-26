import Link from "next/link";
import { Eyes } from "@icons/eyes-icon"

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
  return(
<div className="flex flex-row fixed items-center justify-center w-full h-15 bg-transparent">
  <div className="flex-[1] pl-5">
    <Eyes></Eyes>
  </div>
  <div className="flex-[9] flex gap-8 flex-row font-var(--my) ">
    <p>Introduction</p>
    <p>Member</p>
    <p>Achievement</p>
  </div>
</div>
  )
}

