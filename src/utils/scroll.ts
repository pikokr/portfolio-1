import { gsap, Cubic } from 'gsap'

export const scrollToAnchor = (id: string) => {
  const anchor = document.getElementById(id)

  if (!anchor) return console.warn(`Cannot find #${id}`)

  gsap.to(window.simplebar.getScrollElement(), {
    duration: 1,
    scrollTo: {
      y: anchor
    },
    ease: Cubic.easeOut
  })
}
