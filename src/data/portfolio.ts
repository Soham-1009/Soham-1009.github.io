export const profile = {
  name: "Soham Deshpande",
  role: "AI & ML Developer",
  degree: "MCA (Artificial Intelligence & Machine Learning)",
  university: "Ramdeobaba University",
  location: "Nagpur, Maharashtra, India",
  availability: "Available for internships & full-time roles",
  intro:
    "AI & ML postgraduate with experience in computer vision, generative AI, and full-stack development. Skilled in Python, PyTorch, REST APIs, Django, FastAPI, JavaScript, and MySQL. Experienced in building AI models and web applications. Strong problem-solving, analytical, communication, and teamwork skills.",
  email: "soham.deshpande100904@gmail.com",
  github: "https://github.com/Soham-1009",
  linkedin: "https://linkedin.com/in/soham-deshpande-165452248",
  resume: "/Soham Deshpande Resume.pdf",
};

export const stats = [
  { value: "5", label: "Major projects" },
  { value: "20+", label: "Technologies" },
  { value: "12", label: "GitHub repositories" },
  { value: "MCA", label: "AI & ML, in progress" },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  year: string;
  category: string;
  flagship?: boolean;
  stack: string[];
  repo: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "infranova-ai",
    title: "InfraNova AI",
    tagline: "Thermal Infrared to RGB Satellite Image Translation",
    summary:
      "Cross-spectral satellite image translation system using a Pix2PixHD-style Global ResNet GAN (11.37M parameters) to synthesize RGB imagery from Landsat 9 TIRS-2 Band 10 + Band 11 thermal inputs. Evaluated with LSGAN and multi-term loss, achieving 13.74 dB PSNR, 0.4502 SSIM, and 0.3711 YOLOv8 F1@0.25 on 1,259 held-out samples. Features a FastAPI + React/Vite inference platform with tiled whole-raster inference (128×128 tiles, cosine/Hann blending) in 1.74s (69.5 tiles/sec), TTA, CLAHE, and dual-band Landsat 9 preprocessing.",
    year: "2026",
    category: "AI / ML",
    flagship: true,
    stack: ["PyTorch", "Pix2PixHD", "FastAPI", "React/Vite", "GeoTIFF", "YOLOv8"],
    repo: "https://github.com/Soham-1009/InfraNova-AI",
    demo: "https://infranovaai.duckdns.org/",
  },
  {
    slug: "scamshield-ai",
    title: "ScamShield AI",
    tagline: "Explainable Fraud Detection Platform",
    summary:
      "Hybrid recruitment-fraud detection engine combining a 6-category deterministic rule engine with a regularized TF-IDF + Logistic Regression NLP model, surfacing verbatim matched evidence without LLM API dependencies. Built an offline-first Manifest V3 Chrome extension that runs rule evaluation and vector inference locally in JavaScript with model-weight synchronization, and a containerized Flask REST API for Google Cloud Run with Tesseract OCR preprocessing and 100% test coverage across 31 test suites.",
    year: "2026",
    category: "AI / ML",
    stack: ["Python", "Scikit-learn", "Flask", "Chrome Extension", "Tesseract OCR"],
    repo: "https://github.com/Soham-1009/ScamShield-AI",
  },
  {
    slug: "lstm-language-model",
    title: "LSTM Language Model",
    tagline: "Next-Word Prediction & Controlled Autoregressive Generation",
    summary:
      "A generative language modeling system implementing a custom 2-layer causal LSTM (26.75M parameters, 30K vocabulary) trained from scratch on WikiText-103 using PyTorch DDP across 2× NVIDIA Tesla T4 GPUs. Includes real-time autocomplete, temperature scaling, Top-K and nucleus (Top-P) sampling, an empirical multi-domain generalization benchmark across 6 functional domains, and a Next.js/FastAPI interface with live CUDA telemetry.",
    year: "2026",
    category: "Generative AI",
    stack: ["PyTorch", "FastAPI", "Next.js", "CUDA", "WikiText-103", "DDP"],
    repo: "https://github.com/Soham-1009/LSTM-to-predict-next-word",
    demo: "https://soham-1009.github.io/LSTM-to-predict-next-word/",
  },
  {
    slug: "translytic",
    title: "Translytic",
    tagline: "AI-Based Real-Time Video Captioning & Translation System",
    summary:
      "A real-time video processing system integrating OpenAI Whisper, translation, and edge-tts for speech-to-text, subtitle generation, and multilingual dubbing with playback and timestamp synchronization.",
    year: "2025",
    category: "Computer Vision",
    stack: ["Python", "Whisper", "OpenCV", "Tkinter", "edge-tts", "MoviePy"],
    repo: "https://github.com/Soham-1009/Translytic",
  },
  {
    slug: "noteflow",
    title: "NoteFlow",
    tagline: "Full Stack Notes Management Platform",
    summary:
      "Full-stack notes management application built with Django, MySQL, HTML, CSS, and JavaScript. Enforces user authentication, CRUD operations, category-based filtering, and role-based access control with relational database schemas using Django ORM, AJAX-based note pinning, and real-time search capabilities without full page refreshes.",
    year: "2024",
    category: "Full Stack",
    stack: ["Django", "MySQL", "REST APIs", "JavaScript", "HTML", "CSS"],
    repo: "https://github.com/Soham-1009/NoteFlow",
  },
];

export const skillGroups = [
  {
    title: "AI & Machine Learning",
    items: [
      "GANs (Pix2Pix, Pix2PixHD)",
      "YOLOv8",
      "Object Detection",
      "Image-to-Image Translation",
      "PyTorch",
      "OpenCV",
    ],
  },
  {
    title: "Generative AI",
    items: [
      "Gemini",
      "ChatGPT",
      "Claude",
      "Prompt Design",
      "API Integration",
      "Causal LSTMs",
      "OpenAI Whisper",
    ],
  },
  {
    title: "Programming Languages",
    items: ["Python", "Java", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend & Web",
    items: [
      "Django",
      "FastAPI",
      "Flask",
      "REST APIs",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "Chrome Extension (Manifest V3)",
      "React / Vite",
      "Next.js",
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      "TF-IDF",
      "Logistic Regression",
      "Power BI",
      "Excel",
      "Data Preprocessing",
      "Data Validation",
      "AMP",
      "DDP",
    ],
  },
  {
    title: "Testing & Tools",
    items: ["Git", "GitHub", "Technical Documentation", "Docker", "Linux", "Pytest"],
  },
  {
    title: "Core CS",
    items: ["Data Structures", "Algorithms", "OOP", "DBMS"],
  },
  {
    title: "Soft Skills & Languages",
    items: [
      "Analytical Thinking",
      "Problem Solving",
      "Communication",
      "Research & Documentation",
      "Team Collaboration",
      "Time Management",
      "Japanese (N5 Course)",
    ],
  },
];

export const timeline = [
  {
    period: "2025 – Present",
    title: "Master of Computer Applications (AI & ML)",
    org: "Ramdeobaba University, Nagpur",
    detail: "Specialization in Artificial Intelligence and Machine Learning",
  },
  {
    period: "2022 – 2025",
    title: "Bachelor of Computer Applications",
    org: "G.H. Raisoni College of Engineering and Management, Nagpur",
    detail: "Graduated with Bachelor of Computer Applications",
  },
];

export const certifications = [
  {
    title: "Google Cloud Career Launchpad — Computing Foundations Track",
    issuer: "Google Cloud",
    date: "Apr 2026",
    image: "/Google Cloud.png",
  },
  {
    title: "Assets, Threats, and Vulnerabilities — Google Cybersecurity Certificate",
    issuer: "Google / Coursera",
    date: "Apr 2026",
    image: "/B3_49_SohamDeshpande Assets, Threats, and Vulnerabilities.png",
  },
  {
    title: "Connect and Protect: Networks and Network Security",
    issuer: "Google / Coursera",
    date: "Mar 2026",
    image: "/B3_49_SohamDeshpande Connect and Protect Networks and Network.png",
  },
  {
    title: "Tools of the Trade: Linux and SQL",
    issuer: "Google / Coursera",
    date: "Apr 2026",
    image: "/B3_49_SohamDeshpande Tools of the Trade Linux and SQL.png",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "Aug 2026",
    image: "/NVIDIA Fundamentals of Deep Learning.jpg",
  },
];
