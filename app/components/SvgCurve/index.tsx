'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const SVGCurve = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  })
  useEffect(() => {
    if (!window) return
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    resize()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  const initialPath = `
    M0 300 
    Q${dimensions.width / 2} 0 ${dimensions.width} 300
    L${dimensions.width} ${dimensions.height + 300}
    Q${dimensions.width / 2} ${dimensions.height + 600} 0 ${dimensions.height + 300}
    L0 0
  `
  const targetPath = `
    M0 300
    Q${dimensions.width / 2} 0 ${dimensions.width} 300
    L${dimensions.width} ${dimensions.height}
    Q${dimensions.width / 2} ${dimensions.height} 0 ${dimensions.height}
    L0 0
  `
  return (
    <>
      {dimensions.width && dimensions.height && (
        <motion.svg
          width={dimensions.width / 2}
          height={dimensions.height / 2}
          className='fixed inset-0 h-full w-full'
        >
          <motion.path
            initial={{
              d: initialPath
            }}
            animate={{
              d: targetPath,
              transition: {
                duration: 3,
                delay: 2,
                ease: [0.76, 0, 0.24, 1]
              }
            }}
          />
        </motion.svg>
      )}
    </>
  )
}

export default SVGCurve
