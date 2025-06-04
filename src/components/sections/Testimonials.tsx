'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      position: 'CEO, TechStart',
      company: 'TechStart Solutions',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Cristian transformó completamente nuestra presencia digital. Su atención al detalle y conocimiento técnico son excepcionales. El sitio web que desarrolló superó todas nuestras expectativas.',
      project: 'Plataforma E-commerce'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      position: 'Director de Marketing',
      company: 'Innovate Corp',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Trabajar con Cristian fue una experiencia increíble. No solo entregó un producto de alta calidad, sino que también nos guió durante todo el proceso con profesionalismo y creatividad.',
      project: 'Aplicación Web Corporativa'
    },
    {
      id: 3,
      name: 'Ana Martínez',
      position: 'Fundadora',
      company: 'Creative Studio',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'La capacidad de Cristian para convertir ideas complejas en soluciones elegantes y funcionales es impresionante. Definitivamente recomendaría sus servicios.',
      project: 'Portfolio Digital'
    },
    {
      id: 4,
      name: 'Luis Hernández',
      position: 'CTO',
      company: 'DataFlow Systems',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Cristian demostró un dominio excepcional de las tecnologías modernas. Su código es limpio, eficiente y escalable. Un verdadero profesional.',
      project: 'Sistema de Gestión'
    }
  ]

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [nextTestimonial])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="testimonials" className="section-padding bg-gray-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo que dicen mis <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            La satisfacción de mis clientes es mi mayor motivación. 
            Aquí tienes algunas de sus experiencias trabajando conmigo.
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="glass-effect p-8 md:p-12 rounded-2xl relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 text-primary-500/30">
                  <Quote size={48} />
                </div>

                {/* Testimonial Content */}
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mb-8 italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          {testimonials[currentIndex].name.charAt(0)}
                        </span>
                      </div>
                      <div className="text-center md:text-left">
                        <h4 className="text-white font-semibold text-lg">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-gray-400">
                          {testimonials[currentIndex].position}
                        </p>
                        <p className="text-primary-500 text-sm">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block w-px h-16 bg-gray-600"></div>
                    
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Proyecto:</p>
                      <p className="text-white font-medium">
                        {testimonials[currentIndex].project}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 bg-gray-700 hover:bg-primary-500 rounded-full text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="p-3 bg-gray-700 hover:bg-primary-500 rounded-full text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary-500 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { number: '50+', label: 'Clientes Satisfechos' },
            { number: '100%', label: 'Proyectos Completados' },
            { number: '5★', label: 'Calificación Promedio' }
          ].map((stat, _index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center glass-effect p-6 rounded-xl hover-glow"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 