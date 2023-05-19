import React from 'react'
import { Navbar, Hero, Features, Loan, WorkHard, Find, Testimonials, HowItWorks, Faqs, JoinUs, About, Footer } from './components'


const App = () => {
  return (
    <div className={`bg-[var(--bg-color)]`}>
      <div className={`fixed w-full top-0`}>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Features />
        <Loan />
      </div>
    </div>
  )
}

export default App