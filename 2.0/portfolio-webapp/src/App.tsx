import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-7xl mx-auto p-8 text-center flex-col justify-center content-center w-max'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className='color' alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" >
          <img src={reactLogo} className='h-24' alt="React logo" />
        </a>
      </div>
      <h1 className=''>Vite + React</h1>
      <div className='p-8'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
