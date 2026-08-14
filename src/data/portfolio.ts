export const profile = {
  name: "Soham Deshpande",
  role: "AI & ML Developer",
  degree: "MCA (Artificial Intelligence & Machine Learning)",
  university: "Ramdeobaba University",
  location: "Nagpur, Maharashtra, India",
  availability: "Available for internships & full-time roles",
  intro:
    "I build AI-powered applications, computer-vision systems, full-stack software, and data tools — and I'm looking for opportunities in AI / ML and Software Development.",
  email: "soham@portfolio",
  github: "https://github.com/Soham-1009",
  linkedin: "https://linkedin.com/in/soham-deshpande-165452248",
  resume: "/Resume.pdf",
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
};

export const projects: Project[] = [
  {
    slug: "infranova-ai",
    title: "InfraNova AI",
    tagline: "Thermal infrared satellite imagery translated into RGB",
    summary:
      "An end-to-end generative AI pipeline built for the Bharatiya Antariksh Hackathon 2026 to improve visual interpretation of thermal infrared satellite imagery.",
    year: "2026",
    category: "AI / ML",
    flagship: true,
    stack: ["PyTorch", "Pix2Pix", "OpenCV", "Streamlit", "Google Earth Engine", "GeoTIFF"],
    repo: "https://github.com/Soham-1009/InfraNova-AI",
  },
  {
    slug: "translytic",
    title: "Translytic",
    tagline: "Real-time video captioning and translation",
    summary:
      "An AI-powered video processing application that transcribes speech, translates captions, and produces synchronized translated audio.",
    year: "2025",
    category: "Computer Vision",
    stack: ["Python", "Whisper", "OpenCV", "MoviePy", "FFmpeg", "gTTS"],
    repo: "https://github.com/Soham-1009",
  },
  {
    slug: "notes-app",
    title: "Notes Taking App",
    tagline: "Python and MySQL note management application",
    summary:
      "A web-based notes application built around a Python backend, MySQL database, and a responsive frontend.",
    year: "2024",
    category: "Full Stack",
    stack: ["Python", "MySQL", "HTML", "CSS"],
    repo: "https://github.com/Soham-1009",
  },
];

export const skillGroups = [
  { title: "Programming", items: ["Python", "Java", "SQL"] },
  {
    title: "AI & Machine Learning",
    items: ["PyTorch", "Scikit-Learn", "Transformers", "Hugging Face", "OpenCV", "NumPy", "Pandas"],
  },
  { title: "Web & Backend", items: ["HTML5", "CSS3", "MySQL"] },
  {
    title: "Data & Visualization",
    items: ["Power BI", "Matplotlib", "Google Colab", "Google Earth Engine", "Kaggle"],
  },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "Docker", "Figma", "VS Code"] },
];

export const timeline = [
  {
    period: "2022 – 2025",
    title: "BCA",
    org: "G.H. Raisoni College of Engineering and Management, Nagpur",
    detail: "CGPA 6.58",
  },
  {
    period: "2025 – Present",
    title: "MCA (AI & ML)",
    org: "Ramdeobaba University, Nagpur",
    detail: "Specialization in Artificial Intelligence and Machine Learning",
  },
  {
    period: "Ongoing",
    title: "Applied AI & software projects",
    org: "Independent and academic work",
    detail: "Generative AI, computer vision, NLP, web development, and data analytics",
  },
  {
    period: "Next",
    title: "Looking ahead",
    org: "Open to new roles",
    detail: "Seeking opportunities in AI/ML, data science, and software development",
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
];
