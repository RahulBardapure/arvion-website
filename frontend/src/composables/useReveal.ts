import { onMounted, onUnmounted, ref, type Ref } from 'vue'

/** IntersectionObserver-based reveal. Respects prefers-reduced-motion via CSS. */
export function useReveal(options?: IntersectionObserverInit) {
  const el: Ref<HTMLElement | null> = ref(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const node = el.value
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('is-visible')
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer?.unobserve(node)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px', ...options },
    )

    observer.observe(node)
  })

  onUnmounted(() => observer?.disconnect())

  return el
}

/** Observe multiple children with staggered visibility via data-reveal */
export function useRevealGroup(options?: IntersectionObserverInit) {
  const root: Ref<HTMLElement | null> = ref(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const node = root.value
    if (!node) return

    const targets = Array.from(node.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((t) => t.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px', ...options },
    )

    targets.forEach((t) => observer?.observe(t))
  })

  onUnmounted(() => observer?.disconnect())

  return root
}
