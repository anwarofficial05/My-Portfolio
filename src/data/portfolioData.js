export const personalInfo = {
  name: "MOHAMED ANWAR S",
  role: "Aspiring Data Analyst",
  roles: [
    "Aspiring Data Analyst",
    "Power BI Developer",
    "Python & SQL Specialist",
    "Full-Stack AI Engineer",
    "Canva Designer"
  ],
  location: "Thiruvarur, Tamil Nadu",
  phone: "+91 8072022294",
  rawPhone: "8072022294",
  email: "mohamedanwars1005@gmail.com",
  linkedin: "https://linkedin.com/in/mohamed-anwar-531552371",
  github: "https://github.com/anwarofficial05",
  portfolioUrl: "https://md-anwar-portfolio.netlify.app/",
  whatsapp: "https://wa.me/918072022294?text=Hi%20Mohamed%20Anwar,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect!",
  resumeUrl: "/Mohamed_Anwar_S_Resume.pdf",
  summary: "Motivated Computer Science and Engineering graduate aspiring to become a Data Analyst. Skilled in Power BI, Tableau, Excel, SQL, and Python for data cleaning, analysis, visualization, and reporting. Strong analytical and problem-solving skills with a passion for transforming data into actionable business insights.",
};

export const stats = [
  { label: "Data & BI Analytics", value: "Power BI & SQL", change: "Dashboards & ETL", icon: "BarChart3" },
  { label: "Production Projects", value: "4 Live Apps", change: "Full-Stack & Cloud", icon: "Layers" },
  { label: "Industry Internships", value: "3 Roles", change: "Pluto, TVK, Barola", icon: "Briefcase" },
  { label: "Industry Certifications", value: "14+", change: "Tata, Deloitte, NVIDIA", icon: "Award" },
];

export const projects = [
  {
    id: "credit-risk",
    title: "Loan Approval & Credit Risk Analysis Dashboard",
    category: "Data Analytics & ML",
    badge: "Featured Analytics & ML",
    liveUrl: "https://loan-approval-credit-risk-analysis.netlify.app/",
    githubUrl: "https://github.com/anwarofficial05",
    description: "Engineered a full-stack credit analytics platform analyzing 50,000+ loan records with 12 advanced SQL window & CTE queries in <150ms, powered by dual ML pipelines for real-time approval scoring.",
    metrics: [
      { label: "Dataset Scale", value: "50,000+ records" },
      { label: "Query Speed", value: "<150ms" },
      { label: "ML Architecture", value: "Dual Pipeline" },
      { label: "Algorithms", value: "Random Forest" }
    ],
    tech: ["FastAPI", "React 18", "SQLite", "Python", "Scikit-Learn", "SQL (CTEs & Windows)", "Tailwind CSS"],
    highlights: [
      "Engineered a full-stack credit analytics platform (FastAPI, React 18, SQLite) analyzing 50,000+ loan records with 12 advanced SQL window/CTE queries in <150ms.",
      "Trained and deployed dual ML pipelines (Logistic Regression & Random Forest) for real-time loan approval and default risk scoring.",
      "Built dynamic financial dashboards featuring interactive debt-to-income distribution, credit grade segmentation, and risk probability heatmaps.",
      "Implemented automated feature scaling, missing value imputation, and class balancing pipelines for robust inference."
    ],
    architecture: {
      problem: "Financial institutions face high default rates and slow manual loan processing times due to disjointed databases and legacy scoring formulas.",
      solution: "Developed an automated risk intelligence portal that evaluates applicant risk profile in real-time, delivering dual-model probabilistic scoring alongside comprehensive SQL telemetry.",
      pipeline: "Data Ingestion (SQLite 50k) ➔ Feature Engineering & Preprocessing ➔ Dual ML Model (Logistic Regression + Random Forest) ➔ FastAPI Endpoint ➔ React 18 Visualization"
    }
  },
  {
    id: "jarvis-ai",
    title: "JARVIS - Full-Stack Voice AI Web Platform",
    category: "Full-Stack AI",
    badge: "Real-Time Voice AI",
    liveUrl: "https://voice-assistant-using-python-web.netlify.app/",
    githubUrl: "https://github.com/anwarofficial05",
    description: "Engineered a full-stack real-time Voice AI platform using Python (FastAPI) and HTML5 Web Speech & Web Audio APIs, implementing 50+ modular voice commands with sub-200ms dispatch and telemetry.",
    metrics: [
      { label: "Voice Commands", value: "50+ modular" },
      { label: "Intent Latency", value: "<200ms" },
      { label: "Telemetry", value: "Live Hardware" },
      { label: "UI Visualizer", value: "HTML5 Canvas" }
    ],
    tech: ["Python", "FastAPI", "Web Speech API", "Web Audio API", "HTML5 Canvas", "JavaScript", "Tailwind CSS"],
    highlights: [
      "Engineered a full-stack real-time Voice AI platform using Python (FastAPI) and HTML5 Web Speech & Web Audio APIs.",
      "Implemented 50+ modular voice commands with sub-200ms intent dispatch, handling queries, automation, calculations, and web controls.",
      "Built live hardware telemetry tracking (CPU usage, memory allocation, battery percentage, network connectivity).",
      "Created an interactive particle/waveform canvas visualizer synchronized with user vocal pitch and system speech synthesis."
    ],
    architecture: {
      problem: "Standard web interfaces require manual mouse and keyboard navigation, creating accessibility barriers and slow operational workflows.",
      solution: "Engineered a futuristic voice-operated virtual assistant with real-time bidirectional audio parsing, sub-200ms intent classification, and responsive system feedback.",
      pipeline: "Speech Recognition (Web Speech API) ➔ Intent Matching Engine ➔ FastAPI Dispatch ➔ System Action Execution ➔ Audio Synthesizer & Canvas Frequency Render"
    }
  },
  {
    id: "medknow",
    title: "MedKnow - Healthcare Knowledge Management Portal",
    category: "Full-Stack AI",
    badge: "Enterprise Healthcare",
    liveUrl: "https://medknow-healthcare-portal-6rpp.onrender.com",
    githubUrl: "https://github.com/anwarofficial05",
    description: "Developed MedKnow, a secure healthcare knowledge platform using Python (Flask), SQLAlchemy, and JWT authentication, featuring multi-tier RBAC, clinical protocol versioning, and advisory Q&A workflows.",
    metrics: [
      { label: "Security", value: "JWT & RBAC" },
      { label: "Versioning", value: "Clinical Protocol" },
      { label: "Compliance", value: "Audit Logging" },
      { label: "Workflows", value: "Advisory Q&A" }
    ],
    tech: ["Python", "Flask", "SQLAlchemy", "JWT Authentication", "Role-Based Access Control", "PostgreSQL/SQLite", "REST APIs"],
    highlights: [
      "Developed MedKnow, a secure healthcare knowledge management platform using Python (Flask), SQLAlchemy, and JWT authentication.",
      "Engineered multi-tier role-based access control (RBAC) separating administrative, physician, clinical staff, and patient privileges.",
      "Designed clinical protocol versioning, audit logging, and advisory Q&A workflows ensuring full compliance with medical document governance.",
      "Built full RESTful endpoints with input validation, password hashing, and structured error reporting."
    ],
    architecture: {
      problem: "Hospitals struggle with siloed medical literature, outdated clinical guidelines, and inadequate document version control across multidisciplinary teams.",
      solution: "Engineered a centralized, encrypted clinical governance portal where verified medical protocols are published, version-tracked, and referenced with complete auditability.",
      pipeline: "Authentication (JWT) ➔ RBAC Middleware ➔ Clinical Knowledge Base (SQLAlchemy ORM) ➔ Version Control Diff Engine ➔ Audit Event Logger"
    }
  },
  {
    id: "kubernetes-scheduler",
    title: "Workload Forecasting-Based Proactive Pod Scheduling in Kubernetes",
    category: "Cloud & Systems",
    badge: "AI & Distributed Systems",
    liveUrl: "https://workload-driven-pod-scheduler.netlify.app/",
    githubUrl: "https://github.com/anwarofficial05",
    description: "Developed a proactive Kubernetes scheduling system using LSTM-XGBoost to forecast future workload & resource demand, with multi-objective node ranking to optimize pod placement and resource utilization.",
    metrics: [
      { label: "Model Architecture", value: "LSTM + XGBoost" },
      { label: "Scheduling Type", value: "Proactive Forecast" },
      { label: "Optimization", value: "Multi-Objective" },
      { label: "Cluster Efficiency", value: "Min Latency" }
    ],
    tech: ["Kubernetes", "LSTM Neural Networks", "XGBoost", "Python", "Multi-Objective Optimization", "React", "Docker"],
    highlights: [
      "Developed a proactive Kubernetes scheduling system using LSTM-XGBoost to forecast future workload and resource demand before bottlenecks happen.",
      "Implemented multi-objective node ranking (balancing CPU, Memory, I/O latency, and energy efficiency) to optimize container placement.",
      "Significantly reduced request response time, mitigated node starvation, and elevated overall Kubernetes cluster utilization.",
      "Built an interactive telemetry dashboard simulating cluster nodes, incoming pod queues, and predictive load forecasting curves."
    ],
    architecture: {
      problem: "Default Kubernetes schedulers are purely reactive, leading to pod eviction cascades and CPU throttling during sudden traffic surges.",
      solution: "Pioneered a time-series predictive scheduler combining deep LSTM recurrent layers for trend capture with gradient-boosted trees (XGBoost) for fast decision boundaries.",
      pipeline: "Cluster Metrics Ingestion ➔ LSTM Temporal Sequence Predictor ➔ XGBoost Peak Estimator ➔ Multi-Objective Node Scorer ➔ Proactive Pod Placement"
    }
  }
];

export const skillsData = {
  dataAnalytics: {
    title: "Data Analytics & Visualization",
    icon: "BarChart3",
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "Power BI", level: 90, experience: "Advanced Dashboards & DAX", tag: "Core Tool" },
      { name: "Tableau", level: 85, experience: "Interactive Storytelling & Visuals", tag: "Analytics" },
      { name: "Microsoft Excel", level: 90, experience: "VLOOKUP, Pivot Tables, Advanced Formulas", tag: "Reporting" },
      { name: "Data Cleaning & Wrangling", level: 88, experience: "Handling Nulls, Outliers, Normalization", tag: "ETL" },
      { name: "SQL Window Functions & CTEs", level: 92, experience: "Complex Queries, Ranking, Lead/Lag", tag: "SQL" },
      { name: "Exploratory Data Analysis (EDA)", level: 88, experience: "Statistical Distributions & Correlations", tag: "Insights" }
    ]
  },
  programming: {
    title: "Programming & Databases",
    icon: "Code2",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: 92, experience: "Pandas, NumPy, Scikit-Learn, FastAPI", tag: "Primary Language" },
      { name: "SQL (MySQL, SQLite, PostgreSQL)", level: 90, experience: "Relational Modeling, Indexing, Joins", tag: "Databases" },
      { name: "Java", level: 80, experience: "OOP Concepts, Collections, Concurrency", tag: "Languages" },
      { name: "C Programming", level: 78, experience: "Pointers, Memory Allocation, Algorithms", tag: "CS Fundamentals" },
      { name: "SQLAlchemy & ORM", level: 85, experience: "Database Migrations & Relational Queries", tag: "Backend" }
    ]
  },
  machineLearning: {
    title: "AI & Machine Learning",
    icon: "Cpu",
    color: "from-pink-500 to-purple-500",
    skills: [
      { name: "Scikit-Learn", level: 88, experience: "Classification, Regression, Pipeline Tuning", tag: "Machine Learning" },
      { name: "Logistic Regression & Random Forest", level: 92, experience: "Credit Scoring & Fraud Risk Models", tag: "Applied ML" },
      { name: "LSTM & XGBoost", level: 84, experience: "Workload Forecasting & Time Series", tag: "Deep Learning" },
      { name: "Agentic AI & LLM Prompting", level: 86, experience: "Claude Code, Generative AI Workflows", tag: "GenAI" },
      { name: "Model Evaluation (ROC-AUC, F1)", level: 90, experience: "Cross-validation & Metric Optimization", tag: "Validation" }
    ]
  },
  frontend: {
    title: "Frontend & Full-Stack Web",
    icon: "Globe",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "HTML5 & CSS3", level: 92, experience: "Semantic Markups, Animations, Flex/Grid", tag: "Web" },
      { name: "JavaScript (ES6+)", level: 86, experience: "Async/Await, DOM, Event Dispatching", tag: "Frontend" },
      { name: "React 18", level: 85, experience: "Hooks, State Management, Custom Components", tag: "Framework" },
      { name: "Tailwind CSS", level: 90, experience: "Responsive Design, Glassmorphism, UI/UX", tag: "Styling" },
      { name: "FastAPI & Flask", level: 88, experience: "High-throughput APIs, JWT Auth, Docs", tag: "Backend APIs" },
      { name: "Web Speech & Audio APIs", level: 85, experience: "Speech Synthesis & Audio Processing", tag: "Browser APIs" }
    ]
  },
  tools: {
    title: "Developer Tools & Design",
    icon: "Wrench",
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "VS Code", level: 92, experience: "Primary Development Environment", tag: "IDE" },
      { name: "Git & GitHub", level: 88, experience: "Version Control, Branching, PRs", tag: "DevOps" },
      { name: "Canva & Digital Design", level: 92, experience: "Poster, Brand & Social Media Creatives", tag: "Design" },
      { name: "AI Prompting & Copilots", level: 94, experience: "Claude, Anthropic AI Tools, ChatGPT", tag: "Productivity" },
      { name: "Miro & Workflow Diagramming", level: 82, experience: "System Architecture & Whiteboarding", tag: "Planning" }
    ]
  }
};

export const softSkills = [
  "Problem Solving & Analytical Thinking",
  "Teamwork & Cross-functional Communication",
  "Time Management & Adaptability",
  "Creativity & Innovation in Solution Design",
  "Attention to Detail & Data Integrity",
  "Continuous Learning & Quick Tech Adoption"
];

export const internships = [
  {
    role: "Data Analytics Intern",
    company: "Pluto Academy",
    period: "June 2026",
    type: "Internship",
    location: "Remote / Hybrid",
    description: "Conducted end-to-end exploratory data analysis, data cleaning, and KPI dashboarding using Power BI and Microsoft Excel.",
    achievements: [
      "Transformed raw unstructured data into clean structured tables, mitigating data anomalies.",
      "Designed dynamic Power BI reports with drill-through filters and summary cards for executive briefings.",
      "Formulated data-driven recommendations that identified key operational growth opportunities."
    ],
    badge: "Data Analytics"
  },
  {
    role: "Python with Data Science Intern",
    company: "TVK Technologies",
    period: "June – July 2026",
    type: "Internship",
    location: "Tamil Nadu, India",
    description: "Built scalable data processing scripts and predictive machine learning models in Python.",
    achievements: [
      "Engineered automated ETL data extraction pipelines using Pandas and NumPy.",
      "Trained classification and regression models evaluating accuracy across standard statistical metrics.",
      "Synthesized findings into automated visual reports, reducing reporting turnaround time by 35%."
    ],
    badge: "Python & Data Science"
  },
  {
    role: "Machine Learning Intern",
    company: "Barola Technologies",
    period: "June – July 2025",
    type: "Internship",
    location: "Tamil Nadu, India",
    description: "Collaborated on core machine learning model experimentation, dataset preprocessing, and hyperparameter tuning.",
    achievements: [
      "Preprocessed high-dimensional datasets utilizing standardization and feature encoding techniques.",
      "Evaluated model convergence curves and cross-validation scores using Scikit-Learn.",
      "Authored technical documentation outlining algorithmic workflows and performance metrics."
    ],
    badge: "Machine Learning"
  }
];

export const volunteering = [
  {
    role: "Volunteer Canva Designer",
    organization: "Udhiram Kodu Trust",
    description: "Designed promotional posters, social media banners, and awareness campaign materials; contributed to branding and digital outreach initiatives for community blood donation and public health drives.",
    tag: "Leadership & Community Outreach"
  }
];

export const education = {
  degree: "Bachelor of Computer Science and Engineering",
  institution: "Anjalai Ammal Mahalingam Engineering College",
  location: "Koilvenni, Tamil Nadu, India",
  graduationYear: "Expected Graduation: 2027",
  highlights: [
    "Core focus on Data Analytics, Database Management Systems, and Artificial Intelligence",
    "Hands-on project development across Machine Learning, Full-Stack Web, and Cloud Systems",
    "Active participant in technical symposiums, hackathons, and community design initiatives"
  ]
};

export const certifications = [
  {
    title: "Tata GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata / Forage",
    category: "Data Analytics & AI",
    icon: "Sparkles",
    tag: "GenAI Analytics"
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte",
    category: "Data Analytics & AI",
    icon: "BarChart3",
    tag: "Business Intelligence"
  },
  {
    title: "TCS iON Master Data Management",
    issuer: "TCS iON",
    category: "Enterprise Data",
    icon: "Database",
    tag: "Data Governance"
  },
  {
    title: "NVIDIA AI Certification",
    issuer: "NVIDIA",
    category: "Artificial Intelligence",
    icon: "Cpu",
    tag: "Deep Learning & AI"
  },
  {
    title: "Cisco Python Essentials",
    issuer: "Cisco Networking Academy",
    category: "Programming",
    icon: "Code2",
    tag: "Python Core"
  },
  {
    title: "Deloitte Cyber Job Simulation",
    issuer: "Deloitte",
    category: "Cybersecurity & Cloud",
    icon: "ShieldCheck",
    tag: "Cyber Defense"
  },
  {
    title: "IBM AI Fundamentals",
    issuer: "IBM",
    category: "Artificial Intelligence",
    icon: "Brain",
    tag: "AI Concepts"
  },
  {
    title: "Tata Data Visualisation",
    issuer: "Tata Insights & Quants",
    category: "Data Analytics & AI",
    icon: "PieChart",
    tag: "Executive Dashboards"
  },
  {
    title: "Power BI Workshop Certification",
    issuer: "Power BI Workshop",
    category: "Data Analytics & AI",
    icon: "TrendingUp",
    tag: "Business Intelligence"
  },
  {
    title: "Claude / Claude Code / AI Fluency Certifications",
    issuer: "Anthropic",
    category: "Artificial Intelligence",
    icon: "Sparkles",
    tag: "Prompting & Fluency"
  },
  {
    title: "Agentic AI Mastery",
    issuer: "Infosys Springboard",
    category: "Artificial Intelligence",
    icon: "Cpu",
    tag: "Agentic Systems"
  },
  {
    title: "SQL Case Study – SQL Workshop",
    issuer: "Infosys Springboard",
    category: "Enterprise Data",
    icon: "Database",
    tag: "Advanced SQL"
  },
  {
    title: "SAP Certifications",
    issuer: "SAP",
    category: "Enterprise Data",
    icon: "CheckCircle2",
    tag: "ERP & Analytics"
  },
  {
    title: "Microsoft Professional Badges",
    issuer: "Microsoft",
    category: "Enterprise Data",
    icon: "Award",
    tag: "Cloud & Productivity"
  }
];

export const aiAssistantFAQs = [
  {
    question: "Why should we hire Mohamed Anwar?",
    answer: "Mohamed Anwar offers a rare blend of rigorous Data Analytics expertise (Power BI, SQL CTEs, EDA) paired with real-world Full-Stack AI engineering (FastAPI, React 18, ML deployment). He has built production applications analyzing 50,000+ records in <150ms, deployed dual ML predictive models, and completed 3 industry internships. He is quick to learn, proactive, and ready to deliver immediate value.",
    relatedSection: "skills"
  },
  {
    question: "What are his primary Data Analytics and SQL skills?",
    answer: "Anwar excels in SQL Window functions, Common Table Expressions (CTEs), multi-table joins, and query optimization. In his credit risk project, he benchmarked 12 SQL queries over 50,000 records in under 150ms. Additionally, he builds executive-grade interactive dashboards in Power BI and Tableau, supported by advanced Excel modeling (Pivot Tables, VLOOKUP) and Python (Pandas, NumPy).",
    relatedSection: "skills"
  },
  {
    question: "Tell me about the Loan Approval & Credit Risk project.",
    answer: "The Credit Risk Analysis Dashboard is a full-stack credit analytics platform built with FastAPI, React 18, and SQLite. It analyzes 50k+ records and employs dual ML pipelines (Logistic Regression and Random Forest) for real-time risk scoring and loan approval assessment.",
    relatedSection: "projects"
  },
  {
    question: "What did he build for the JARVIS Voice AI project?",
    answer: "JARVIS is a full-stack real-time voice operating platform engineered with Python (FastAPI) and HTML5 Web Speech & Web Audio APIs. It features 50+ modular voice commands, sub-200ms intent dispatch, live hardware telemetry (CPU, RAM, battery), and a custom interactive canvas audio visualizer.",
    relatedSection: "projects"
  },
  {
    question: "What is the Kubernetes Pod Scheduling project about?",
    answer: "This project addresses cluster latency by combining LSTM deep neural networks with XGBoost to proactively forecast workload and resource demand in Kubernetes. It employs multi-objective node ranking to optimize pod placement, preventing bottlenecks before they happen.",
    relatedSection: "projects"
  },
  {
    question: "What internships has Anwar completed?",
    answer: "Anwar has completed three technical internships: (1) Data Analytics Intern at Pluto Academy (Power BI, Excel reporting), (2) Python with Data Science Intern at TVK Technologies (ETL, Scikit-Learn), and (3) Machine Learning Intern at Barola Technologies (data preprocessing, algorithmic tuning).",
    relatedSection: "experience"
  },
  {
    question: "How can I contact or interview Anwar?",
    answer: "You can reach Anwar directly via email at mohamedanwars1005@gmail.com, call +91 8072022294, connect on LinkedIn (linkedin.com/in/mohamed-anwar-531552371), or send a quick WhatsApp message. He is available for immediate conversations regarding full-time roles and internships.",
    relatedSection: "contact"
  }
];
