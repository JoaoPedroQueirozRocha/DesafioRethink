import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cadastrar from './components/cadastro'
import MainScreen from './components/MainScreen'
import {Routes, Route} from 'react-router-dom'
import ManipularDados from './components/manipularDados'

function App() {
  return(

  <div>
  <Routes>
    <Route path='/' element={<MainScreen/>}></Route>
    <Route path="/form" element={<Cadastrar/>}></Route>
    <Route path='/manipular' element={<ManipularDados/>}></Route>
  </Routes>
  </div>
  )
}

export default App
