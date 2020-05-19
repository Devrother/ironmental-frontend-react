import { useState, useEffect } from 'react'

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
