import { useState, useEffect, useLayoutEffect } from 'react'

export const useAnimationTrigger = (
  observerEl: React.RefObject<HTMLElement>
) => {
  const [animationTrigger, setAnimationTrigger] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const target = entries[0]
      if (target.isIntersecting) {
        setAnimationTrigger(true)
        observer.unobserve(observerEl.current as Element)
      }
    })

    observer.observe(observerEl.current as Element)
  })

  return animationTrigger
}

export const useLockBodyScroll = () => {
  useLayoutEffect((): (() => void) => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden'
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle)
  }, []) // Empty array ensures effect is only run on mount and unmount
}
