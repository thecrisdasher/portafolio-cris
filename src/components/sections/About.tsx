'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, Award, Users, Coffee } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Award, value: '3+', label: 'Años de Experiencia' },
    { icon: Users, value: '50+', label: 'Proyectos Completados' },
    { icon: Coffee, value: '1000+', label: 'Tazas de Café' },
  ]

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
    <section id="about" className="section-padding bg-gray-800/50">
      <div className="container-custom" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative overflow-hidden rounded-2xl group">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-500/10 to-transparent z-0"></div>
              
              {/* Main Image */}
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src="/Image/cristian-carabali-img.png"
                  alt="Cristian Carabali - Desarrollador Full Stack"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-full h-[500px] object-cover object-center rounded-2xl"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-8 left-4 w-16 h-16 bg-secondary-500/20 rounded-full blur-lg"></div>
              </motion.div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              variants={itemVariants}
              className="absolute -bottom-6 -right-6 bg-gray-900/90 backdrop-blur-lg rounded-xl p-6 border border-primary-500/30 shadow-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-1">3+</div>
                <div className="text-sm text-gray-300">Años de</div>
                <div className="text-sm text-gray-300">Experiencia</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-xl -z-10"></div>
            </motion.div>

            {/* Floating Achievement Badge */}
            <motion.div
              variants={itemVariants}
              className="absolute -top-4 -left-4 bg-secondary-500/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
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
              <Award className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Sobre <span className="gradient-text">Mí</span>
              </motion.h2>
              <motion.h3
                variants={itemVariants}
                className="text-xl text-secondary-500 mb-6"
              >
                ¡Que Más Parcero! Soy Cristian Carabali
              </motion.h3>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 leading-relaxed text-lg"
            >
              Soy un desarrollador web apasionado por la creación de soluciones digitales 
              para negocios y empresas. Con experiencia en tecnología en sistemas, 
              desarrollo web y soporte en redes, me especializo en el diseño y desarrollo 
              de sitios web funcionales, modernos y optimizados para el crecimiento de mis clientes.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 leading-relaxed"
            >
              Mi enfoque se centra en crear experiencias de usuario excepcionales 
              utilizando las tecnologías más actuales como React, Next.js, Python y 
              frameworks modernos que garantizan rendimiento y escalabilidad.
            </motion.p>

            {/* Skills Highlights */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Especialidades:</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Desarrollo Frontend',
                  'Desarrollo Backend',
                  'Bases de Datos',
                  'APIs RESTful',
                  'UI/UX Design',
                  'Optimización Web'
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    className="flex items-center space-x-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-primary-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    ></motion.div>
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-6">
              <motion.button 
                className="btn-primary inline-flex items-center space-x-2 hover-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Descargar CV</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center glass-effect p-6 rounded-xl hover-glow group"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-full mb-4 group-hover:bg-primary-500/30 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8 text-primary-500" />
              </motion.div>
              <motion.div 
                className="text-3xl font-bold text-white mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About 