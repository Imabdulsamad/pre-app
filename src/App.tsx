import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-500 p-4 border-8 rounded-4xl text-2xl-bold text-amber-100'>Hello Guys </h1>
      <p className='mb-10 text-7xl text-amber-200 '>My name is Abdul Samad</p>
    </>
  ) 
}

export default App
