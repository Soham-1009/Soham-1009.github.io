export const profile = {
  name: "Soham Deshpande",
  role: "AI & ML Developer",
  degree: "MCA (Artificial Intelligence & Machine Learning)",
  university: "Ramdeobaba University",
  location: "Nagpur, Maharashtra, India",
  availability: "Available for internships & full-time roles",
  intro:
    "Motivated AI & ML postgraduate with a solid foundation in Python, SQL, and full-stack development (Django, MySQL, REST APIs). Hands-on experience building AI-powered applications, backend systems, and data pipelines, with strong analytical and communication skills. Interested in software development, data analysis, and research roles.",
  email: "soham.deshpande100904@gmail.com",
  github: "https://github.com/Soham-1009",
  linkedin: "https://linkedin.com/in/soham-deshpande-165452248",
  resume: "/Resume_Updated.pdf",
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
    tagline: "Thermal Infrared to RGB Satellite Image Translation",
    summary:
      "Developed a Pix2Pix conditional GAN (PyTorch) to translate Landsat 9 Thermal Infrared imagery into RGB. Features YOLOv8 integration for automated road-network extraction and an end-to-end training pipeline.",
    year: "2026",
    category: "AI / ML",
    flagship: true,
    stack: ["PyTorch", "Pix2Pix", "OpenCV", "FastAPI", "React", "YOLOv8"],
    repo: "https://github.com/Soham-1009/InfraNova-AI",
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
  { title: "Programming", items: ["Python", "Java", "SQL"] },
  {
    title: "AI/ML & Data",
    items: ["NumPy", "Pandas", "OpenCV", "Matplotlib", "PyTorch", "Scikit-learn"],
  },
  { title: "AI Assistants", items: ["ChatGPT", "Claude", "Gemini"] },
  { title: "Backend & APIs", items: ["Django", "FastAPI", "REST APIs", "HTML", "CSS"] },
  {
    title: "Data & Databases",
    items: ["MySQL", "Oracle Apex", "Data Cleaning", "Data Validation"],
  },
  { title: "Cloud & Dev Tools", items: ["Git", "GitHub", "VS Code", "Google Colab", "Kaggle"] },
  { title: "Data Visualization", items: ["Power BI", "Excel"] },
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
  {
    period: "2022",
    title: "12th Grade (HSC)",
    org: "Pratibha Junior College (Maharashtra State Board)",
    detail: "Higher Secondary Certificate",
  },
  {
    period: "2020",
    title: "10th Grade (SSC)",
    org: "S.N.B.P. International School (CBSE)",
    detail: "Secondary School Certificate",
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
