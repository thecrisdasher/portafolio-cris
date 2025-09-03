'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Palette, Code, Smartphone, Database, Globe, Zap, Target } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Palette,
      title: 'Diseño Web',
      description: 'Manejo tecnologías actuales como React, JavaScript, HTML y CSS para crear sitios web modernos y atractivos, con un enfoque en la experiencia del usuario.',
      features: ['UI/UX Design', 'Responsive Design', 'Prototipado', 'Branding']
    },
    {
      icon: Code,
      title: 'Desarrollo Frontend',
      description: 'Desarrollo de interfaces de usuario modernas y responsivas utilizando las últimas tecnologías y frameworks para garantizar una experiencia excepcional.',
      features: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Animaciones']
    },
    {
      icon: Database,
      title: 'Desarrollo Backend',
      description: 'Creación de APIs robustas y escalables, gestión de bases de datos y arquitectura de servidores para aplicaciones web complejas.',
      features: ['APIs RESTful', 'Base de Datos', 'Autenticación', 'Optimización']
    },
    {
      icon: Target,
      title: 'Marketing Digital',
      description: 'Maximiza tu visibilidad online y genera clientes potenciales con estrategias de publicidad digital efectivas adaptadas a tus objetivos y presupuesto.',
      features: ['Google Ads', 'Facebook Ads', 'Estrategias SEO/SEM', 'Análisis de Conversión']
    },
    {
      icon: Smartphone,
      title: 'Aplicaciones Web',
      description: 'No solo me dedico a hacer sitios web, también creo aplicaciones web con tecnologías como Next JS, React, TypeScript y Django con funcionalidades avanzadas.',
      features: ['PWA', 'SPA', 'Funcionalidades Avanzadas', 'Escalabilidad']
    },
    {
      icon: Globe,
      title: 'Optimización Web',
      description: 'Mejoro el rendimiento, velocidad y SEO de sitios web existentes para garantizar la mejor experiencia de usuario y posicionamiento.',
      features: ['SEO', 'Performance', 'Accesibilidad', 'Analytics']
    },
    {
      icon: Zap,
      title: 'Mantenimiento',
      description: 'Ofrezco mantenimiento y soporte técnico continuo para garantizar el correcto funcionamiento y actualización de cada plataforma.',
      features: ['Soporte 24/7', 'Actualizaciones', 'Backup', 'Monitoreo']
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
    <section id="services" className="section-padding bg-gray-800/50">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mis <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Ofrezco desarrollo de sitios web corporativos y tiendas en línea con diseños 
            atractivos y funcionales, optimización de velocidad y seguridad para un 
            rendimiento eficiente, integración con bases de datos y sistemas empresariales.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, _index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group glass-effect p-6 rounded-xl hover-glow transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-xl mb-6 group-hover:bg-primary-500/30 transition-colors duration-300"
                whileHover={{ rotate: 5 }}
              >
                <service.icon className="w-8 h-8 text-primary-500" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.8 + featureIndex * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full"></div>
                    <span className="text-sm text-gray-400">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para comenzar tu proyecto?
            </h3>
            <p className="text-gray-300 mb-6">
              Trabajemos juntos para crear algo increíble. Contacta conmigo 
              para discutir tu proyecto y cómo puedo ayudarte a alcanzar tus objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary hover-glow">
                Iniciar Proyecto
              </button>
              <button className="btn-secondary hover-glow">
                Ver Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 