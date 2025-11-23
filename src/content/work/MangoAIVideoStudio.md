---
title: MANGO AI Video Studio
subtitle: Advanced News Video Generation Platform with RAG
publishDate: 2025-10-20 00:00:00
img: /assets/stock-11.png
img_alt: MANGO AI Video Studio interface with Leonardo.AI theme and news carousel
description: |
  Revolutionary automatic news video generation system combining RAG, advanced voice synthesis, and AI video generation with perfect lip synchronization and modern Leonardo.AI themed interface.
tags:
  - Node.js
  - OpenAI GPT-4
  - ElevenLabs
  - Hedra AI
  - Supabase
  - React
  - Telegram Bot
---

<h1>
<a target="_blank" href="https://mango-generator.up.railway.app/">
Visit MANGO AI Video Studio
</a>
</h1>

<h3>Revolutionary AI News Video Platform</h3>
MANGO AI Video Studio is a cutting-edge platform that automates professional news video production using advanced AI technologies. The system combines RAG (Retrieval-Augmented Generation) with 120+ indexed news vectors, GPT-4 for contextualized script generation, ElevenLabs for natural voice synthesis with dual voice options, and Hedra AI for HD video generation with perfect lip synchronization. The modern Leonardo.AI themed interface features glassmorphism effects, animated gradients, and an intelligent 8-news carousel showcasing content from 4 countries.

<h3>Intelligent RAG-Powered Content System</h3>
The platform maintains a vector database with 120+ news articles from New Zealand, Australia, United Kingdom, and USA, automatically updated via RSS scrapers with real-time notifications. Using Supabase for vector storage with semantic similarity search, the system retrieves relevant context ranked by relevance and recency. When users submit natural language queries like "news about Trump" or "Real Madrid match", the RAG system finds the most relevant articles and generates contextually accurate scripts.

<h3>Advanced AI Pipeline</h3>
The complete video generation workflow starts with drag-and-drop image upload with automatic validation, followed by RAG search across the vector database to gather relevant context. GPT-4 Turbo generates a coherent 65-70 word script optimized for 20-second videos, which users can review and approve via a modern modal system. ElevenLabs then synthesizes natural HD audio with voice selection (female/male), and finally Hedra AI creates lip-synced HD videos with the uploaded photo.

<h3>Modern Leonardo.AI Interface</h3>
The web dashboard features a stunning purple/pink gradient theme with glassmorphism effects and smooth CSS3 animations. The intelligent 8-news carousel displays 2 recent articles from each of the 4 countries with thematic background images and intuitive navigation. Drag-and-drop upload zones provide visual indicators and instant preview, while side-by-side AI transformation previews show before/after comparisons. Animated heart emojis with Google-style heartbeat effects add personality to the brand identity.

<h3>Dual Interface System</h3>
Users can interact through either the modern web dashboard with full control and real-time monitoring, or the advanced Telegram bot for natural chat-based video generation with script approval. Both interfaces provide live logs with advanced filtering, modal-driven approval workflows, and comprehensive metrics including total RAG vectors, videos generated, success rate, average generation time, and last country update timestamps.

<h3>Enterprise-Grade Technology Stack</h3>
Built on Node.js 18+ with Express for the backend, the platform integrates OpenAI GPT-4 for intelligent content generation, ElevenLabs API for professional voice synthesis with configurable stability and style settings, Hedra AI for realistic lip-sync video creation, and Supabase as the PostgreSQL vector database with pgvector extension for semantic search. The frontend uses modern React components with Framer Motion animations and responsive CSS Grid layouts.

<h3>Scalable Architecture</h3>
The modular service architecture separates concerns with specialized modules: telegram-handler.js for bot interactions with approval flow, script-generator.js for AI generation with optimized RAG queries, audio-processor.js for ElevenLabs integration with dual voice support, image-processor.js for advanced photo processing, video-creator.js for Hedra AI integration, and auth-manager.js for JWT authentication with role-based access control. The system includes automatic file cleanup, comprehensive error handling, and rate limiting for API protection.

<h3>Professional Features</h3>
The platform outputs optimized 20-second videos perfect for social media with HD quality and square format (1:1 aspect ratio). JWT-based authentication ensures secure access, while the job queue system tracks generation status in real-time. The multi-country RSS scraper automatically indexes new content with metadata including title, source, country, URL, publication date, tags, word count, and language. Users receive real-time notifications and can monitor system health through comprehensive dashboards.

<h3>Deployment and Monitoring</h3>
Optimized for Railway deployment with included Docker configuration, the project features environment variable management for all API keys (OpenAI, ElevenLabs, Hedra, Supabase, Telegram). The system includes health check endpoints, structured logging with timestamps and module identifiers, API failure alerts, upload error tracking, generation timeout monitoring, and database connectivity alerts. Comprehensive troubleshooting guides and diagnostic commands ensure smooth operation.

<h3>Project Repository</h3>
Explore the complete platform source code:  
👉 <a target="_blank" href="https://github.com/JorgeGdev/mangoAIVideo-Generator">GitHub - MANGO AI Video Studio</a>
