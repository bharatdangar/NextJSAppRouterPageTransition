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
      scale: 0.8
    },
    enter: {
      scale: 1
    },
    exit: {
      scale: 0.8,
      opacity: 0.5,
      transition: {
        duration: 1,
        delay: 0.4,
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
        delay: 0.2,
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
      top: '0',
      transition: {
        duration: 1,
        ease: [0.76, 1, 0.24, 1]
      }
    }
  }

  return (
    <>
      <motion.div
        className='slide-object fixed inset-0 z-10 h-dvh bg-orange-500'
        {...animation(slideIn)}
      />
      <motion.div
        className='slide-object fixed inset-0 z-20 h-dvh bg-red-500'
        {...animation(slide)}
      />
      <motion.div {...animation(perspective)}>{children}</motion.div>
    </>
  )
}
export default Template
