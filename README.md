# 3D Interactive Portfolio - Jorge Guerrero

A cutting-edge 3D interactive portfolio showcasing web development projects with immersive Three.js experiences. This portfolio features **custom-made 3D models, hand-crafted scenes, and interactive animations** all designed and developed from scratch.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://your-portfolio-url.vercel.app)
[![Built with Astro](https://img.shields.io/badge/Astro-4.10-FF5D01.svg)](https://astro.build)
[![Three.js](https://img.shields.io/badge/Three.js-0.164-000000.svg)](https://threejs.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB.svg)](https://reactjs.org/)

## 🎯 Project Overview

This portfolio is a unique blend of modern web technologies and 3D graphics, featuring multiple interactive scenes that demonstrate both technical skills and creative design. Every 3D model, environment, and animation has been **personally created and optimized** for web performance.

### ✨ Key Features

- **Custom 3D Models**: All 3D models are original creations, designed and optimized for web rendering
- **Interactive Scenes**: Multiple themed 3D environments (Factory, Kitchen, Studio, Ocean, Ruins)
- **Animated Characters**: Custom-rigged character models with dancing, sitting, and walking animations
- **Technology Showcase**: Interactive bubble system displaying technology stack with 3D logos
- **Project Carousel**: Dynamic carousel showcasing portfolio projects with custom animations
- **Responsive Design**: Fully responsive across all devices with optimized 3D performance
- **Dark/Light Theme**: Theme toggle system integrated throughout the entire experience
- **Post-Processing Effects**: Advanced visual effects using React Three Fiber post-processing

## 🛠 Technology Stack

### Core Framework
- **[Astro 4.10](https://astro.build)** - Modern static site generator for optimal performance
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development experience

### 3D Graphics & Animation
- **[Three.js 0.164](https://threejs.org/)** - WebGL rendering engine for 3D graphics
- **[React Three Fiber 8.16](https://docs.pmnd.rs/react-three-fiber/)** - React renderer for Three.js
- **[@react-three/drei 9.106](https://github.com/pmndrs/drei)** - Useful helpers for R3F
- **[@react-three/postprocessing 2.16](https://github.com/pmndrs/react-postprocessing)** - Post-processing effects
- **[@react-three/rapier 1.4](https://github.com/pmndrs/react-three-rapier)** - Physics engine integration
- **[three-stdlib 2.8](https://github.com/pmndrs/three-stdlib)** - Three.js extensions

### UI Framework
- **[React 18.3](https://reactjs.org/)** - Component-based UI development
- **[React DOM 18.3](https://reactjs.org/)** - React rendering for web

### Build Tools
- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[vite-plugin-glsl](https://www.npmjs.com/package/vite-plugin-glsl)** - GLSL shader support

### Deployment
- **[Vercel](https://vercel.com)** - Deployment and hosting platform

## 🎨 3D Content & Scenes

### Original 3D Models
All 3D models in this portfolio are **100% custom-made** using professional 3D modeling software:

1. **Character Models**
   - Dancing character with full body animation rig
   - Sitting character with idle animations
   - Walking character with locomotion cycle
   - Small-scale character variants for different scenes

2. **Environment Props**
   - Factory machinery and industrial elements
   - Kitchen appliances and furniture
   - Studio equipment and workspace items
   - Office desk and chair
   - Architectural columns and ruins
   - Decorative elements (craters, fire effects)

3. **Technology Logos (3D Versions)**
   - Blender logo
   - CSS3 logo
   - HTML5 logo
   - JavaScript logo
   - Python logo
   - React logo
   - Three.js logo
   - GitHub logo

### Interactive Scenes

#### 1. **Main Experience** (`MainExperience.jsx`)
The hero scene featuring a dancing character surrounded by dynamic elements:
- Animated character model with dance choreography
- Interactive desk with physics
- Ocean environment with wave animations
- Fire and particle effects
- Ancient ruins atmosphere
- Custom camera controls
- Advanced post-processing effects

#### 2. **Factory Scene** (`about1/`)
Industrial-themed environment showcasing technical precision:
- Machinery and industrial equipment
- Custom factory CSS animations
- Metallic materials and lighting

#### 3. **Kitchen Scene** (`about2/`)
Warm, inviting domestic environment:
- Kitchen appliances and furniture
- Ambient lighting setup
- Interactive elements

#### 4. **Studio Scene** (`about3/`)
Creative workspace environment:
- Studio equipment and props
- Professional lighting setup
- Workspace aesthetics

#### 5. **Bubbles Technology Stack** (`bubbles/`)
Interactive floating technology showcase:
- Physics-based bubble system
- 3D technology logos
- Interactive hover effects
- Custom GLSL shaders

#### 6. **Project Carousel** (`carrousel/`)
Dynamic project showcase system:
- 3D card carousel
- Smooth animations
- Project preview cards
- Custom CSS styling

## 📁 Project Structure

```
portfolio-web/
├── src/
│   ├── components/           # Reusable Astro & React components
│   │   ├── about1/          # Factory scene components
│   │   ├── about2/          # Kitchen scene components
│   │   ├── about3/          # Studio scene components
│   │   ├── bubbles/         # Technology bubble system
│   │   ├── carrousel/       # Project carousel
│   │   ├── dancingModel/    # Main hero scene
│   │   │   └── logics/      # Camera, physics, environment
│   │   ├── modelSmall/      # Small character variants
│   │   ├── sittingSmall/    # Sitting animations
│   │   ├── technologies/    # Tech showcase
│   │   └── walkingSmall/    # Walking animations
│   ├── content/             # Content collections
│   │   └── work/            # Project descriptions
│   ├── layouts/             # Page layouts
│   ├── pages/               # Astro pages
│   └── styles/              # Global styles
├── public/
│   ├── assets/
│   │   ├── backgrounds/     # Scene backgrounds
│   │   └── videos/          # Video assets
│   ├── img/                 # HDR environments
│   └── models/              # 3D model files
│       ├── bubble/          # Bubble models
│       └── technologies/    # Tech logo models
└── astro.config.mjs         # Astro configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```sh
git clone https://github.com/JorgeGdev/3DJorgeGuerrero.git
cd 3DJorgeGuerrero
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## 🧞 Available Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎯 Performance Optimizations

- **Model Optimization**: All 3D models are optimized with reduced polygon counts for web
- **Texture Compression**: Compressed textures for faster loading times
- **Lazy Loading**: Components load on-demand to improve initial page load
- **Code Splitting**: Automatic code splitting via Astro and Vite
- **Asset Optimization**: Images and videos optimized for web delivery
- **Responsive 3D**: Dynamic quality adjustments based on device capabilities

## 🎨 Design Philosophy

This portfolio represents a fusion of:
- **Technical Excellence**: Showcasing advanced web development skills
- **Creative Design**: Original 3D artwork and immersive experiences
- **User Experience**: Smooth interactions and intuitive navigation
- **Performance**: Optimized for fast loading and smooth rendering
- **Accessibility**: Responsive design and fallback options

## 📦 Featured Projects

The portfolio showcases various web development projects including:
- Astro 3D Portfolio (this project)
- Healthy Life Clinic
- Just 3D Movies
- Medical Laboratory System
- Prismic Portfolio
- Snazzy Paws
- Sofia's Project
- Maori Sacred Places

## 🔧 Development Notes

### 3D Model Workflow
1. Models created in Blender
2. Rigging and animation in Blender
3. Export as GLTF/GLB format
4. Optimization using gltf-pipeline
5. Integration into React Three Fiber components

### Custom Shaders
Custom GLSL shaders are used for:
- Water effects in ocean scene
- Fire particle systems
- Material enhancements
- Post-processing effects

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are always welcome! Feel free to open an issue or reach out directly.

## 📄 License

This project is open source and available for reference, but please do not use the custom 3D models or designs without permission.

## 📧 Contact

**Jorge Guerrero**
- Portfolio: [Your Live Site]
- GitHub: [@JorgeGdev](https://github.com/JorgeGdev)
- LinkedIn: [Your LinkedIn]

---

**Note**: All 3D models, scenes, animations, and designs in this portfolio are original works created by Jorge Guerrero. The codebase demonstrates proficiency in modern web technologies, 3D graphics programming, and creative development.
