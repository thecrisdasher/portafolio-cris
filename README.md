# 🌟 Portafolio Personal Modernizado - Cristian Carabali

Un portafolio web moderno y completamente responsivo construido con las tecnologías más actuales del desarrollo web.

## 🚀 Características Principales

- ✨ **Diseño Moderno**: Interfaz elegante con animaciones suaves y efectos visuales atractivos
- 📱 **Completamente Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- ⚡ **Alto Rendimiento**: Construido con Next.js 14 y optimizado para velocidad
- 🎨 **Animaciones Interactivas**: Framer Motion para transiciones fluidas y atractivas
- 🎯 **Cursor Personalizado**: Experiencia de usuario única con cursor interactivo
- 🌙 **Tema Oscuro**: Diseño moderno con paleta de colores oscura y acentos vibrantes
- 📧 **Formulario de Contacto**: Sistema de contacto completamente funcional
- 🔄 **Carrusel de Testimonios**: Sección interactiva de testimonios de clientes

## 🛠️ Tecnologías Utilizadas

### Frontend Framework
- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático para mejor desarrollo
- **React 18** - Biblioteca de UI con hooks modernos

### Estilos y Diseño
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Biblioteca de animaciones para React
- **Lucide React** - Iconos modernos y SVG optimizados

### Gestión de Estado
- **Zustand** - Estado global ligero y simple
- **React Query (TanStack Query)** - Gestión de datos del servidor

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Prefijos CSS automáticos

## 📁 Estructura del Proyecto

```
portafolio-cris/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── globals.css         # Estilos globales
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página principal
│   │   └── providers.tsx       # Proveedores de contexto
│   ├── components/             # Componentes reutilizables
│   │   ├── layout/             # Componentes de layout
│   │   │   ├── Header.tsx      # Navegación principal
│   │   │   └── Footer.tsx      # Pie de página
│   │   ├── sections/           # Secciones del portafolio
│   │   │   ├── Hero.tsx        # Sección hero
│   │   │   ├── About.tsx       # Sobre mí
│   │   │   ├── Skills.tsx      # Habilidades
│   │   │   ├── Services.tsx    # Servicios
│   │   │   ├── Work.tsx        # Proyectos
│   │   │   ├── Testimonials.tsx # Testimonios
│   │   │   └── Contact.tsx     # Contacto
│   │   └── ui/                 # Componentes UI
│   │       └── CustomCursor.tsx # Cursor personalizado
│   ├── hooks/                  # Custom hooks
│   ├── lib/                    # Utilidades y configuraciones
│   │   └── utils.ts            # Funciones utilitarias
│   ├── stores/                 # Gestión de estado
│   │   └── usePortfolioStore.ts # Store principal
│   └── types/                  # Definiciones de tipos
│       └── index.ts            # Tipos TypeScript
├── public/                     # Archivos estáticos
│   └── Image/                  # Imágenes del portafolio
├── package.json                # Dependencias y scripts
├── tailwind.config.ts          # Configuración de Tailwind
├── tsconfig.json              # Configuración de TypeScript
└── next.config.js             # Configuración de Next.js
```

## 🎨 Secciones del Portafolio

### 1. **Hero Section**
- Introducción personal con animaciones de texto
- Enlaces a redes sociales
- Call-to-action principal
- Indicador de scroll animado

### 2. **Sobre Mí**
- Información personal y profesional
- Estadísticas de experiencia
- Imagen con efectos hover
- Especialidades destacadas

### 3. **Skills**
- Barras de progreso animadas
- Categorización por tecnologías
- Herramientas y frameworks
- Experiencia profesional

### 4. **Servicios**
- Tarjetas interactivas con hover effects
- Descripción detallada de servicios
- Características de cada servicio
- Call-to-action integrado

### 5. **Trabajos**
- Galería filtrable de proyectos
- Overlays informativos
- Enlaces a demos y repositorios
- Categorización por tipo

### 6. **Testimonios**
- Carrusel automático de testimonios
- Sistema de navegación manual
- Calificaciones con estrellas
- Información del cliente y proyecto

### 7. **Contacto**
- Formulario de contacto funcional
- Información de contacto directa
- Acciones rápidas (WhatsApp, Agendar)
- Validación de formulario

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/portafolio-cris.git
cd portafolio-cris
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run start    # Servidor de producción
npm run lint     # Linting de código
```

## 🎯 Características Técnicas

### Optimizaciones de Rendimiento
- **Lazy Loading** de componentes
- **Optimización de imágenes** con Next.js Image
- **Code Splitting** automático
- **Prefetching** de rutas

### Animaciones y UX
- **Scroll-triggered animations** con Framer Motion
- **Parallax effects** en backgrounds
- **Smooth scrolling** entre secciones
- **Loading states** para mejor UX

### Responsive Design
- **Mobile-first approach**
- **Breakpoints personalizados**
- **Grid layouts flexibles**
- **Typography responsiva**

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móviles iOS/Android

## 🌐 Despliegue

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Subir carpeta .next a Netlify
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Cristian Carabali**
- Website: [https://crisdasher-portfolio.vercel.app/](https://crisdasher-portfolio.vercel.app/)
- GitHub: [@thecrisdasher](https://github.com/thecrisdasher)
- LinkedIn: [Cristian Carabali](https://www.linkedin.com/in/cristian-carabali/)
- Email: cristian@example.com

## 🙏 Agradecimientos

- Inspiración de diseño tomada de [amarres-web.vercel.app](https://amarres-web.vercel.app/#testimonios)
- Iconos por [Lucide](https://lucide.dev/)
- Animaciones con [Framer Motion](https://www.framer.com/motion/)
- Construido con [Next.js](https://nextjs.org/)

---

⭐ ¡No olvides dar una estrella al proyecto si te gustó!
