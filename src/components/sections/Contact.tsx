'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({ show: false, message: '', type: 'success' })

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mejorllamaacris@gmail.com',
      link: 'mailto:mejorllamaacris@gmail.com'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+57 305 3749314',
      link: 'tel:+573053749314'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Colombia',
      link: '#'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ show: true, message, type })
    setTimeout(() => {
      setNotification({ show: false, message: '', type: 'success' })
    }, 5000)
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '+573053749314'
    const message = encodeURIComponent('¡Hola! Me gustaría hablar contigo sobre un proyecto. ¿Podrías ayudarme?')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const handleScheduleMeeting = () => {
    // Puedes cambiar esta URL por tu enlace de Calendly, Google Calendar, o cualquier otra plataforma
    const calendarUrl = 'https://calendly.com/tu-usuario/30min' // Reemplaza con tu enlace real
    window.open(calendarUrl, '_blank')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/mzzvvnqq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        showNotification('¡Mensaje enviado exitosamente! Te contactaré pronto.', 'success')
      } else {
        throw new Error('Error al enviar el mensaje')
      }
    } catch (error) {
      console.error('Error:', error)
      showNotification('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
    <section id="contact" className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Notification */}
      {notification.show && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.8 }}
          className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4"
        >
          <div className={`glass-effect p-4 rounded-xl border-l-4 ${
            notification.type === 'success' 
              ? 'border-green-500 bg-green-500/10' 
              : 'border-red-500 bg-red-500/10'
          }`}>
            <div className="flex items-center space-x-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
              }`}>
                {notification.type === 'success' ? (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <p className="text-white font-medium flex-1">{notification.message}</p>
              <button
                onClick={() => setNotification({ show: false, message: '', type: 'success' })}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
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
            Hablemos de tu <span className="gradient-text">Proyecto</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            ¿Tienes una idea increíble? Me encantaría escucharla y ayudarte a 
            convertirla en realidad. Contacta conmigo y comencemos a trabajar juntos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de Contacto
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Estoy disponible para nuevos proyectos y colaboraciones. 
                No dudes en contactarme a través de cualquiera de estos medios.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, _index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  variants={itemVariants}
                  className="flex items-center p-4 glass-effect rounded-xl hover-glow transition-all duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-lg mr-4 group-hover:bg-primary-500/30 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Acciones Rápidas</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="btn-primary inline-flex items-center space-x-2 hover-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </motion.button>
                <motion.button
                  onClick={handleScheduleMeeting}
                  className="btn-secondary inline-flex items-center space-x-2 hover-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar size={20} />
                  <span>Agendar Reunión</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Envíame un Mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                      placeholder="Tu nombre"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                      placeholder="tu@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary inline-flex items-center justify-center space-x-2 hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact