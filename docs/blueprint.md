# **App Name**: MAYA-NETRA AI

## Core Features:

- Image Analysis: Accept JPG and PNG image uploads for deepfake detection. Uses AI models to identify face manipulation and GAN-generated artifacts. Outputs a confidence score (0-100%) and a label: Real / AI-Generated. Display inference time.
- Video Analysis: Accept MP4 video uploads. Uses AI models to detect face manipulation, GAN-generated artifacts, and temporal inconsistencies. Supports frame extraction and aggregates confidence scores. Outputs a confidence score and Real/AI-Generated label with inference time.
- ML Backend: Leverage pre-trained deep learning models (CNN/EfficientNet/Xception, Vision Transformers). Designed as a modular ML pipeline for future upgrades.
- Progress Tracking: A real-time UI showing loading animation during analysis, step-wise progress from upload to result.
- Inference Explanation Tool: Use an LLM tool to explain what part of the image, or what moments of the video, made the detector trigger an AI generated result. Provides insight on which region triggered a DeepFake warning.

## Style Guidelines:

- Primary color: Dark, intense purple (#512DA8), suggestive of mystery and digital sophistication.
- Background color: Very dark gray (#1E1E1E) to provide a strong contrast for UI elements in the dark scheme.
- Accent color: A vibrant teal (#00BCD4), approximately 30 degrees away from purple, is used for interactive elements and progress indicators, contrasting effectively against the dark background.
- Headline font: 'Space Grotesk', a sans-serif font for a computerized, techy feel; for headlines
- Body font: 'Inter', a grotesque-style sans-serif with a modern, machined, objective, neutral look
- Use a consistent set of line icons to represent different features and functionalities. Icons should be simple, modern, and easily recognizable.
- A clean and modern layout with a focus on readability and ease of use. Implement a clear visual hierarchy to guide the user through the detection process.