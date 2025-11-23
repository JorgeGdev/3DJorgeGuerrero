---
title: My Kiwi Little Book
subtitle: Interactive 3D Digital Library for New Zealand & Māori Culture
publishDate: 2025-11-15 00:00:00
img: /assets/stock-13.png
img_alt: My Kiwi Little Book - 3D interactive digital library with rotating book covers
description: |
  Immersive 3D digital library specialized in mini books about New Zealand and Māori culture, combining modern technologies like Astro, React, Three.js and Supabase to create an engaging reading experience with synchronized audiobooks.
tags:
  - Astro
  - React
  - Three.js
  - Supabase
  - TypeScript
  - WebGL
  - PostgreSQL
---

<h1>
<a target="_blank" href="https://mykiwilittlebook.com/">
Visit My Kiwi Little Book
</a>
</h1>

<h3>Revolutionary 3D Digital Library Experience</h3>
My Kiwi Little Book is an innovative interactive 3D digital library specialized in mini books about New Zealand and Māori culture. The platform combines cutting-edge web technologies including Astro for hybrid SSG/SSR, React 18+ for interactive components, Three.js for 3D rendering, and Supabase as a comprehensive backend solution. The immersive experience features rotating 3D book covers with high-quality textures, smooth animations with intuitive camera controls, and optimized rendering through @react-three/fiber and @react-three/drei.

<h3>Advanced Multimedia Reader System</h3>
The platform features a sophisticated PDF viewer with page-by-page rendering in high quality, synchronized audio playback per page to create interactive audiobooks, and complete multimedia controls including play/pause, navigation, volume control, and fullscreen mode. The responsive interface adapts seamlessly to all devices, providing an optimal reading experience whether on desktop, tablet, or mobile. The auto-play functionality and visual playback indicators enhance the immersive audiobook experience.

<h3>Enterprise-Grade Authentication and Access Control</h3>
Built on Supabase Auth, the system provides secure user registration and login with persistent session management across pages. The sophisticated role-based system includes three user levels: admin with full system management capabilities, premium users with access to all content including paid books, and free users with access to complimentary content only. Automatic profile creation upon registration, route protection based on authentication and roles, and real-time access validation ensure a secure and personalized experience for each user.

<h3>Intelligent Content Access Management</h3>
The platform implements a sophisticated content gating system where free books are accessible to all registered users, premium books are exclusively available to premium and admin users, and automatic redirection to checkout occurs for free users attempting to access paid content. The integrated checkout system facilitates purchases, with real-time access validation ensuring users only see content they're authorized to view. This creates a seamless monetization strategy while maintaining excellent user experience.

<h3>Modern Backend Architecture</h3>
Powered by Supabase with PostgreSQL at its core, the database features optimized relationships and Row Level Security policies for maximum data protection. Cloud storage handles PDFs, images, and audio files efficiently, while the automatic REST API provides authentication and authorization out of the box. Database triggers and functions automate business logic, including automatic profile creation, timestamp updates, and role protection mechanisms that prevent unauthorized privilege escalation.

<h3>Comprehensive Technology Stack</h3>
The frontend leverages Astro 4+ as the primary framework for hybrid static site generation and server-side rendering, React 18+ for interactive components and state management, and Three.js as the 3D rendering engine with @react-three/fiber integration and @react-three/drei helpers. TypeScript provides static typing for enhanced code robustness. The multimedia capabilities include pdf.js for browser-based PDF rendering and react-youtube for trailer integration. Styling combines Tailwind CSS utility framework with SCSS preprocessor and custom AtAero fonts (Bold, Regular, Semibold, BlackItalic).

<h3>Scalable Database Design</h3>
The PostgreSQL database features three primary tables: books with comprehensive metadata including title, author, genre, language, price, pages, ratings, tags, status, and publication dates; audio_tracks with synchronized audio files linked to specific book pages via foreign keys; and profiles managing user information, roles, premium status, and timestamps. Optimized indexes on book_number, status, genre, language, author, and composite indexes on audio lookups ensure lightning-fast queries even with large datasets.

<h3>Cloud Storage Architecture</h3>
Supabase Storage organizes assets efficiently with dedicated buckets: audio files organized by book number with individual page tracks in OGG format, covers containing high-quality PNG images for book thumbnails, and ebooks storing complete PDF files. The public bucket configuration with intelligent access policies ensures smooth content delivery while maintaining security. URLs are constructed systematically for covers, PDFs, and audio tracks, enabling efficient CDN distribution.

<h3>Advanced Security Implementation</h3>
Row Level Security policies protect all database tables, enabling public read access only to published books while restricting admin operations. Storage policies allow public read access but restrict uploads to authenticated users. Database triggers automatically create user profiles upon registration with default free-tier roles, update timestamps on record modifications, and prevent unauthorized role escalations. Custom PostgreSQL functions enforce business logic at the database level, ensuring data integrity even if application-level security is compromised.

<h3>Immersive 3D Gallery System</h3>
The books gallery showcases interactive 3D cubes with rotating book covers, displaying four books per page with intelligent pagination. Real-time role-based access control determines which books users can access, automatically redirecting free users to checkout for premium content. High-quality texture loading with mipmaps and anisotropic filtering ensures crisp visuals, while smooth animations and optimized rendering maintain 60fps performance even on mobile devices.

<h3>Professional Reading Experience</h3>
The multimedia reader combines PDF rendering with synchronized audio narration, creating a true audiobook experience. Users can navigate page-by-page with instant audio synchronization, use the "Play All" feature for continuous listening, or control individual page playback. The fullscreen mode provides distraction-free reading, while volume controls and visual indicators enhance usability. The responsive design ensures consistent functionality across all screen sizes.

<h3>Performance Optimization</h3>
The architecture implements automatic code splitting via Astro, lazy loading for images and 3D models, tree shaking to eliminate unused code, compression of assets including images, fonts, and models, and preloading of critical resources for instant interactivity. The optimized 3D rendering uses THREE.sRGBEncoding for accurate colors, 16x anisotropic filtering for sharp textures, and mipmap generation for efficient memory usage. These optimizations result in Lighthouse scores targeting 90+ performance, 95+ accessibility, 95+ best practices, and 100 SEO.

<h3>Future Development Roadmap</h3>
Planned features include offline mode with PWA capabilities and local caching, integrated payment gateway with Stripe, subscription system for recurring revenue, advanced search with multiple filters, internationalization supporting English, Spanish, and Te Reo Māori, EPUB3 generation with embedded audio, user reviews and comments system, AI-powered recommendations, social media integration for sharing, augmented reality for 3D covers, VR mode for fully immersive experiences, automatic AI narration for new books, marketplace for independent authors, and public API for third-party developers.

<h3>Development and Testing</h3>
The project includes comprehensive testing accounts: admin@test.nz (Admin123!) with full system access, premium@test.nz (Premium123!) with access to all books, and free@test.nz (Free123!) with access limited to free content. The development workflow uses Vite for fast hot module replacement, ESLint for code quality, Prettier for consistent formatting, and TypeScript for type checking. Scripts include development server, production builds, preview mode, linting, formatting, and type checking.

<h3>Cultural Significance and Mission</h3>
My Kiwi Little Book honors and celebrates the rich cultural heritage of New Zealand and the Māori people through accessible digital storytelling. The platform makes traditional legends, historical accounts, and contemporary narratives available to a global audience while respecting and acknowledging the indigenous culture. By combining modern technology with traditional stories, the project bridges the gap between heritage preservation and digital innovation, ensuring these important cultural narratives remain accessible for future generations.

<h3>Project Repository</h3>
Explore the complete codebase and comprehensive documentation:  
👉 <a target="_blank" href="https://github.com/JorgeGdev/MyKiwiLittleBook">GitHub - My Kiwi Little Book</a>
