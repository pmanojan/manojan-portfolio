import { useState, useEffect } from 'react'

export function useTypewriter(texts: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [index, setIndex] = useState(0)
  const [char, setChar] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index]
    let timeout: number

    if (!deleting && char < current.length) {
      timeout = window.setTimeout(() => {
        setDisplay(current.slice(0, char + 1))
        setChar(c => c + 1)
      }, speed)
    } else if (!deleting && char === current.length) {
      timeout = window.setTimeout(() => setDeleting(true), pause)
    } else if (deleting && char > 0) {
      timeout = window.setTimeout(() => {
        setDisplay(current.slice(0, char - 1))
        setChar(c => c - 1)
      }, speed / 2)
    } else if (deleting && char === 0) {
      setDeleting(false)
      setIndex(i => (i + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [char, deleting, index, texts, speed, pause])

  return display
}
