'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import FrozenRoute from './FrozenRoute'

interface PageAnimatePresenceProps {
  children: React.ReactNode
}

const PageAnimatePresence = ({ children }: PageAnimatePresenceProps) => {
  const pathname = usePathname()

  return (
    <AnimatePresence mode='wait'>
      {/**
       * We use `motion.div` as the first child of `<AnimatePresence />` Component so we can specify page animations at the page level.
       * The `motion.div` Component gets re-evaluated when the `key` prop updates, triggering the animation's lifecycles.
       * During this re-evaluation, the `<FrozenRoute />` Component also gets updated with the new route components.
       */}
      <motion.div key={pathname}>
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  )
}

export default PageAnimatePresence
