'use client'

import { motion } from 'framer-motion'
import SVGCurve from './components/SvgCurve'

export default function Template({
  children,
  backgroundColor
}: {
  children: React.ReactNode
  backgroundColor: string
}) {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ ease: 'easeInOut', duration: 0.75 }}
    // >
    //   {children}
    // </motion.div>
    <>
      <div className='page curve' style={{ backgroundColor }}>
        <div
          // style={{ opacity: dimensions.width == null ? 1 : 0 }}
          className='background'
        />
        {/* <motion.p className='route'>sdadasd</motion.p> */}
        {/* {dimensions.width != null && <SVG {...dimensions} />} */}
        <SVGCurve />
        {children}
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: '50vh' }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        style={{
          width: '100%',
          height: '50vh',
          backgroundColor: 'red',
          overflow: 'clip'
        }}
      ></motion.div>
      {/* <div>{children}</div> */}
    </>
  )
}
