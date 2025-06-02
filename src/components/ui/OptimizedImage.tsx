'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  quality?: number
  sizes?: string
  fill?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  objectPosition?: string
  animated?: boolean
  hoverScale?: number
  rounded?: string
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 100,
  sizes,
  fill = false,
  placeholder = 'blur',
  blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==",
  objectFit = 'cover',
  objectPosition = 'center',
  animated = false,
  hoverScale = 1.05,
  rounded = '',
}) => {
  const imageProps = {
    src,
    alt,
    quality,
    priority,
    placeholder,
    blurDataURL,
    ...(fill ? { fill: true } : { width, height }),
    ...(sizes && { sizes }),
    className: `${className} ${objectFit === 'cover' ? 'object-cover' : objectFit === 'contain' ? 'object-contain' : objectFit === 'fill' ? 'object-fill' : objectFit === 'none' ? 'object-none' : 'object-scale-down'} ${objectPosition === 'center' ? 'object-center' : objectPosition === 'top' ? 'object-top' : objectPosition === 'bottom' ? 'object-bottom' : objectPosition === 'left' ? 'object-left' : 'object-right'} ${rounded}`,
  }

  if (!animated) {
    return <Image {...imageProps} />
  }

  return (
    <motion.div
      className="overflow-hidden"
      whileHover={{ scale: hoverScale }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <Image {...imageProps} />
    </motion.div>
  )
}

export default OptimizedImage 