import React from 'react'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Services from '@/components/sections/Services'
import Work from '@/components/sections/Work'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
} 