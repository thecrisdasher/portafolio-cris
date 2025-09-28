'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Work = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Mello Trader | Plataforma De Trading',
      category: 'app',
      description: 'Plataforma fintech educativa completa con trading simulado en tiempo real, integración Binance API, comunicación instantánea via Socket.IO, sistema CRM académico y dashboard administrativo avanzado con autenticación 2FA.',
      image: '/Image/mellotrader-work.png',
      technologies: ['Next JS', 'React', 'Socket.IO', 'TypeScript', 'Binance API', 'PostgreSQL', 'Prisma', 'Shadcn UI'],
      liveUrl: 'https://bitpulse-frontend.fly.dev/',
      githubUrl: 'https://github.com/thecrisdasher/bitpulse-version-frontend',
      featured: true
    },
  {
      id: 2,
      title: 'Lazos De Cuidado | Home Care',
      category: 'web',
      description: 'Web corporativa integral para la empresa Lazos De Cuidado Home Care constituida logalmente en la ciudad de Cali, diseñada con atención al detalle y enfocada en ofrecer una experiencia de usuario profesional y confiable. Implementada con Next.js, React y Tailwind CSS, con componentes interactivos, animaciones suaves y optimización para rendimiento y accesibilidad.',
      image: '/Image/alivio-vital-work.png',
      technologies: ["Next JS", "React JS", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Radix UI", "Framer Motion", "React Hook Form", "Zod", "Lucide Icons"],
      liveUrl: 'https://lazosdecuidado.com',
      githubUrl: 'https://github.com/thecrisdasher/sutil-home',
      featured: true,
      inDevelopment: false
    },
    {
      id: 3,
      title: 'Tarot Sol y Luna',
      category: 'web',
      description: 'Landing Page para la empresa Tarot Sol y Luna.',
      image: '/Image/tarot-sol-work.jpg',
      technologies: ['React', 'Next JS', 'Tailwind', 'TypeScript  '],
      liveUrl: 'https://tarotlunaysol.com/',
      githubUrl: 'https://github.com/thecrisdasher/tarot-web',
      featured: false
    },
      {
      id: 4,
      title: 'Maestro Alaric',
      category: 'web',
      description: 'Landing Page para la empresa Maestro Alaric.',
      image: '/Image/work3.jpg',
      technologies: ['React', 'Next JS', 'Tailwind', 'TypeScript  '],
      liveUrl: 'https://www.maestroalaric.com/',
      githubUrl: 'https://github.com/thecrisdasher/amarres-web',
      featured: false
    },
    {
      id: 5,
      title: 'WorkWave | Sistema de Gestión de Practicas Laborales Para La Universidad Antonio José Camacho',
      category: 'app',
      description: 'Sistema de gestión de practicas laborales para la Universidad Antonio José Camacho, con sistema de login, registro, gestión de practicas, gestión de estudiantes, gestión de empresas, gestión de profesores, gestión de administradores.',
      image: '/Image/trabajo2.jpg',
      technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/thecrisdasher/WorkWaveSistemaDeGestionDePracticasLaborales',
      featured: false
    },
    // Proyectos en desarrollo
    {
      id: 6,
      title: 'Grupo Visionarios | Sistema Multinivel Avanzado con Integración Zoom y Analytics en Tiempo Real',
      category: 'dev',
      description: 'Plataforma full-stack desarrollada en Next.js 14 + TypeScript que implementa un sofisticado sistema de afiliados multinivel con estructura 3x3 y 12 niveles escalables. Integra sistema de capacitación multimedia, videollamadas automatizadas vía Zoom API, procesamiento de pagos dual (Stripe/PayU), analytics geolocalizado en tiempo real, y dashboard interactivo con visualización de árbol de referidos. Arquitectura enterprise con Prisma ORM, PostgreSQL, NextAuth.js y UI responsiva con Tailwind CSS + animaciones Framer Motion.',
      image: '/Image/grupovisionarios-work.jpg',
      technologies: ['React', 'Next.js', 'PostgreSQL', 'TypeScript', 'GraphQL', 'Prisma', 'NextAuth.js', 'Tailwind CSS', 'Framer Motion','Zoom API', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      inDevelopment: true
    },
    {
      id: 7,
      title: 'Transporte Nacional G&G',
      category: 'dev',
      description: 'Landing Page para la empresa Transporte Nacional G&G.',
      image: '/Image/transportegeneral-work1.png',
      technologies: ['React JS', 'Next JS', 'Parallax', 'Tailwind CSS', 'TypeScript', 'Shadcn UI', 'Zod', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      inDevelopment: true
    },
  ]

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Sitios Web' },
    { id: 'app', label: 'Aplicaciones' },
    { id: 'dev', label: 'En Desarrollo' },
    { id: 'design', label: 'Diseño' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

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
    <section id="work" className="section-padding bg-gray-900">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mi <span className="gradient-text">Trabajo Con Clientes</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Una selección de mis proyectos más recientes con clientes que demuestran 
            mi experiencia en desarrollo web y diseño de interfaces en el mundo real.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, _index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              className={`group relative overflow-hidden rounded-xl bg-gray-800 hover-glow ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.inDevelopment ? (
                    // "Próximamente" para proyectos en desarrollo
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="text-center"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-2xl"
                      >
                        <div className="w-10 h-10 bg-white/90 rounded-full"></div>
                      </motion.div>
                      <motion.h4 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="text-3xl font-bold text-white mb-2 drop-shadow-lg"
                      >
                        <span className="gradient-text">Próximamente!</span>
                      </motion.h4>
                      <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="text-gray-200 text-lg font-medium drop-shadow-md"
                      >
                        En desarrollo
                      </motion.p>
                    </motion.div>
                  ) : (
                    // Botones normales para proyectos completados
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  )}
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Destacado
                    </span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, _techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Te gusta lo que ves?
            </h3>
            <p className="text-gray-300 mb-6">
              Estos son solo algunos ejemplos de mi trabajo. Tengo muchos más 
              proyectos que me encantaría mostrarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary hover-glow">
                Ver Más Proyectos
              </button>
              <button className="btn-secondary hover-glow">
                Contactar
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Work