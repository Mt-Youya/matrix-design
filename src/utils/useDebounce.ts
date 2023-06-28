import { useState, useEffect } from "react"

export default function useDebounce<T>(value: T, delay: number) {
  const [debouceValue, setDebouceValue] = useState(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouceValue(value)
    }, delay)
    return () => clearTimeout(timeoutId)
  }, [value])

  return debouceValue
}
