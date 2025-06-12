import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import TicTacTo from './components/tictacto'
import UseApi from './components/UseApi'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/tictacto' element={<TicTacTo />} />
        <Route path='use-api' element={<UseApi />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
