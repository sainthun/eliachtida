import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { I18nProvider } from './i18n/I18nProvider'
import { HomePage } from './pages/HomePage'
import { MillPage } from './pages/MillPage'

export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mill" element={<MillPage />} />
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  )
}
