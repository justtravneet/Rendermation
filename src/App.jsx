import { useState } from 'react'

import './App.css'
import Landingpage from './Pages/Landingpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Landingpage />
    </>
  )
}

export default App
