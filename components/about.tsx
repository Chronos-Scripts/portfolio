'use client'
/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '../lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About', 1)

  return (
    <motion.section
      ref={ref}
      className="mb-10 sm:mb-28 sm:mt-14 max-w-[45rem] scroll-mt-28 text-center leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 text-white">
      Hello! I'm <span className="font-medium">Chronos</span>, a dedicated and innovative developer with a strong background in both <span className="font-medium">Roblox</span> and <span className="font-medium">web development</span>. With over <span className="font-medium">a year of experience</span>, I have honed my skills in creating dynamic and user-friendly applications. My passion for technology drives me to continuously learn and stay updated with the latest trends in the industry.
      </p>
      <p className='mb-3 text-white'>
      I take pride in my ability to solve complex problems and deliver high-quality solutions. My expertise spans across various <span className="font-medium">programming languages</span> and <span className="font-medium">frameworks</span>, allowing me to adapt to different project requirements efficiently. I am committed to pushing the boundaries of what is possible and always strive for excellence in my work.
      </p>
      <p className='text-white'>
      When I'm not coding, I enjoy exploring new technologies, contributing to <span className="font-medium">open-source projects</span>, and sharing my knowledge with the developer community. Let's connect and create something amazing together!
      </p>
    </motion.section>
  )
}