export const profile = {
  name: "Soham Deshpande",
  role: "AI & ML Developer",
  degree: "MCA (Artificial Intelligence & Machine Learning)",
  university: "Ramdeobaba University",
  location: "Nagpur, Maharashtra, India",
  availability: "Available for internships & full-time roles",
  intro:
    "AI & ML postgraduate with hands-on experience across computer vision, generative AI, and full-stack development. Built and evaluated deep learning models, developed real-time AI applications using multiple LLM/API providers, and shipped REST-based web applications with relational databases.",
  email: "soham.deshpande100904@gmail.com",
  github: "https://github.com/Soham-1009",
  linkedin: "https://linkedin.com/in/soham-deshpande-165452248",
  resume: "/Resume_Master.pdf",
};

export const stats = [
  { value: "3", label: "Major projects" },
  { value: "20+", label: "Technologies" },
  { value: "10+", label: "GitHub repositories" },
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
      "Built a PyTorch-based Pix2PixHD-style conditional GAN that translates Landsat 9 TIRS-2 Band 10 + Band 11 thermal imagery into synthesized RGB imagery. Developed the end-to-end inference platform with FastAPI and React/Vite, including GeoTIFF/NPY support, tiled whole-raster inference, TTA, CLAHE, and model telemetry.",
    year: "2026",
    category: "AI / ML",
    flagship: true,
    stack: ["PyTorch", "Pix2PixHD", "FastAPI", "React/Vite", "GeoTIFF", "YOLOv8"],
    repo: "https://github.com/Soham-1009/InfraNova-AI",
    demo: "https://infranovaai.duckdns.org/",
  },
  {
    slug: "translytic",
    title: "Translytic",
    tagline: "AI-Based Real-Time Video Captioning & Translation System",
    summary:
      "A real-time video processing system integrating OpenAI Whisper, Gemini API, and edge-tts for speech-to-text, translation, subtitle generation, and multilingual dubbing with timestamp synchronization.",
    year: "2025",
    category: "Computer Vision",
    stack: ["Python", "Whisper", "OpenCV", "Gemini API", "Tkinter", "edge-tts"],
    repo: "https://github.com/Soham-1009/Translytic",
  },
  {
    slug: "noteflow",
    title: "NoteFlow",
    tagline: "Full Stack Notes Management Platform",
    summary:
      "A full-stack notes management application featuring user authentication, CRUD operations, category-based filtering, role-based access control, and AJAX-based real-time search capabilities.",
    year: "2024",
    category: "Full Stack",
    stack: ["Django", "MySQL", "JavaScript", "HTML", "CSS"],
    repo: "https://github.com/Soham-1009/Notes-Taking-App",
  },
];

export const skillGroups = [
  {
    title: "Computer Vision & Deep Learning",
    items: [
      "PyTorch",
      "OpenCV",
      "GANs (Pix2PixHD)",
      "YOLOv8",
      "Object Detection",
      "Image-to-Image Translation",
      "Satellite/Thermal Imagery",
    ],
  },
  {
    title: "Generative AI & LLMs",
    items: ["OpenAI Whisper", "Gemini API", "ChatGPT", "Claude", "Prompt Design", "AI API Integration"],
  },
  { title: "Programming Languages", items: ["Python", "Java", "SQL"] },
  {
    title: "Data & Pipelines",
    items: ["Image Preprocessing", "Normalization", "Data Validation", "Reproducible Training", "GPU Training", "Multi-GPU", "AMP"],
  },
  {
    title: "Testing & Validation",
    items: ["Pytest", "Experiment Validation", "Ablation Studies", "Pipeline Evaluation"],
  },
  {
    title: "Backend & Full-Stack",
    items: ["Django", "FastAPI", "REST APIs", "MySQL", "HTML", "CSS", "JavaScript", "NumPy", "Pandas", "Power BI", "Excel"],
  },
  {
    title: "Tools & Collaboration",
    items: ["Git", "GitHub", "Technical Documentation", "Cross-functional Teamwork"],
  },
  {
    title: "Soft Skills",
    items: [
      "Analytical Thinking",
      "Research & Documentation",
      "Problem Solving",
      "Communication",
      "Team Collaboration",
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
    detail: "CGPA 6.58",
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
