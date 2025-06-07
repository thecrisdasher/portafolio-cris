'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, Heart, ArrowUp } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/thecrisdasher', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/thecrisxo/', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/cristianda23', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/cristian-david-carabali/', label: 'LinkedIn' },
  ]

  const quickLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Servicios', href: '#services' },
    { name: 'Trabajos', href: '#work' },
    { name: 'Contacto', href: '#contact' },
  ]

  const services = [
    'Desarrollo Web',
    'Diseño UI/UX',
    'Aplicaciones Web',
    'Optimización SEO',
    'Mantenimiento',
    'Consultoría'
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Brand with Image */}
              <div className="flex items-center space-x-4">
                <motion.div
                  className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-500/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/Image/cristian-carabali-img.png"
                    alt="Cristian Carabali"
                    width={96}
                    height={96}
                    quality={100}
                    className="w-full h-full object-cover object-center"
                    sizes="48px"
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">CRIS</h3>
                  <p className="text-xs text-gray-400">Desarrollador Full Stack</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Desarrollador Full Stack apasionado por crear soluciones 
                digitales innovadoras que transforman ideas en realidad.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={18} className="text-primary-500" />
                  <span>mejorllamaacris@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={18} className="text-primary-500" />
                  <span>+57 316 3314375</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, _index) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(link.href)
                      }}
                      className="text-gray-300 hover:text-primary-500 transition-colors duration-300 cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Servicios</h4>
              <ul className="space-y-3">
                {services.map((service, _index) => (
                  <li key={service}>
                    <motion.span
                      className="text-gray-300 hover:text-primary-500 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {service}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Mantente Conectado</h4>
                <p className="text-gray-300 mb-4">
                  Sígueme en redes sociales para ver mis últimos proyectos y actualizaciones.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, _index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>

              {/* Newsletter */}
              <div className="glass-effect p-4 rounded-lg">
                <p className="text-sm text-gray-300 mb-3">¿Proyecto en mente?</p>
                <motion.button
                  className="btn-primary w-full text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('#contact')}
                >
                  Hablemos
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              © {currentYear} Cristian Carabali. Hecho con{' '}
              <Heart className="inline w-4 h-4 text-red-500 mx-1" />
              en Colombia
            </motion.p>

            <div className="flex items-center space-x-6">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-primary-500 text-sm transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Política de Privacidad
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-primary-500 text-sm transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Términos de Uso
              </motion.a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary-500 hover:bg-primary-600 rounded-full text-white shadow-lg hover-glow z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer 