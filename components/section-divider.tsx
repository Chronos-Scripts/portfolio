'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="bg-gray-700 my-16 h-16 w-1 rounded-full hidden sm:block"
    />
  )
}