interface transitionType {
  delay?: number
  type: string
  duration: number
  damping?: number
  stiffness?: number
  restDelta?: number
  delayChildren?: number
}
export const transition: transitionType = { type: "spring", duration: 0.8 }

interface animationProps {
  x?: number
  y?: number
  opacity?: number
  transition?: transitionType
}
interface slideAnimationType {
  initial: animationProps
  animate: animationProps
  exit: animationProps
}
type directionType = "left" | "right" | "up" | "down"
export const slideAnimation = (direction: directionType): slideAnimationType => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 }
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 }
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 }
    }
  }
}

interface fadeType {
  initial: animationProps
  animate: animationProps
  exit: animationProps
}
export const fadeAnimation: fadeType = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 }
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 }
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 }
  }
}

interface AnimationType {
  initial: animationProps
  animate: animationProps
  transition?: transitionType
  exit?: animationProps
}
export const headTextAnimation: AnimationType = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3
  }
}

export const headContentAnimation: AnimationType = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2
  }
}

export const headContainerAnimation: AnimationType = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
}
