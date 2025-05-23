'use client'

import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import React, { useState, useEffect } from 'react'
import { FaEnvelope, FaGithubAlt, FaTwitter } from 'react-icons/fa'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

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
        <div className="text-center min-h-[220px] mt-[15vh] sm:mt-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
            className={`text-white text-9xl tracking-normal opacity-0 ${poppins.className} bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]`}
          >
            blockmatic
          </motion.div>
          <div className="text-white text-[18px] sm:text-[calc(1vw+2.2vh)]">
            {sloganVisible && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.057 } },
                }}
                className="tracking-wider"
              >
                {'Blockchain and Artificial Intelligence'
                  .split('')
                  .map((char, index) => (
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
        className="text-[calc(1vw+2.5vh)] flex flex-row justify-center gap-6 transition-all duration-1000 ease-in relative z-50"
      >
        <a
          href="mailto:contact@gaboesquivel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white p-4 hover:text-emerald-300 transition-colors duration-300 cursor-pointer relative z-50"
          style={{ cursor: 'pointer', pointerEvents: 'auto' }}
        >
          <FaEnvelope className="cursor-pointer" />
        </a>
        <a
          href="https://twitter.com/blockmatic_io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white p-4 hover:text-emerald-300 transition-colors duration-300 cursor-pointer relative z-50"
          style={{ cursor: 'pointer', pointerEvents: 'auto' }}
        >
          <FaTwitter className="cursor-pointer" />
        </a>
        <a
          href="https://github.com/blockmatic"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white p-4 hover:text-emerald-300 transition-colors duration-300 cursor-pointer relative z-50"
          style={{ cursor: 'pointer', pointerEvents: 'auto' }}
        >
          <FaGithubAlt className="cursor-pointer" />
        </a>
      </motion.div>
    </div>
  )
}
