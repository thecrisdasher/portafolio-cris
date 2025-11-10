'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink, Code2, Rocket, Zap } from 'lucide-react'
import Image from 'next/image'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const technologies = [
    'React.js',
    'Next.js', 
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'Material UI',
    'Docker',
  ]

  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Desarrollo end-to-end de SaaS web de la startup'
    },
    {
      icon: Rocket,
      title: 'Arquitectura Escalable',
      description: 'Diseño de soluciones robustas y mantenibles'
    },
    {
      icon: Zap,
      title: 'Optimización',
      description: 'Performance y mejores prácticas'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="experience" className="section-padding bg-gray-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}  
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl group">
              {/* Main Image Container */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/Image/flowheel_logo.jpg"
                  alt="Floloop - Software Development Company"
                  width={400}
                  height={400}
                  quality={100}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Hover Overlay with Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href="https://floloop.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full text-white hover:from-teal-600 hover:to-cyan-600 transition-colors duration-300 shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>

                {/* Floating Decorative Elements - INSIDE image container */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-teal-500/30 rounded-full blur-xl animate-pulse pointer-events-none"></div>
                <div className="absolute bottom-6 left-4 w-16 h-16 bg-cyan-500/30 rounded-full blur-lg animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }}></div>
                
                {/* Floating Badge - Status - INSIDE image container */}
                <motion.div
                  className="absolute bottom-4 right-4 glass-effect rounded-xl p-4 border border-teal-500/30 shadow-2xl pointer-events-none z-20"
                  animate={{ 
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="text-left">
                      <div className="text-xs text-gray-300 font-medium">Activo</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge - Company Icon - INSIDE image container */}
                <motion.div
                  className="absolute top-4 left-4 bg-gradient-to-br from-teal-500 to-cyan-500 backdrop-blur-sm rounded-full p-3 shadow-lg pointer-events-none z-20"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Briefcase className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm animate-gradient-xy"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-6 order-1 lg:order-2">
            <div>
              {/* Company Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 mb-4"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary-400">Experiencia Actual</span>
              </motion.div>

              {/* Company Name */}
              <h3 className="text-4xl md:text-5xl font-bold mb-3">
                <span className="text-white text-shadow drop-shadow-lg">
                  Flo
                </span>
                <span 
                  className="bg-gradient-to-r from-teal-400 via-cyan-500 to-emerald-400 bg-clip-text text-transparent"
                  style={{
                    backgroundSize: '200% 200%',
                    animation: 'gradient-shift 3s ease-in-out infinite'
                  }}
                >
                  Loop
                </span>
              </h3>

              {/* Position */}
              <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Software Developer Full Stack
              </h4>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">2025 - Actualidad</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Las Vegas, NV - Remoto</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                Desarrollo de SaaS web full stack utilizando el ecosistema JavaScript moderno. 
                Especializado en crear soluciones escalables con React, Next.js y Node.js, implementando 
                arquitecturas robustas y siguiendo las mejores prácticas de desarrollo.
              </p>

              {/* Highlights */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="glass-effect p-4 rounded-lg hover-glow group"
                    whileHover={{ y: -5 }}
                  >
                    <highlight.icon className="w-6 h-6 text-primary-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <h5 className="text-sm font-semibold text-white mb-1">{highlight.title}</h5>
                    <p className="text-xs text-gray-400">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary-500" />
                Stack Tecnológico
              </h5>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="glass-effect px-4 py-2 rounded-lg hover-glow"
                  >
                    <span className="text-sm font-medium text-gray-300">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
