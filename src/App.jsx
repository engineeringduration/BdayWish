import BirthdayWisher from './components/BirtDayWisher'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BallonEffect from './components/balloneffect'
import './styles./BirthdayWish.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BirthdayWisher/>
      <BallonEffect/>
    </>
  )
}

export default App
