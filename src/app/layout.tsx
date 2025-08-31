import React from 'react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portafolio-mejorllamaacris.vercel.app'),
  title: 'Mejor Llama A Cris - Desarrollador Full Stack',
  description: 'Portafolio personal de Cristian Carabali, desarrollador web especializado en React, Next.js, Python y tecnologías modernas.',
  keywords: ['desarrollador web', 'full stack', 'react', 'next.js', 'python', 'javascript'],
  authors: [{ name: 'Cristian Carabali' }],
  // Favicons e íconos para diferentes dispositivos
  icons: {
    icon: [{ url: '/Image/mejorllamaacrislogo.png' }],
    shortcut: ['/Image/mejorllamaacrislogo.png'],
    apple: [{ url: '/Image/mejorllamaacrislogo.png' }],
  },
  openGraph: {
    title: 'Cristian Carabali - Desarrollador Full Stack',
    description: 'Portafolio personal de Cristian Carabali',
    type: 'website',
    url: 'https://portafolio-mejorllamaacris.vercel.app/',
    images: [
      {
        url: '/Image/mejorllamaacrislogo.png',
        width: 1200,
        height: 1200,
        alt: 'Cristian Carabali - Desarrollador Full Stack',
        type: 'image/png',
      }
    ],
    siteName: 'Cristian Carabali Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cristian Carabali - Desarrollador Full Stack',
    description: 'Portafolio personal de Cristian Carabali',
    images: ['/Image/mejorllamaacrislogo.png'],
    creator: '@cristianda23',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/Image/mejorllamaacrislogo.png" />
        <link rel="apple-touch-icon" href="/Image/mejorllamaacrislogo.png" />
      </head>
      <body className={`${poppins.className} bg-gray-900 text-white overflow-x-hidden`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}