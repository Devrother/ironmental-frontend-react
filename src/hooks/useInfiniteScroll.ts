import { useEffect } from 'react'

export const useInfiniteScroll = ({
  target,
  onIntersect,
  threshold = 0,
  rootMargin = '0px',
}: {
  target: React.RefObject<HTMLElement>
  onIntersect: IntersectionObserverCallback
  threshold?: number
  rootMargin?: string
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold,
    })

    if (!target) {
      return
    }

    observer.observe(target.current as Element)

    return () => {
      observer.unobserve(target.current as Element)
    }
  }, [target, rootMargin, onIntersect, threshold])
}
