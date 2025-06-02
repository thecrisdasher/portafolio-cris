// Configuración centralizada para imágenes optimizadas
export const CRISTIAN_IMAGE_CONFIG = {
  // Imagen principal de Cristian Carabali
  PROFILE_IMAGE: {
    src: '/Image/cristian-carabali-img.png',
    alt: 'Cristian Carabali - Desarrollador Full Stack',
    quality: 100,
    placeholder: 'blur' as const,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==",
  },
  
  // Configuraciones por contexto
  HERO: {
    width: 800,
    height: 800,
    sizes: '(max-width: 768px) 288px, 320px',
    priority: true,
  },
  
  ABOUT: {
    width: 1200,
    height: 1200,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px',
    priority: true,
  },
  
  FOOTER: {
    width: 96,
    height: 96,
    sizes: '48px',
    priority: false,
  },
  
  // Configuraciones adicionales
  TESTIMONIALS: {
    width: 120,
    height: 120,
    sizes: '80px',
    priority: false,
  }
}

// Función para generar un blurDataURL más específico
export const generateBlurDataURL = (width: number, height: number) => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  
  if (ctx) {
    // Crear un gradiente que simule la imagen
    const gradient = ctx.createRadialGradient(
      width / 2, height / 2, 0,
      width / 2, height / 2, Math.max(width, height) / 2
    )
    gradient.addColorStop(0, '#3B82F6') // primary-500
    gradient.addColorStop(0.5, '#6366F1') // secondary-500
    gradient.addColorStop(1, '#1F2937') // gray-800
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
    
    return canvas.toDataURL('image/jpeg', 0.1)
  }
  
  // Fallback para SSR
  return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
}

// Hook para optimizar imágenes basado en el contexto
export const useOptimizedImageConfig = (context: keyof typeof CRISTIAN_IMAGE_CONFIG) => {
  const baseConfig = CRISTIAN_IMAGE_CONFIG.PROFILE_IMAGE
  const contextConfig = CRISTIAN_IMAGE_CONFIG[context]
  
  return {
    ...baseConfig,
    ...contextConfig,
  }
} 