import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'
import FirstClassPage from './pages/FristClassFlight'
import FirstClassLanding from './pages/FirstClassLanding'

function App() {
 
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/frist-class-flight" element={<FirstClassPage />} />
          <Route path="/business-class-flight" element={<FirstClassLanding />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
