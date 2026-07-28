// Single source of truth for portfolio content.
// Add new items to these arrays — sections render dynamically, no layout changes needed.

export const profile = {
  name: "Harsh Antil",
  role: "Data Analyst",
  tagline: "I turn raw, messy data into decisions people can act on.",
  location: "Sonipat, Haryana, India",
  email: "harshantil2026@gmail.com",
  phone: "+91 99918 49373",
  github: "https://github.com/HarshAntil2004",
  linkedin: "https://www.linkedin.com/in/harsh-2004-sonipat/",
  resumeUrl: "/Harsh_Antil_Resume.pdf",
  photoUrl: "https://avatars.githubusercontent.com/u/276988065?v=4",
  availability: "Open to Data / Business Analyst roles — Gurugram · Delhi · Noida · Remote",
  summary:
    "Computer Science & Engineering graduate with a strong foundation in data analysis, structured problem-solving, and evidence-based decision-making. I turn raw data into clear, actionable insight using Python, SQL, and Tableau — sharpened through academic projects and job simulations with global organisations like Deloitte and Tata iQ.",
};

export const strengths = [
  {
    title: "Data-driven decisions",
    body: "I default to evidence over intuition — every recommendation is traced back to a query, a chart, or a number.",
  },
  {
    title: "Independent & consistent",
    body: "Two years of self-directed market research taught me to keep producing quality work with zero external supervision.",
  },
  {
    title: "Clear communication",
    body: "Technical findings are only useful once a CEO or CMO can act on them — I write and present for that audience.",
  },
  {
    title: "Attention to detail",
    body: "From 37 missing values to 160,000 telemetry rows — I don't let small errors compound into wrong conclusions.",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL"],
  },
  {
    category: "Data Analysis",
    items: ["Pandas", "NumPy", "Tableau", "Microsoft Excel", "Apple Numbers"],
  },
  {
    category: "Core Strengths",
    items: [
      "Data-Driven Decision Making",
      "Problem-Solving & Troubleshooting",
      "Time Management",
      "Attention to Detail",
      "Resilience & Consistent Output",
      "Fast Learning",
    ],
  },
  {
    category: "Tools",
    items: ["VS Code", "GitHub", "Git"],
  },
  {
    category: "Languages Spoken",
    items: ["English (Fluent)", "Hindi (Fluent)"],
  },
];

export const experience = [
  {
    org: "Deloitte Australia",
    role: "Data Analytics & Forensic Technology Job Simulation",
    via: "Forage",
    date: "June 2026",
    points: [
      "Processed ~160,000 telemetry readings across 4 factories × 9 machines in Tableau, converting raw status logs into a quantified downtime metric to flag the highest-downtime factory and device type.",
      "Classified employee pay-equity scores across roles into a 3-tier rubric (Fair / Unfair / Highly Discriminative) in Excel.",
      "Synthesised both analyses into forensic business conclusions for stakeholders.",
    ],
    stack: ["Tableau", "Excel"],
  },
  {
    org: "Tata iQ (TCS / Tata Insights & Quants)",
    role: "Data Visualisation Job Simulation",
    via: "Forage",
    date: "June 2026",
    points: [
      "Completed a 4-part simulation translating a business scenario into stakeholder-ready analysis — from framing discussion questions to selecting the optimal chart type for each insight.",
      "Built dashboard visuals in Tableau and delivered a recorded briefing addressing both CEO- and CMO-level information needs.",
    ],
    stack: ["Tableau"],
  },
];

export const projects = [
  {
    slug: "retail-analytics",
    title: "Customer Shopping Trends — Retail Analytics",
    summary:
      "End-to-end analytics project on a retail dataset of 3,900 transactions across 4 product categories — from raw CSV to a stakeholder-ready recommendation.",
    problem:
      "A retail dataset of 3,900 transactions needed to be turned into a concrete answer about which customer segments and categories actually drive revenue.",
    solution:
      "Cleaned the data in Python, moved it into SQL for business-focused querying, then built an interactive Tableau dashboard and a formal report translating the findings into a specific recommendation.",
    features: [
      "Handled 37 missing Review Rating values via category-wise median imputation (Pandas)",
      "10 business-focused SQL queries covering customer segments, seasonal spend, and category revenue",
      "8-visual interactive Tableau dashboard with KPIs",
      "Formal project report and stakeholder presentation deck",
    ],
    metrics: [
      { label: "Transactions analysed", value: "3,900" },
      { label: "Categories", value: "4" },
      { label: "SQL queries written", value: "10" },
      { label: "Revenue from loyal segment", value: "35%" },
    ],
    stack: ["Python", "Pandas", "SQL", "Tableau", "Excel"],
    github: "https://github.com/HarshAntil2004",
    demo: null,
    featured: true,
  },
  {
    slug: "aml-blockchain",
    title: "Blockchain-Based Money Laundering Detection System",
    summary:
      "Rule-based analysis of simulated blockchain transaction data to flag laundering patterns and auto-generate SAR reports.",
    problem:
      "Illicit blockchain activity like ring transactions and layering is hard to spot manually across large transaction graphs.",
    solution:
      "Built structured, rule-based logic to walk simulated transaction data and flag suspicious patterns automatically, closing the loop with generated Suspicious Activity Reports.",
    features: [
      "Detection of transaction rings",
      "Detection of layering patterns",
      "Automated SAR (Suspicious Activity Report) generation",
    ],
    metrics: [],
    stack: ["Python", "Rule-based logic"],
    github:
      "https://github.com/HarshAntil2004/AML-Anti-Money-laundering-Blockchain-Transaction-Monitoring-Investigation-Platform",
    demo: null,
    featured: true,
  },
  {
    slug: "stock-market-prediction",
    title: "Stock Market Prediction Model",
    summary:
      "Academic project applying machine learning techniques to historical stock market data to forecast price movement.",
    problem:
      "Raw historical price data is noisy and non-stationary — turning it into a usable predictive signal requires careful preprocessing before any model can be trusted.",
    solution:
      "Applied structured preprocessing and exploratory visual analysis to historical market data, then trained and evaluated ML models to forecast movement, comparing results against baseline approaches.",
    features: [
      "Historical stock data preprocessing and cleaning",
      "Exploratory visual analysis before modelling",
      "ML-based price movement forecasting",
    ],
    metrics: [],
    stack: ["Python", "Machine Learning"],
    github: "https://github.com/HarshAntil2004/Stock-Market-Prediction-model",
    demo: null,
    featured: false,
  },
  {
    slug: "workout-app",
    title: "Workout App",
    summary:
      "Academic Android project — a workout tracking app built in Kotlin.",
    problem:
      "Manually tracking workouts (sets, reps, progress over time) across paper notes or generic notes apps is disorganised and easy to abandon.",
    solution:
      "Built a native Android app in Kotlin for logging and tracking workouts, giving a dedicated, structured interface rather than a generic notes workaround.",
    features: [
      "Native Android app built in Kotlin",
      "Structured workout logging",
    ],
    metrics: [],
    stack: ["Kotlin", "Android"],
    github: "https://github.com/HarshAntil2004/Workout-App",
    demo: null,
    featured: false,
  },
];

export const research = {
  title: "Independent Investment Research",
  date: "2024 — Present",
  body:
    "Two years of self-initiated, self-managed research into currency markets: evaluating macroeconomic data, building analytical frameworks, and stress-testing assumptions against live outcomes — entirely without external supervision. It taught me the kind of resilience and evidence-based decision-making no coursework can.",
};

export const certifications = [
  {
    name: "Python 101 for Data Science",
    issuer: "IBM · CognitiveClass.ai",
    date: "June 2026",
  },
];

export const education = [
  {
    school: "SRM University, Sonipat",
    degree: "B.Tech, Computer Science & Engineering",
    date: "2022 — 2026",
  },
  {
    school: "South Point Public School, Sonipat",
    degree: "Intermediate & Matriculation (CBSE)",
    date: "2020 & 2022",
  },
];

export const testimonials = [
  {
    quote: "Placeholder, swap in a quote from a manager, professor, or teammate once available.",
    name: "Reference Name",
    title: "Role, Company",
  },
  {
    quote: "Placeholder, swap in a quote from a manager, professor, or teammate once available.",
    name: "Reference Name",
    title: "Role, Company",
  },
];

export const sideProjects = [
  {
    name: "Python Revision",
    description:
      "A running record of Python language concepts, with brief challenges and code alongside each one — used as personal revision notes.",
    stack: ["Python"],
    github: "https://github.com/HarshAntil2004/Python-Revision",
  },
  {
    name: "Pandas Practice",
    description:
      "Hands-on practice repo working through Pandas — data manipulation, cleaning, and analysis patterns.",
    stack: ["Python", "Pandas"],
    github: "https://github.com/HarshAntil2004/Pandas-",
  },
  {
    name: "NumPy Practice",
    description:
      "Practice repo working through NumPy fundamentals — array operations, broadcasting, and numerical computing basics.",
    stack: ["Python", "NumPy"],
    github: "https://github.com/HarshAntil2004/Numpy",
  },
];

export const vibeCodedProjects = [
  {
    name: "FX22 Intelligence Terminal",
    description:
      "A forex-market intelligence terminal — built to bring together the kind of market data and analysis view I've relied on during two years of independent currency research.",
    stack: ["Vibe-coded"],
    github: "https://github.com/HarshAntil2004/FX22-Intelligence-Terminal-Vibe-Coded",
  },
  {
    name: "Name Extractor & Email Specifier",
    description:
      "A small utility for parsing names out of text and matching them to structured email formats.",
    stack: ["Vibe-coded"],
    github: "https://github.com/HarshAntil2004/Name-Extractor-and-Email-specifier-Vibe-Coded",
  },
  {
    name: "Excel Master Academy",
    description:
      "A learning-focused build for practicing and demonstrating Excel skills and workflows.",
    stack: ["Vibe-coded"],
    github: "https://github.com/HarshAntil2004/Excel-Master-Academy-Vibe-coded-",
  },
];

export const githubUsername = "HarshAntil2004";

export const notes = [
  { title: "Data Science Quick Notes", file: "Data_Science_Quick_Notes.pdf" },
  { title: "DSA and Python Quick Notes", file: "DSA_Python_Quick_Notes.pdf" },
  { title: "Excel, Numbers and Tableau Notes", file: "Excel_Numbers_Tableau_Notes.pdf" },
  { title: "Matplotlib Quick Notes", file: "Matplotlib_Quick_Notes.pdf" },
  { title: "NumPy Quick Notes", file: "NumPy_Quick_Notes.pdf" },
  { title: "Pandas Quick Notes", file: "Pandas_Quick_Notes.pdf" },
  { title: "Python Quick Notes", file: "Python_Quick_Notes.pdf" },
  { title: "SQL Quick Notes", file: "SQL_Quick_Notes.pdf" },
];
