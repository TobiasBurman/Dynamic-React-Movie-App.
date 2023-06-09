import { useState } from 'react'
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
