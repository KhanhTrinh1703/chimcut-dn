import React from 'react'
import './App.scss'
import HomePage from './pages/homepage/homepage'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <HomePage />
      </div>
      <footer className="flex mt-auto text-white text-4xl justify-center">
        Made from us with love!
      </footer>
    </div>
  )
}

export default App
