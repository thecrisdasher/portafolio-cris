'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Work = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de inventario.',
      image: '/Image/trabajo1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Corporate Website',
      category: 'web',
      description: 'Sitio web corporativo moderno con CMS personalizado y optimización SEO.',
      image: '/Image/trabajo2.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Sanity'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management App',
      category: 'app',
      description: 'Aplicación web para gestión de tareas con colaboración en tiempo real.',
      image: '/Image/work3.jpg',
      technologies: ['React', 'Firebase', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'web',
      description: 'Sitio web para restaurante con sistema de reservas y menú digital.',
      image: '/Image/work4.jpg',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Sitios Web' },
    { id: 'app', label: 'Aplicaciones' },
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
            Mi <span className="gradient-text">Trabajo</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Una selección de mis proyectos más recientes que demuestran 
            mi experiencia en desarrollo web y diseño de interfaces.
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
          {filteredProjects.map((project, index) => (
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
                  {project.technologies.map((tech, techIndex) => (
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