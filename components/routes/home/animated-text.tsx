'use client'

import React, { useState, useEffect } from 'react'
import { FaGithubAlt, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	subsets: ["latin"], 
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
});


const charPoses = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.057 },
  }),
}

export function AnimatedText() {
  const [sloganVisible, setSloganVisible] = useState(false)

  useEffect(() => {
    const sloganTimeout = setTimeout(() => setSloganVisible(true), 3500)
    return () => clearTimeout(sloganTimeout)
  }, [])
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden z-0 ">
      <main className="flex flex-col h-full items-center justify-center">
        <div className="text-center min-h-[220px] mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
          className={`text-white text-9xl tracking-normal opacity-0 ${poppins.className} `}
        >
          blockmatic
        </motion.div>
        <div className="text-white text-[calc(1vw+2.2vh)]">
          {sloganVisible && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.057 } },
              }}
            >
              {'cutting-edge crypto and ai solutions'.split('').map((char, index) => (
           
                <motion.span
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={`char-${char}-${index}`}
                  variants={charPoses}
                  custom={index}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          )}
        </div>
        </div>
       
      </main>
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: -20 }}
        transition={{ delay: 5 }}
        className="text-[calc(1vw+2.5vh)] flex flex-row justify-center transition-all duration-1000 ease-in"
      >
        <a
          href="mailto:contact@gaboesquivel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white p-4"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://twitter.com/blockmatic_io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white p-4"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/blockmatic"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white p-4"
        >
          <FaGithubAlt />
        </a>
      </motion.div>
    </div>
  )
}
