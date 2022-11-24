import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cadastrar from './components/cadastro'
import MainScreen from './components/MainScreen'
import {Routes, Route} from 'react-router-dom'
import ManipularDados from './components/manipularDados'
import Pesquisar from './components/pesquisar'
import Retornar from './components/retornar'
import InserirId from './components/inserirID'
import IdadeMaior from './components/idadeParaCarteira'
import Media from './components/media'

function App() {
  return(

  <div>
  <Routes>
    <Route path='/' element={<MainScreen/>}></Route>
    <Route path="/form" element={<Cadastrar/>}></Route>
    <Route path='/manipular' element={<ManipularDados/>}></Route>
    <Route path='/pesquisar' element={<Pesquisar/>}></Route>
    <Route path='/retornar' element={<Retornar/>}></Route>
    <Route path='/inserirID' element={<InserirId/>}></Route>
    <Route path='/CNH' element={<IdadeMaior/>}></Route>
    <Route path='/media' element={<Media/>}></Route>
  </Routes>
  </div>
  )
}

export default App
