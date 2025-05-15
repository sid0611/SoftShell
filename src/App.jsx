import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import ThemeToggle from './components/ThemeToggle'
import ChatWidget from './components/ChatWidget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-sans">
      <Hero />
      <ThemeToggle />
      <HowItWorks />
      <WhyChooseUs/>
      <Testimonials />
      <ContactForm />
      <ChatWidget />

    </div>
  )
}

export default App
