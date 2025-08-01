'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ['Desarrollador Web', 'Diseñador Web', 'Programador Full Stack']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [roles.length])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/thecrisdasher', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/thecrisxo/', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/cristianda23', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/cristian-david-carabali', label: 'LinkedIn' },
  ]

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-secondary-500 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full filter blur-2xl opacity-60"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
          {/* Image Section - More prominent and to the left */}
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative">
              {/* Enhanced Background Effects */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-[420px] h-[420px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-radial"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.5, 1]
                  }}
                />
              </div>

              {/* Main image container */}
              <motion.div
                className="relative z-10 w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-2xl border-gradient"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden relative"
                     style={{ margin: '4px', width: 'calc(100% - 8px)', height: 'calc(100% - 8px)' }}>
                  <Image
                    src="/Image/cristian-carabali-img.png?v=2024"
                    alt="Cristian Carabali - Desarrollador Full Stack"
                    width={1000}
                    height={1000}
                    quality={90}
                    className="w-full h-full object-cover object-center"
                    priority
                    loading="eager"
                    sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
                  />
                </div>
              </motion.div>

              {/* Enhanced floating decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full shadow-2xl"
                animate={{ 
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-full shadow-2xl opacity-80"
                animate={{ 
                  x: [0, 15, 0],
                  scale: [1, 1.1, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>

              <motion.div
                className="absolute top-1/3 -left-12 w-8 h-8 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full shadow-lg"
                animate={{ 
                  y: [0, 20, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              ></motion.div>

              <motion.div
                className="absolute bottom-1/3 -right-10 w-10 h-10 bg-gradient-to-bl from-primary-400 to-secondary-400 rounded-full shadow-lg"
                animate={{ 
                  x: [0, -10, 0],
                  opacity: [0.7, 1, 0.7],
                  rotate: [0, 90, 180]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 space-y-4 text-center lg:text-left order-1 lg:order-2 flex flex-col justify-center pt-16 lg:pt-0 mt-8"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-300 mb-0"
            >
              Hola, Soy
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.7,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 mt-0 relative select-none"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-white"
              >
                Cristian{' '}
              </motion.span>
              <motion.div 
                className="inline-block relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <motion.span 
                  className="inline-block text-blue-500 animate-gradient"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  Carabali,
                </motion.span>
              </motion.div>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="h-12 md:h-16 flex items-center justify-center lg:justify-start mb-6"
            >
              <motion.h2
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-3xl lg:text-4xl font-semibold text-secondary-500"
              >
                {roles[currentRole]}
              </motion.h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8"
            >
              Especializado en crear soluciones digitales modernas y funcionales 
              para empresas y negocios, con experiencia en tecnologías de vanguardia.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="mb-8"
            >
              <motion.button
                onClick={scrollToAbout}
                className="btn-primary text-lg px-8 py-4 hover-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Mi Trabajo
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                >
                  <social.icon size={30} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 mt-36"
        >
          <motion.button
            onClick={scrollToAbout}
            className="text-white/50 hover:text-primary-500 transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>

      <style jsx global>{`
        .animate-gradient {
          background: linear-gradient(
            to right,
            #3B82F6,
            #60A5FA,
            #93C5FD,
            #60A5FA,
            #3B82F6
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                      radial-gradient(circle at 70% 70%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
                      conic-gradient(from 0deg, rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.2), rgba(59, 130, 246, 0.2));
          filter: blur(40px);
          opacity: 0.8;
          will-change: transform;
        }

        .border-gradient {
          position: relative;
          background: linear-gradient(45deg, #3B82F6, #6366F1, #3B82F6);
          padding: 4px;
          will-change: transform;
        }

        .border-gradient::before {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          filter: blur(10px);
          opacity: 0.7;
          z-index: -1;
        }
      `}</style>
    </section>
  )
}

export default Hero 