import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Mandoo from './components/Mandoo'
import Counter from './components/Counter'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/mandoo' element={<Mandoo />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
