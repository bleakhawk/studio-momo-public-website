import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import BrandValues from './components/BrandValues'
import SignUp from './components/SignUp'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Features />
      <BrandValues />
      <SignUp />
      <Footer />
    </div>
  )
}

export default App
