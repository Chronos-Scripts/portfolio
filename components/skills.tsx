'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '../lib/data'
import { useSectionInView } from '../lib/hooks'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView('Skills', 1)

  return (
    <section
      ref={ref}
      id="skills"
      className="max-w-[53rem] mb-10 sm:mb-0 scroll-mt-20 sm:scroll-mt-80 text-center"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.a
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="bg-[#1a1b2e] border hover:bg-[#12121f] transition-colors border-[#2a4a66] rounded-xl px-5 py-3 text-[#f0f8ff]"
            custom={index}
            key={index}
            href={skill[1]}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            {skill[0]}
          </motion.a>
        ))}
      </ul>
    </section>
  )
}