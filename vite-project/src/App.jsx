import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MovieApi from './components/MovieApi'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <MovieApi/>
      <Footer/>
    </div>
  )
}

export default App
