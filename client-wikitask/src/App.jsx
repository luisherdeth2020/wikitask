import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Task from './containers/Task'
import Footer from './containers/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Task></Task>
      <Footerter></Footer>
    </div>
  )
}

export default App
