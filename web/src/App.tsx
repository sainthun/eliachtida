import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MillPage } from './pages/MillPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mill" element={<MillPage />} />
      </Routes>
    </BrowserRouter>
  )
}
