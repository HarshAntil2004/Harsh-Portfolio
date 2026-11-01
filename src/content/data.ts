// Single source of truth for portfolio content.
// Add new items to these arrays — sections render dynamically, no layout changes needed.

export const profile = {
  name: "Harsh",
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
    slug: "superstore-analysis",
    title: "Superstore Business Analysis",
    summary:
      "A six-week junior business analyst project that follows one retail business from raw data to a strategy recommendation.",
    problem: "Sales were growing, so why did profit feel flat?",
    solution:
      "Analysed four years of order data to find where margin was being lost, then turned the findings into a strategy recommendation.",
    features: [
      "Sales grew 56% from 2016 to 2018, but margin stayed around 13%",
      "Order lines discounted by more than 20% lost about $135K, while full-price lines earned a 30% margin",
      "Furniture (2.5% margin) and the Central region (5.1% margin in 2018) were the weakest spots",
    ],
    metrics: [
      { label: "Order lines", value: "9,994" },
      { label: "Orders", value: "5,009" },
      { label: "Customers", value: "793" },
      { label: "Profit margin", value: "12.5%" },
    ],
    stack: ["Python", "Business analysis"],
    github: "https://github.com/HarshAntil2004/Superstone-Business-analysis-",
    demo: null,
    featured: true,
  },
  {
    slug: "retailpulse",
    title: "RetailPulse E-commerce Analytics",
    summary:
      "An end-to-end case study taking messy e-commerce order data through cleaning, SQL analysis and EDA to business insights.",
    problem:
      "Leadership at a fictional Indian online retailer wanted to know what drives revenue, which customers and products matter most, and where to focus retention and marketing spend.",
    solution:
      "Cleaned the raw order data, analysed it with SQL, explored it visually and wrote up the insights for the business.",
    features: [
      "Six product categories: Electronics, Fashion, Home & Kitchen, Beauty, Sports and Grocery",
      "Raw data to cleaned data to SQL analysis to EDA to insights",
    ],
    metrics: [],
    stack: ["Python", "SQL", "EDA"],
    github: "https://github.com/HarshAntil2004/Ecommerce-Analytics-Project",
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
      "An interactive Excel learning platform in React: a live spreadsheet simulator, a 16-level roadmap and a practice engine for formulas.",
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

export const softwareProjects = [
  {
    name: "Blockchain AML Monitoring Platform",
    description:
      "A major project that analyses simulated blockchain transactions with rule-based logic to flag money laundering patterns and generate investigation reports.",
    features: [
      "Detects transaction rings and layering patterns",
      "Automatically generates Suspicious Activity Reports (SARs)",
    ],
    stack: ["Python", "Rule-based logic", "Blockchain"],
    featured: true,
    github: "https://github.com/HarshAntil2004/AML-Anti-Money-laundering-Blockchain-Transaction-Monitoring-Investigation-Platform",
    demo: null as string | null,
  },
  {
    name: "Lucknow Public Library Management System",
    description:
      "A junior software engineer internship project: a transactional lending system for a fictional three-branch library network.",
    features: [
      "Books and copies, membership tiers, issue, return and renewal",
      "Reservation queues and fines that handle Sundays, holidays, grace periods and caps",
      "Tests written with pytest",
    ],
    stack: ["Python", "SQLite", "pytest"],
    github: "https://github.com/HarshAntil2004/Lucknow-Library-Project",
    demo: null as string | null,
  },
  {
    name: "7-Minute Workout App",
    description:
      "A native Android app that guides you through a 7-minute workout with a timer, audio cues and exercise animations.",
    features: [
      "Room database that keeps your workout history",
      "BMI calculator and customisable exercises",
    ],
    stack: ["Kotlin", "Android SDK", "Room"],
    github: "https://github.com/HarshAntil2004/Workout-App",
    demo: null as string | null,
  },
  {
    name: "Stock Market Prediction System",
    description:
      "A complete Python system that downloads historical stock data, engineers technical indicators and forecasts prices with ML models and an LSTM network.",
    features: [
      "Compares several machine learning models against an LSTM deep learning model",
      "Interactive Streamlit dashboard for exploring forecasts",
    ],
    stack: ["Python", "Machine Learning", "LSTM", "Streamlit"],
    github: "https://github.com/HarshAntil2004/Stock-Market-Prediction-model",
    demo: null as string | null,
  },
];

export const softwareLearning = [
  {
    title: "Python fundamentals",
    body: "Revising core language concepts with short challenges and code for every topic.",
    github: "https://github.com/HarshAntil2004/Python-Revision" as string | null,
  },
  {
    title: "Data structures and algorithms",
    body: "Building problem-solving fundamentals, backed by my own DSA and Python quick notes.",
    github: null as string | null,
  },
  {
    title: "Databases and SQL",
    body: "Going deeper into relational design, transactions and migrations, building on the library system.",
    github: null as string | null,
  },
  {
    title: "Testing and clean design",
    body: "Practising automated tests, layered architecture and design patterns for code that is easy to change.",
    github: null as string | null,
  },
];

const internVia = "Virtual internship";

export const dataInternships = [
  {
    org: "YuvaIntern",
    role: "Logistics Data Analyst Intern",
    via: internVia,
    points: [
      "Planned a logistics analytics project: defined the scenario, chose KPIs and mapped an end-to-end Python workflow.",
      "Documented a data cleaning pipeline covering missing values, outliers and normalisation, with pandas code.",
      "Explored delivery times, shipment volumes and costs, and visualised them to surface bottlenecks.",
      "Designed a predictive model for a logistics metric, evaluated it with RMSE, MAE and R-squared, and recommended optimisations.",
    ],
    stack: ["Python", "Pandas", "Data visualisation", "Predictive modelling"],
  },
  {
    org: "YuvaIntern",
    role: "Junior Business Analyst Intern",
    via: internVia,
    points: [
      "Cleaned public business data and identified trends, then reported them with charts and actionable insights.",
      "Simulated stakeholder interviews and turned them into a structured requirements document.",
      "Mapped a business process end to end, found bottlenecks and proposed optimisations.",
      "Ran a competitor and market trend analysis, built a SWOT-based strategy and presented it as a final deck and report.",
    ],
    stack: ["Business analysis", "Requirements", "Process mapping", "SWOT", "Presentations"],
  },
];

export const softwareInternships = [
  {
    org: "YuvaIntern",
    role: "Junior Software Developer Intern",
    via: internVia,
    points: [
      "Built a library management system in Python with a relational database, seeded with 2,000 books, 500 members and a year of loan history.",
      "Used a layered design: domain classes, a repository layer for data access and a service layer for business rules.",
      "Enforced lending rules such as tier limits, blocking unpaid fines and protecting reserved copies, using transactions and migration scripts.",
      "Covered the rules with automated tests using pytest.",
    ],
    stack: ["Python", "SQLite", "OOP", "pytest"],
  },
];

export const softwareSimulations = [
  {
    org: "Wells Fargo",
    role: "Software Engineering Job Simulation",
    via: "Forage",
    points: [
      "Worked from requirements for a system that manages financial portfolios.",
      "Worked out what data the system needed to track and drew it as an entity relationship diagram (ERD).",
      "Implemented the ERD in IntelliJ with Java persistence and published the project to GitHub.",
    ],
    stack: ["Java", "Spring", "JPA", "Data modelling", "Database design"],
  },
];
