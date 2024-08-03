'use client'
import { motion } from 'framer-motion'

const Template = ({ children }: { children: React.ReactNode }) => {
  const animation = (variants: any) => {
    return {
      initial: 'initial',
      animate: 'enter',
      exit: 'exit',
      variants
    }
  }

  const perspective = {
    initial: {
      y: -100
    },
    enter: {
      y: 0
    },
    exit: {
      y: -100,
      transition: {
        duration: 1,
        ease: [0.76, 1, 0.24, 1]
      }
    }
  }

  const slide = {
    initial: {
      top: '100vh'
    },
    enter: {
      top: '100vh'
    },
    exit: {
      top: '0',
      transition: {
        duration: 1,
        ease: [0.76, 1, 0.24, 1]
      }
    }
  }

  const slideIn = {
    initial: {
      top: '0'
    },
    enter: {
      top: '100vh'
    },
    exit: {
      top: '100vh'
    }
  }

  return (
    <>
      <motion.div
        className='slide-boject bg-orange-500'
        {...animation(slideIn)}
      />
      <motion.div
        className='slide-boject bg-orange-500'
        {...animation(slide)}
      />
      <motion.div {...animation(perspective)}>{children}</motion.div>
    </>
  )
}
export default Template
