export const portfolioData = {
  personal: {
    name: "Nandini Brijlal Borse",
    firstName: "Nandini",
    title: "IT Engineering Student & Aspiring Software Developer",
    statusBadge: "Open to Internships & Software Developer Roles",
    currentRole: "Pursuing B.Tech in IT Engineering from R. C. Patel Institute of Technology, Shirpur",
    location: "Shirpur, Maharashtra, India",
    email: "nandiniborse387@gmail.com",
    phone: "(+91) 9657939636",
    profileImage: "/profile.jpg",
    socials: {
      github: "https://github.com/nandiniborse21",
      linkedin: "https://www.linkedin.com/in/nandini-borse-38",
      codechef: "https://www.codechef.com/users/rcp_cc_767",
      portfolio: "#",
    },
    resumeUrl: "/Nandini_Borse_Resume.pdf",
    bio: [
      "I am an Information Technology Engineering student with a strong foundation in computer engineering, algorithms, and practical software development. Having completed my Diploma in Computer Engineering from SMDR Government Polytechnic Dhule with 88.65% First Class with Distinction and SSC with 91.00%, I am currently advancing my engineering journey with a B.Tech at R. C. Patel Institute of Technology, Shirpur.",
      "I gained practical industry experience during a 3-month curriculum internship at Passion Software Solutions, Jalgaon, where I built a full-stack Attendance Management System using Django. I am passionate about Python, Java, web development, and problem solving, continuously working to improve programming skills and build practical digital solutions."
    ],
    stats: [
      { label: "Diploma Merit", value: "88.65%", subtitle: "SMDR Govt Polytechnic Dhule" },
      { label: "SSC Score", value: "91.00%", subtitle: "High Academic Standing" },
      { label: "Industry Internship", value: "3 Months", subtitle: "Passion Software Solutions" },
      { label: "Problem Solving", value: "CodeChef", subtitle: "Active Competitive Profile" },
    ]
  },

  experience: [
    {
      role: "Diploma Intern (Python & Django)",
      company: "Passion Software Solutions, Jalgaon",
      duration: "3 Months (Curriculum Internship)",
      type: "Internship",
      description: "Completed a curriculum-based internship during Diploma in Computer Engineering. Developed a complete Attendance Management System website for academic faculty to log, calculate, and report student attendance dynamically.",
      keyLearnings: [
        "Backend architecture and models using Django framework",
        "Frontend integration with HTML, CSS, and JavaScript",
        "Database schema design and data validation",
        "Practical software lifecycle and team collaboration"
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in IT Engineering",
      institution: "R. C. Patel Institute of Technology, Shirpur",
      affiliation: "Autonomous Institute (NAAC 'A' Grade, NBA Accredited)",
      duration: "2026 — Present (Batch 2029)",
      status: "Currently Pursuing",
      description: "Focused on advanced algorithms, software engineering principles, distributed systems, full-stack development, and data-driven applications.",
      keyAreas: [
        "Data Structures & Algorithms (DSA)",
        "Object-Oriented Programming (Java / C++)",
        "Database Management Systems (DBMS)",
        "Operating Systems & Web Technologies"
      ]
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "SMDR Government Polytechnic, Dhule",
      affiliation: "MSBTE Board",
      duration: "2023 — 2026",
      status: "First Class with Distinction",
      score: "88.65%",
      description: "Built strong foundations in core computing, C/C++ programming, database design, operating systems, and completed capstone project on Yoga Recommendation System.",
      keyAreas: [
        "Programming in C, C++, and Java",
        "Relational Database Systems (SQL)",
        "Web Development Fundamentals",
        "Computer Networks & Hardware"
      ]
    },
    {
      degree: "Secondary School Certificate (SSC - 10th)",
      institution: "Maharashtra State Board",
      affiliation: "State Board",
      duration: "Completed 2023",
      status: "Outstanding Academic Merit",
      score: "91.00%",
      description: "Demonstrated consistent academic excellence and strong analytical aptitude across mathematics and science.",
      keyAreas: [
        "Mathematics & Logical Reasoning",
        "Science & Computer Literacy",
        "Analytical Problem Solving"
      ]
    }
  ],

  skills: {
    categories: [
      {
        id: "languages",
        title: "Programming Languages",
        description: "Core languages used for problem solving and software logic",
        items: [
          { name: "Java", level: "Proficient", icon: "Coffee", highlight: true },
          { name: "Python", level: "Proficient", icon: "Terminal", highlight: true },
          { name: "C++", level: "Proficient", icon: "Code", highlight: false },
          { name: "C", level: "Foundational", icon: "Binary", highlight: false },
          { name: "JavaScript", level: "Proficient", icon: "FileCode", highlight: true },
        ]
      },
      {
        id: "web-backend",
        title: "Web & Backend Technologies",
        description: "Modern frameworks and web design stacks",
        items: [
          { name: "Django", level: "Intermediate", icon: "Cpu", highlight: true },
          { name: "HTML5", level: "Advanced", icon: "Layout", highlight: false },
          { name: "CSS3", level: "Advanced", icon: "Palette", highlight: false },
          { name: "React.js", level: "Intermediate", icon: "Boxes", highlight: true },
          { name: "Node.js", level: "Intermediate", icon: "Server", highlight: false },
          { name: "Express.js", level: "Intermediate", icon: "Layers", highlight: false },
        ]
      },
      {
        id: "core-cs",
        title: "Core Computer Science",
        description: "Foundational principles forming solid software architecture",
        items: [
          { name: "OOP", level: "Advanced", icon: "Boxes", highlight: true },
          { name: "DBMS", level: "Proficient", icon: "Database", highlight: true },
          { name: "OS", level: "Proficient", icon: "Monitor", highlight: false },
          { name: "DSA", level: "Proficient", icon: "Code", highlight: true },
        ]
      },
      {
        id: "databases-tools",
        title: "Databases & Dev Tools",
        description: "Data storage, version control, and development toolchain",
        items: [
          { name: "SQL", level: "Proficient", icon: "Database", highlight: true },
          { name: "SQLite", level: "Proficient", icon: "HardDrive", highlight: false },
          { name: "MongoDB", level: "Intermediate", icon: "ServerCrash", highlight: false },
          { name: "Git", level: "Proficient", icon: "GitBranch", highlight: true },
          { name: "GitHub", level: "Proficient", icon: "Github", highlight: true },
          { name: "VS Code", level: "Advanced", icon: "Monitor", highlight: false },
        ]
      }
    ]
  },

  projects: [
    {
      id: "yoga-recommendation-system",
      title: "Yoga Recommendation System",
      tagline: "Capstone Project of Diploma in Computer Engineering",
      category: "Python / Django",
      featured: true,
      description: "A personalized healthcare web application that analyzes user symptoms, health conditions, and fitness goals to recommend targeted yoga poses (asanas), detailed guidelines, and precautions.",
      impact: "Helps users identify safe, symptom-specific yoga routines to improve health and physical well-being.",
      technologies: ["Python", "Django", "HTML", "CSS", "SQLite", "JavaScript"],
      githubUrl: "https://github.com/nandiniborse21",
      liveUrl: "#",
      keyFeatures: [
        "Symptom-based yoga pose recommendation engine",
        "Detailed step-by-step guidance and precautions for each asana",
        "Clean, accessible user interface optimized for all devices",
        "Structured SQLite database storing pose data and therapeutic benefits"
      ]
    },
    {
      id: "attendance-management-system",
      title: "Attendance Management System",
      tagline: "Industry Internship Project @ Passion Software Solutions",
      category: "Django Web",
      featured: true,
      description: "A dynamic web portal engineered during a 3-month internship for academic faculty to mark, monitor, and calculate student attendance records with speed and accuracy.",
      impact: "Replaced manual paper registers with an automated web dashboard, saving administrative time and reducing logging errors.",
      technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQL"],
      githubUrl: "https://github.com/nandiniborse21",
      liveUrl: "#",
      keyFeatures: [
        "Faculty login with role-based attendance logging",
        "Automated student attendance percentage calculation",
        "Monthly and semester attendance reporting views",
        "Responsive, mobile-friendly interface for classroom use"
      ]
    }
  ],

  achievements: [
    {
      title: "88.65% with Distinction in Computer Engineering",
      issuer: "SMDR Government Polytechnic, Dhule (MSBTE)",
      year: "2026",
      type: "Academic Excellence",
      description: "Graduated with First Class with Distinction, completing rigorous coursework in C, C++, Java, DBMS, and the Yoga Recommendation System capstone project."
    },
    {
      title: "91.00% Academic Merit in SSC (10th)",
      issuer: "Maharashtra State Board",
      year: "2023",
      type: "Academic Excellence",
      description: "Secured 91.00% marks, establishing a strong academic foundation in mathematics, logic, and physical sciences."
    },
    {
      title: "3 Months Internship Completion at Passion Software Solutions",
      issuer: "Passion Software Solutions, Jalgaon",
      year: "2025/2026",
      type: "Industry Experience",
      description: "Successfully developed and delivered the Attendance Management System web platform using Django as part of the diploma curriculum."
    },
    {
      title: "Active Competitive Problem Solving on CodeChef",
      issuer: "CodeChef (Profile: rcp_cc_767)",
      year: "2026 — Present",
      type: "Problem Solving",
      description: "Consistently practicing algorithms and data structures on CodeChef to sharpen problem-solving and coding efficiency."
    }
  ]
};
