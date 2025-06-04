'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '#hero', label: 'Inicio' },
    { href: '#about', label: 'Sobre Mí' },
    { href: '#skills', label: 'Skills' },
    { href: '#services', label: 'Servicios' },
    { href: '#work', label: 'Trabajos' },
    { href: '#testimonials', label: 'Testimonios' },
    { href: '#contact', label: 'Contacto' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-transparent">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="logo-container relative group">
            <motion.h1 
              className="text-2xl md:text-3xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="inline-block">
                <motion.span 
                  className="text-white hover:text-primary-500 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Mejor{' '}
                </motion.span>
                <motion.span 
                  className="text-gradient hover:text-primary-500 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Llama{' '}
                </motion.span>
                <motion.span 
                  className="text-white hover:text-primary-500 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  A{' '}
                </motion.span>
                <motion.span 
                  className="text-gradient hover:text-primary-500 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Cris
                </motion.span>
                <motion.span 
                  className="text-gradient hover:text-primary-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  !
                </motion.span>
              </span>
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="text-white/90 hover:text-primary-500 transition-colors duration-300 cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-900/80 backdrop-blur-sm"
        >
          <nav className="container-custom py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="block text-white/90 hover:text-primary-500 transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}

      <style jsx global>{`
        .text-gradient {
          background: linear-gradient(to right, #60A5FA, #3B82F6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .logo-container:hover .text-gradient {
          background: linear-gradient(to right, #93C5FD, #60A5FA);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          transition: all 0.3s ease;
        }
      `}</style>
    </header>
  )
}

export default Header 