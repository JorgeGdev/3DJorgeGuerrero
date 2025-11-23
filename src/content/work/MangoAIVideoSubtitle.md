---
title: MangoAI Video Subtitle Generator
subtitle: Advanced Karaoke Subtitle System with AI Transcription
publishDate: 2025-10-18 00:00:00
img: /assets/stock-10.png
img_alt: MangoAI Video Subtitle Generator with karaoke-style burned subtitles
description: |
  Professional subtitle generator combining OpenAI Whisper, FFmpeg and Node.js to create videos with burned-in karaoke-style subtitles and automatic crossfade transitions.
tags:
  - Node.js
  - Express
  - FFmpeg
  - OpenAI Whisper
  - JavaScript
  - Video Processing
---

<h1>
<a target="_blank" href="https://mangoaivideosubtitle.up.railway.app/">
Visit MangoAI Video Subtitle Generator
</a>
</h1>

<h3>Professional Karaoke Subtitle System</h3>
MangoAI Video Subtitle Generator is an advanced subtitle generation system that combines OpenAI Whisper for precise transcription, FFmpeg for professional video rendering, and Node.js for seamless backend processing. The platform creates videos with burned-in karaoke-style subtitles featuring professional Montserrat typography, automatic crossfade transitions with outro videos, and multiple export formats including TXT, Markdown, and full transcriptions.

<h3>Intelligent Transcription Pipeline</h3>
Powered by OpenAI Whisper API, the system delivers high-precision automatic transcription with word-level timing for clips between 10-30 seconds. The intelligent ASS builder constructs karaoke subtitle files with word-by-word effects using the `\k` tag, featuring smart segmentation by pauses, duration, and character count. The result is perfectly synchronized subtitles that appear line-by-line with professional timing and anti-overlap logic.

<h3>Professional Video Production</h3>
The burn-in engine uses FFmpeg with advanced configuration to produce 1080p videos at CRF 23 quality, automatically scaling content while preserving aspect ratios. Custom crossfade transitions blend the main video with outro clips seamlessly, featuring automatic framerate normalization and intelligent audio mixing. The output is optimized for web and mobile with yuv420p pixel format, ensuring universal compatibility across all platforms.

<h3>Modern Web Interface</h3>
Built with a minimal black and purple gradient theme, the interface features drag-and-drop file upload with real-time validation (MP4 only, max 10MB), instant preview capabilities, and live progress tracking during processing. Users can customize subtitle styles including font selection, size, color (ASS color format), outline, shadow, alignment, and vertical margin. The responsive design works flawlessly across desktop, tablet, and mobile devices.

<h3>Complete Technology Stack</h3>
The backend runs on Node.js with Express for routing, Multer for secure file uploads with validation, and fluent-ffmpeg as a comfortable wrapper for FFmpeg operations. OpenAI's official client handles Whisper API integration for transcription, while dotenv manages environment variables securely. The development workflow includes nodemon for hot reload with smart file watching that ignores temporary directories to prevent connection disruptions.

<h3>Flexible Export System</h3>
The platform generates multiple output formats: the final MP4 video with burned subtitles and outro, a TXT file with timestamps in [MM:SS] format, a Markdown file with enriched metadata and formatting, and a plain text transcription without timestamps. This multi-format approach ensures compatibility with various workflows and use cases, from social media to professional video production.

<h3>Robust Architecture</h3>
The modular service architecture separates concerns with specialized modules: transcriber.js for OpenAI Whisper integration, ass-builder.js for advanced ASS file generation with karaoke effects, text-exporter.js for multiple format exports, burner.js for subtitle burn-in with FFmpeg, and outro.js for professional crossfade transitions. The system features automatic temporary file cleanup, fallback mechanisms for server restarts, and comprehensive error handling.

<h3>Deployment Ready</h3>
Optimized for Railway deployment with included Dockerfile and railway.json configuration, the project supports easy environment variable management and automatic builds. The system validates all inputs (file size, MIME type, duration) and includes health check endpoints for monitoring. FFmpeg is installed automatically via npm packages, making setup straightforward across different environments.

<h3>Project Repository</h3>
Check out the complete source code and documentation:  
👉 <a target="_blank" href="https://github.com/JorgeGdev/MangoAIVideoSubtitle">GitHub - MangoAI Video Subtitle Generator</a>
