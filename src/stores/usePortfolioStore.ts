import { create } from 'zustand'

interface PortfolioState {
  // Navigation
  activeSection: string
  setActiveSection: (section: string) => void
  
  // Theme
  isDarkMode: boolean
  toggleDarkMode: () => void
  
  // Loading
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  
  // Contact Form
  isFormSubmitting: boolean
  setIsFormSubmitting: (submitting: boolean) => void
  
  // Mobile Menu
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
  
  // Cursor
  cursorPosition: { x: number; y: number }
  setCursorPosition: (position: { x: number; y: number }) => void
  isHoveringInteractive: boolean
  setIsHoveringInteractive: (hovering: boolean) => void
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  // Navigation
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),
  
  // Theme
  isDarkMode: true,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  
  // Loading
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
  
  // Contact Form
  isFormSubmitting: false,
  setIsFormSubmitting: (submitting) => set({ isFormSubmitting: submitting }),
  
  // Mobile Menu
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  
  // Cursor
  cursorPosition: { x: 0, y: 0 },
  setCursorPosition: (position) => set({ cursorPosition: position }),
  isHoveringInteractive: false,
  setIsHoveringInteractive: (hovering) => set({ isHoveringInteractive: hovering }),
})) 