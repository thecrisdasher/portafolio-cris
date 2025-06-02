import { LucideIcon } from 'lucide-react'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: 'web' | 'app' | 'design'
  liveUrl: string
  githubUrl: string
  featured: boolean
  createdAt: string
}

export interface Skill {
  name: string
  level: number
  icon?: LucideIcon
}

export interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: Skill[]
}

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  image: string
  rating: number
  text: string
  project: string
}

export interface ContactInfo {
  icon: LucideIcon
  title: string
  value: string
  link: string
}

export interface SocialLink {
  icon: LucideIcon
  href: string
  label: string
}

export interface NavItem {
  href: string
  label: string
}

export interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface AnimationVariants {
  hidden: {
    opacity?: number
    x?: number
    y?: number
    scale?: number
  }
  visible: {
    opacity?: number
    x?: number
    y?: number
    scale?: number
    transition?: {
      duration?: number
      delay?: number
      ease?: string
      staggerChildren?: number
      delayChildren?: number
    }
  }
}

export interface Stats {
  icon: LucideIcon
  value: string
  label: string
} 