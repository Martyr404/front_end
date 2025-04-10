'use client'
import {AnimatePresence, motion} from "framer-motion"
import React from "react"
interface SectionProps extends React.HTMLAttributes<HTMLDivElement>{}
export const Section = React.forwardRef<HTMLDivElement,SectionProps>(
    ({children,className,...props},ref)=>{
        return(
            <AnimatePresence>
                <motion.section>
                    <div className="w-full h-500 bg-gray-200">
                        {children}
                    </div>
                </motion.section>
            </AnimatePresence>
        )
    }
)
Section.displayName = "Section"