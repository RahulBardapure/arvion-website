import type { Directive } from 'vue'

function observeRevealRoot(el: HTMLElement) {
  const targets = Array.from(el.querySelectorAll<HTMLElement>('[data-reveal]'))
  if (!targets.length) return () => {}

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach((t) => t.classList.add('is-visible'))
    return () => {}
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
  )

  targets.forEach((t) => observer.observe(t))
  return () => observer.disconnect()
}

/** Staggered scroll reveal for descendants with [data-reveal] */
export const vRevealGroup: Directive<HTMLElement> = {
  mounted(el) {
    ;(el as HTMLElement & { __revealCleanup?: () => void }).__revealCleanup = observeRevealRoot(el)
  },
  unmounted(el) {
    ;(el as HTMLElement & { __revealCleanup?: () => void }).__revealCleanup?.()
  },
}
