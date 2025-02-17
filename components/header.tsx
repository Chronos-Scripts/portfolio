'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { links } from '../lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveSectionContext } from '../context/active-section-context'

export default function Header() {
  const { activeSection, setSection, setLastClickTime } =
    useActiveSectionContext()

  return (
    <header className="z-[999] relative">
      <motion.div
      className="fixed top-0 left-1/2 -translate-x-1/2 h-[3.5rem] w-full
          rounded-none border border-gray-800 border-opacity-40 bg-gray-800
          bg-opacity-95 shadow-lg shadow-black/[0.03] background-blur-[0.5rem]
          sm:top-6 sm:h-[3.25rem] sm:w-[28rem] sm:rounded-full"
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      />
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
      <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
        {links.map((link) => (
        <motion.li
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="h-3/4 relative flex items-center justify-center"
          key={link.hash}
        >
          <Link
          className={clsx(
            'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition',
            {
            'text-gray-950': activeSection === link.name,
            }
          )}
          href={link.hash}
          onClick={() => {
            setSection(link.name)
            setLastClickTime(Date.now())
          }}
          >
          {link.name}
          {link.name === activeSection && (
            <motion.span
            className="bg-gray-500 rounded-full absolute inset-0 -z-10"
            layoutId="activeSection"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
          </Link>
        </motion.li>
        ))}
      </ul>
      </nav>
    </header>
  )
}