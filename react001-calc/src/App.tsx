//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Calculator from './components/components.tsx'


function App() {

  return (
    <main className='vw-100 vh-100' style={{ backgroundColor: '#807ECE' }}>
      <div className='container'>
        <Calculator />
      </div>
    </main>
  )
}

export default App
