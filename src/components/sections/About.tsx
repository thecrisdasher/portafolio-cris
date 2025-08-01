'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, Award, Users, Coffee, Star, Code, Zap } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Award, value: '2+', label: 'Años de Experiencia' },
    { icon: Users, value: '10', label: 'Proyectos Completados' },
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
    <section id="about" className="section-padding bg-gray-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-custom relative z-10" ref={ref}>
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
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src="/Image/img1.jpg"
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
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-24 h-24 bg-primary-500/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-8 left-4 w-20 h-20 bg-secondary-500/30 rounded-full blur-lg" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
              </motion.div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm animate-gradient-xy"></div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              variants={itemVariants}
              className="absolute -bottom-6 -right-6 glass-effect rounded-xl p-6 border border-primary-500/30 shadow-2xl hover-glow"
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
              className="absolute -top-6 -left-6 bg-gradient-to-br from-secondary-500 to-primary-500 backdrop-blur-sm rounded-full p-4 shadow-lg"
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
              <Award className="w-7 h-7 text-white" />
            </motion.div>
            
            {/* Code Badge */}
            <motion.div
              variants={itemVariants}
              className="absolute top-1/4 -right-4 bg-gradient-to-br from-primary-500 to-secondary-500/80 backdrop-blur-sm rounded-full p-3 shadow-lg"
              animate={{ 
                y: [0, -8, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Code className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gray-700/50 rounded-full pl-2 pr-4 py-1 mb-4 border border-gray-600/50"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-500/20">
                  <Star className="w-4 h-4 text-primary-500" />
                </span>
                <span className="text-sm text-gray-300">Desarrollador Full Stack</span>
              </motion.div>
              
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Sobre <span className="gradient-text">Mí</span>
              </motion.h2>
              <motion.h3
                variants={itemVariants}
                className="text-xl text-secondary-500 mb-6 font-medium"
              >
                ¡Que Más Parcero! Soy Cristian Carabali
              </motion.h3>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 leading-relaxed text-lg glass-effect p-4 rounded-lg"
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
            <motion.div variants={itemVariants} className="space-y-4 glass-effect p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-primary-500 mr-2" />
                Especialidades:
              </h4>
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
                    className="flex items-center space-x-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-300"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    ></motion.div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-6">
             <a href="/DESARROLLADORFULLSTACKTECNOLOGOENSISTEMAS-CV CRISTIAN CARABALI.pdf" download>
              <motion.button 
                className="btn-primary inline-flex items-center space-x-2 hover-glow relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button shine effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                <Download size={20} />
                <span>Descargar CV</span>
              </motion.button>
              </a>
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
              className="text-center glass-effect p-8 rounded-xl hover-glow group relative overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Circles decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500/10 rounded-full translate-x-1/2 -translate-y-1/2 filter blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary-500/10 rounded-full -translate-x-1/2 translate-y-1/2 filter blur-lg"></div>
              
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-full mb-4 group-hover:from-primary-500/50 group-hover:to-secondary-500/50 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div 
                className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About 