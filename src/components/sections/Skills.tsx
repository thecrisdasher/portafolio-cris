'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Database, Server } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
      ]
    },
    {
      icon: Server,
      title: 'Backend',
      skills: [
        { name: 'Python/Django', level: 90 },
        { name: 'PHP/Laravel', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Java/SpringBoot', level: 75 },
      ]
    },
    {
      icon: Database,
      title: 'Base de Datos',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL Server', level: 75 },
      ]
    }
  ]

  const tools = [
    'Git & GitHub',
    'Docker',
    'AWS',
    'Vercel',
    'Figma',
    'VS Code',
    'Postman',
    'Linux'
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  }

  return (
    <section id="skills" className="section-padding bg-gray-900">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mis <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Dominio de lenguajes y frameworks principales con fuerte enfoque en 
            la optimización y análisis de datos para soluciones empresariales.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category, _categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl hover-glow"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, _skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                        variants={progressVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-8"
          >
            Herramientas & Tecnologías
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {tools.map((tool, _index) => (
              <motion.div
                key={tool}
                variants={itemVariants}
                className="glass-effect px-6 py-3 rounded-full hover-glow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-gray-300 font-medium">{tool}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center glass-effect p-8 rounded-xl"
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Experiencia Profesional
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Con más de 2 años de experiencia en desarrollo web, he trabajado en proyectos 
            que van desde sitios web corporativos hasta aplicaciones web complejas. 
            Mi experiencia incluye el desarrollo y consumo de APIs RESTful, optimización 
            de bases de datos y análisis de datos para soluciones empresariales.
          </p>
          
          <div className="mt-6">
            <button className="btn-secondary hover-glow">
              Ver Proyectos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 