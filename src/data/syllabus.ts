import { Brain, Sparkles, Wand2, Zap, Layers, Globe, Briefcase, GraduationCap, Video, Palette, Mic2, ShieldCheck, Heart, Megaphone, Terminal } from "lucide-react";

export const applyMethod = [
  { 
    letter: "A", 
    title: "Absorb", 
    desc: "Present concepts clearly with powerful analogies for maximum retention.",
    color: "bg-blue-600"
  },
  { 
    letter: "P", 
    title: "Practice", 
    desc: "Follow live demos step-by-step before diving into your own work.",
    color: "bg-orange-500"
  },
  { 
    letter: "P", 
    title: "Play", 
    desc: "Free exploration time where mistakes are celebrated as learning moments.",
    color: "bg-green-600"
  },
  { 
    letter: "L", 
    title: "Link", 
    desc: "Directly connect every lesson to your personal career goals and real life.",
    color: "bg-purple-600"
  },
  { 
    letter: "Y", 
    title: "Yield", 
    desc: "Produce a tangible asset in every session that you can keep and use.",
    color: "bg-red-600"
  }
];

export const modulesData = [
  { id: 1, name: "Introduction to AI", days: [1] },
  { id: 2, name: "Foundations of AI", days: [2, 3] },
  { id: 3, name: "GenAI Landscape", days: [4, 5] },
  { id: 4, name: "Ethics & Myths", days: [6, 7] },
  { id: 5, name: "Text AI Deep Dive", days: [8, 9] },
  { id: 6, name: "Mastering Prompting", days: [10, 11, 12] },
  { id: 7, name: "Visual Art & Images", days: [13, 14] },
  { id: 8, name: "Video Creation", days: [15, 16] },
  { id: 9, name: "Voice & Audio", days: [17, 18] },
  { id: 10, name: "Productivity AI", days: [19, 20] },
  { id: 11, name: "Workflow Design", days: [21, 22] },
  { id: 12, name: "AI for Careers", days: [23, 24] },
  { id: 13, name: "Monetizing AI", days: [25, 26, 27] },
  { id: 14, name: "Future Trends", days: [27] },
  { id: 15, name: "Capstone Projects", days: [28] },
];

export const sessionsList = [
  { day: 1, title: "Welcome to the World of AI", module: "MODULE 1", duration: "60 min" },
  { day: 2, title: "What Is AI? + Types of AI", module: "MODULE 2", duration: "60 min" },
  { day: 3, title: "How AI Tools Actually Work", module: "MODULE 2", duration: "60 min" },
  { day: 4, title: "Generative AI — The Creative Revolution", module: "MODULE 3", duration: "60 min" },
  { day: 5, title: "GenAI Landscape — Key Players & Industries", module: "MODULE 3", duration: "60 min" },
  { day: 6, title: "AI Myths vs Reality — Debunking Misconceptions", module: "MODULE 4", duration: "60 min" },
  { day: 7, title: "Using AI Ethically and Responsibly", module: "MODULE 4", duration: "60 min" },
  { day: 8, title: "ChatGPT, Claude & Gemini — Deep Dive", module: "MODULE 5", duration: "60 min" },
  { day: 9, title: "Specialist Text Tools — Research, Copy & Beyond", module: "MODULE 5", duration: "60 min" },
  { day: 10, title: "Why Prompting Matters + The CLEAR Framework", module: "MODULE 6", duration: "60 min" },
  { day: 11, title: "CLEAR Framework Complete + Advanced Techniques", module: "MODULE 6", duration: "60 min" },
  { day: 12, title: "Advanced Prompting + Mistakes to Avoid", module: "MODULE 6", duration: "60 min" },
  { day: 13, title: "AI Image Generation — The Art of Visual Instruction", module: "MODULE 7", duration: "60 min" },
  { day: 14, title: "Real-World Image AI Workflows", module: "MODULE 7", duration: "60 min" },
  { day: 15, title: "AI Video Creation — No Camera Required", module: "MODULE 8", duration: "60 min" },
  { day: 16, title: "Video AI for Content Creators & Businesses", module: "MODULE 8", duration: "60 min" },
  { day: 17, title: "AI Voice Generation & Cloning", module: "MODULE 9", duration: "60 min" },
  { day: 18, title: "AI Audio Tools — Meetings, Music & Productivity", module: "MODULE 9", duration: "60 min" },
  { day: 19, title: "AI Productivity Tools for Daily Work", module: "MODULE 10", duration: "60 min" },
  { day: 20, title: "No-Code AI Automation — Zapier & Make", module: "MODULE 10", duration: "60 min" },
  { day: 21, title: "The AI Workflow Design Framework", module: "MODULE 11", duration: "60 min" },
  { day: 22, title: "Industry-Specific AI Workflows", module: "MODULE 11", duration: "60 min" },
  { day: 23, title: "AI for Students & Job Seekers", module: "MODULE 12", duration: "60 min" },
  { day: 24, title: "AI for Freelancers, Entrepreneurs & Creators", module: "MODULE 12", duration: "60 min" },
  { day: 25, title: "Freelancing with AI — Fastest Path to Income", module: "MODULE 13", duration: "60 min" },
  { day: 26, title: "Digital Products + The AI Agency Model", module: "MODULE 13", duration: "60 min" },
  { day: 27, title: "AI Side Hustles + Staying Current", module: "MODULE 13 & 14", duration: "60 min" },
  { day: 28, title: "Capstone Projects & Course Celebration", module: "MODULE 15", duration: "60 min" },
];

export const dayDetails = [
  {
    day: 1,
    module: "MODULE 1",
    title: "Welcome to the World of AI",
    objectives: [
      "Understand that AI is already part of everyday life",
      "Learn why AI is the biggest technological shift since the internet",
      "Discover the advantage non-technical people have with AI",
      "Set a personal AI learning goal using the APPLY method",
      "Know which 8 free tools to set up before next class"
    ],
    topics: [
      "What is Artificial Intelligence (in simple words)?",
      "AI in everyday life: Netflix, Google Maps, Spotify, Face ID",
      "The difference between knowing about AI vs. using AI",
      "APPLY Learning Method: Absorb · Practice · Play · Link · Yield",
      "Tool setup homework: 8 free accounts to create"
    ]
  },
  {
    day: 2,
    module: "MODULE 2",
    title: "What Is AI? + Types of AI",
    objectives: [
      "Define AI in plain, simple language (no jargon)",
      "Understand AI, Machine Learning, and Deep Learning",
      "Learn why AI sometimes gets things wrong (hallucinations)",
      "Identify 5 types of AI and examples of each",
      "Match real-world AI applications to their correct type"
    ],
    topics: [
      "What AI actually is: pattern recognition at massive scale",
      "The child-teaching analogy: training data → model → output",
      "AI vs Machine Learning vs Deep Learning",
      "Hallucinations: why AI confidently gets things wrong",
      "5 Types of AI: Generative, Predictive, Conversational, Analytical, Robotic"
    ]
  },
  {
    day: 3,
    module: "MODULE 2 (Cont.)",
    title: "How AI Tools Actually Work",
    objectives: [
      "Understand what a Large Language Model (LLM) is",
      "Learn how image-generation AI works (diffusion models)",
      "Understand the critical role of prompts",
      "Grasp the concept of context windows",
      "Know what training cutoff means"
    ],
    topics: [
      "LLMs explained: advanced autocomplete",
      "Image generation: painting from noise",
      "The prompt = steering wheel analogy",
      "Context windows: how much can AI remember?",
      "Training cutoff: what AI doesn't know"
    ]
  }
];
