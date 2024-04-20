import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { DuckBody } from './components/DuckBody';

const App = () => {
  return (
    <div className = 'App'>
      <Header/>
      <Routes>
        <Route index element={<h1>HOME PAGE</h1>}/>
        <Route path={'/something'} element={<h1>SOMETHING PAGE</h1>}/>
        <Route path={'/duck'} element={<DuckBody/>}/>
      </Routes>
    </div>
  )
}

export default App
