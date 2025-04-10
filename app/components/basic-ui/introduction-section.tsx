"use client"
import {AnimatePresence, motion} from "framer-motion"
import React from "react"
interface SectionProps extends React.HTMLAttributes<HTMLDivElement>{}
export const Section = React.forwardRef<HTMLDivElement,SectionProps>(
    ({children,className,...props},ref)=>{
        
        return(
            <AnimatePresence>
                <motion.section 
                initial={{opacity:0,translateY:30,scale:0.95}}
                whileInView={{opacity:1,translateY:0,scale:1}}
                transition={{duration:0.5}} 
                exit={{opacity:0.5,translateY:30,scale:0.95}}>
                    <div className="w-full h-500 bg-gray-200">
                        {children}
                    </div>
                </motion.section>
            </AnimatePresence>
        )
    }
)
Section.displayName = "Section"