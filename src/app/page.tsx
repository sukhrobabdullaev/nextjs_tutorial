'use client'

import Image from "next/image"
import { useState } from 'react'

export default function Home() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h1>Hello world!</h1>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(prev => prev + 1)}>Click</button>
    </div>
  )
}
