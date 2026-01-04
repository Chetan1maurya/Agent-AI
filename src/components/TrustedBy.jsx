import React from 'react'
import {company_logos} from '../assets/assets'
import { motion } from "motion/react"

const TrustedBy = () => {
  return (
    <motion.div 
    className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80 bg-white dark:bg-black">
        <motion.h3 
        initial = {{opacity: 0, y: 20}} whileInView = {{opacity: 1, y: 0}} transition = {{duration: 0.5}} viewport = {{once: true}} className="font-semibold">Trusted by Leading Companies</motion.h3>
        <motion.div className="flex items-center justify-center flex-wrap gap-10 m-4">
            {company_logos.map((logo,index) => {
                return <motion.img 
                initial = {{opacity: 0, y: 10}}
                whileInView = {{opacity: 1, y: 0}}
                viewport = {{once: true}}
                transition = {{duration: 0.4,delay: index*0.2}}
                key={index} src={logo} alt="" className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"/>
            })}
        </motion.div>
    </motion.div>
  )
}

export default TrustedBy