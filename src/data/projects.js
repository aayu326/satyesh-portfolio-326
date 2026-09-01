export const projectFilters = [
  "All",
  "Business Websites",
  "AI / Chatbot",
  "Web Applications",
  "College / Community"
];

export const projects = [
  {
    id: "kailvora-infra",
    number: "01",
    slug: "kailvora-infra",
    name: "Kailvora Infra",
    subtitle: "Professional Real Estate & Infrastructure Website",
    category: "Business Website",
    type: "Business Website",
    role: "Full-Stack Developer",
    accentColor: "#10b981",
    isFeatured: true,

    image:
      "https://i.postimg.cc/mrnj9TGY/Screenshot-2026-08-23-at-12-27-43-AM.png",

    description:
      "A modern business website developed for Kailvora Infra to establish a professional digital presence and showcase its infrastructure and real-estate services through a responsive and user-friendly experience.",

    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS"
    ],

    github: null,
    live: "https://www.kailvorainfra.com/",
    preview: "construction",

    caseStudy: {
      overview:
        "Kailvora Infra is a professional business website created to present the company's infrastructure and real-estate services with a modern digital presence.",

      problem:
        "The business required a professional online presence where visitors could understand the company, explore its services and projects, and easily get in touch.",

      solution:
        "Developed a responsive React-based website with modern UI design, structured business content, responsive layouts and clear calls-to-action.",

      features: [
        {
          title: "Responsive Business Website",
          desc:
            "Responsive layouts designed for desktop, tablet and mobile visitors."
        },
        {
          title: "Company & Services Presentation",
          desc:
            "Structured sections for company information, services and business offerings."
        },
        {
          title: "Modern User Interface",
          desc:
            "Clean and professional interface focused on readability and user experience."
        },
        {
          title: "Contact & Conversion Flow",
          desc:
            "Clear calls-to-action helping visitors connect with the business."
        }
      ],

      architecture: {
        frontend:
          "React-based responsive frontend with reusable components.",
        backend:
          "Frontend-focused business website architecture.",
        database:
          "No database required for the core business website.",
        authentication:
          "No authentication required.",
        apis:
          "External integrations where required.",
        deployment:
          "Production deployment on the live Kailvora Infra domain."
      },

      folderStructure: `Kailvora-Infra/
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── public/
└── package.json`,

      modules: [
        {
          name: "Business Website",
          desc:
            "Presents the company, services and professional business information."
        },
        {
          name: "Responsive UI",
          desc:
            "Provides an optimized experience across different screen sizes."
        },
        {
          name: "Contact Experience",
          desc:
            "Helps potential customers connect with the business."
        }
      ],

      dataModel: [],

      auth:
        "No authentication system is required for the public-facing business website.",

      decisions: [
        {
          title: "React-Based Architecture",
          rationale:
            "React provides reusable components and makes the website easier to maintain and extend."
        }
      ],

      challenges: [
        {
          challenge:
            "Creating a professional business presence while keeping the interface simple and responsive.",
          solution:
            "Used structured sections, responsive layouts and focused calls-to-action."
        }
      ],

      futureImprovements: [
        "Project/property listing management.",
        "CMS integration for easier content updates.",
        "Advanced SEO and analytics integration."
      ]
    }
  },

  {
    id: "vantage-hall-ai",
    number: "02",
    slug: "vantage-hall-ai",
    name: "Vantage Hall AI Chatbot",
    subtitle: "AI-Powered Conversational Assistant",
    category: "AI / Chatbot",
    type: "AI / Chatbot Application",
    role: "Developer",
    accentColor: "#8b5cf6",
    isFeatured: true,

    image:
      "https://i.postimg.cc/hjrGwtPJ/Screenshot-2026-08-23-at-12-31-05-AM.png",

    description:
      "An AI-powered chatbot solution developed for Vantage Hall that verifies user details through email OTP and provides an interactive conversational experience for website visitors.",

    technologies: [
      "React",
      "JavaScript",
      "AI Chatbot",
      "OTP Verification"
    ],

    github: null,
    live: "https://vantagehall-org.vercel.app/",
    preview: "social",

    caseStudy: {
      overview:
        "Vantage Hall AI Chatbot provides visitors with an interactive conversational experience while adding email OTP verification for user validation.",

      problem:
        "Website visitors needed an interactive way to communicate and access information while the system also needed a basic verification mechanism.",

      solution:
        "Developed an interactive React chatbot experience with AI-powered conversations and email OTP verification.",

      features: [
        {
          title: "AI Conversational Experience",
          desc:
            "Interactive chatbot experience designed for website visitors."
        },
        {
          title: "Email OTP Verification",
          desc:
            "Email-based OTP verification for validating visitor details."
        },
        {
          title: "Interactive Chat Interface",
          desc:
            "Responsive conversational interface for smooth visitor interaction."
        },
        {
          title: "Responsive Experience",
          desc:
            "Chatbot interface designed to work across desktop and mobile devices."
        }
      ],

      architecture: {
        frontend:
          "React-based interactive chatbot interface.",
        backend:
          "Application services supporting chatbot and verification functionality.",
        database:
          "Database requirements depend on the deployed chatbot configuration.",
        authentication:
          "Email OTP verification for user validation.",
        apis:
          "AI and email verification service integrations.",
        deployment:
          "Deployed as a production web application on Vercel."
      },

      folderStructure: `Vantage-Hall-AI/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
├── public/
└── package.json`,

      modules: [
        {
          name: "AI Chat Interface",
          desc:
            "Provides the interactive conversational experience for visitors."
        },
        {
          name: "OTP Verification",
          desc:
            "Handles email-based verification of visitor information."
        },
        {
          name: "Visitor Interaction",
          desc:
            "Creates a structured conversational flow for website users."
        }
      ],

      dataModel: [],

      auth:
        "Email OTP verification is used to validate visitor details.",

      decisions: [
        {
          title: "Interactive React Interface",
          rationale:
            "React enables a responsive and component-based chatbot experience."
        }
      ],

      challenges: [
        {
          challenge:
            "Combining conversational interaction with user verification.",
          solution:
            "Integrated the chatbot experience with an email OTP verification flow."
        }
      ],

      futureImprovements: [
        "Advanced AI knowledge-base integration.",
        "Conversation history and analytics.",
        "Admin dashboard for chatbot management."
      ]
    }
  },

  {
    id: "qrify",
    number: "03",
    slug: "qrify",
    name: "QRIFY",
    subtitle: "Restaurant Digital Menu & Ordering Platform",
    category: "Web Application",
    type: "Web Application",
    role: "Developer",
    accentColor: "#f59e0b",
    isFeatured: false,

    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",

    description:
      "QRIFY is a restaurant-focused web application that allows customers to scan a QR code, instantly access a digital menu and interact with restaurant ordering functionality.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Application"
    ],

    github: null,
    live: "https://qrifyteam.netlify.app/",
    preview: "management",

    caseStudy: {
      overview:
        "QRIFY provides restaurants with a digital menu experience where customers can access menus directly through QR codes.",

      problem:
        "Traditional printed menus can be difficult to update and require customers to physically handle menus inside restaurants.",

      solution:
        "Created a QR-based digital restaurant experience allowing customers to access menus instantly from their devices.",

      features: [
        {
          title: "QR-Based Menu Access",
          desc:
            "Customers can access the restaurant menu directly through a QR code."
        },
        {
          title: "Digital Restaurant Menu",
          desc:
            "A structured digital menu experience for restaurant customers."
        },
        {
          title: "Mobile-Friendly Interface",
          desc:
            "Designed for customers accessing the menu from smartphones."
        },
        {
          title: "Ordering Experience",
          desc:
            "Supports interaction with restaurant ordering functionality."
        }
      ],

      architecture: {
        frontend:
          "Responsive web interface built using HTML, CSS and JavaScript.",
        backend:
          "Web application functionality based on the project implementation.",
        database:
          "Not specified in the provided project details.",
        authentication:
          "Not specified in the provided project details.",
        apis:
          "Not specified in the provided project details.",
        deployment:
          "Deployed as a live web application on Netlify."
      },

      folderStructure: `QRIFY/
├── assets/
├── css/
├── js/
├── index.html
└── package files`,

      modules: [
        {
          name: "Digital Menu",
          desc:
            "Provides customers with instant access to restaurant menu information."
        },
        {
          name: "QR Access",
          desc:
            "Connects physical QR codes with the digital restaurant experience."
        },
        {
          name: "Ordering Experience",
          desc:
            "Provides interaction with restaurant ordering functionality."
        }
      ],

      dataModel: [],

      auth:
        "No authentication details were specified for the project.",

      decisions: [
        {
          title: "QR-Based Experience",
          rationale:
            "QR access provides customers with a fast and convenient way to open a restaurant menu."
        }
      ],

      challenges: [
        {
          challenge:
            "Creating a simple restaurant experience optimized for mobile users.",
          solution:
            "Focused on a responsive interface and quick menu accessibility."
        }
      ],

      futureImprovements: [
        "Restaurant admin dashboard.",
        "Online payment integration.",
        "Order tracking and kitchen management."
      ]
    }
  },

  {
    id: "acm-tulas",
    number: "04",
    slug: "acm-tulas",
    name: "ACM Student Chapter Website",
    subtitle: "Tula's Institute Student Community Website",
    category: "College / Community",
    type: "Community Website",
    role: "Developer",
    accentColor: "#06b6d4",
    isFeatured: false,

    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",

    description:
      "A responsive website developed for the ACM Student Chapter at Tula's Institute featuring chapter information, events, team members and achievements in a modern digital experience.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS"
    ],

    github: null,
    live: "https://acmtulas.netlify.app/",
    preview: "cms",

    caseStudy: {
      overview:
        "The ACM Student Chapter website provides students with a centralized online platform for chapter information, events, team details and achievements.",

      problem:
        "The student chapter needed a dedicated digital platform to present its activities, events and community information.",

      solution:
        "Developed a responsive website with structured sections for events, team information and chapter achievements.",

      features: [
        {
          title: "Chapter Information",
          desc:
            "Dedicated sections for ACM chapter information and activities."
        },
        {
          title: "Events Showcase",
          desc:
            "Displays events and activities organized by the student chapter."
        },
        {
          title: "Team Information",
          desc:
            "Presents student chapter team members and their roles."
        },
        {
          title: "Achievements",
          desc:
            "Highlights chapter accomplishments and important activities."
        }
      ],

      architecture: {
        frontend:
          "Responsive frontend built using HTML, CSS, JavaScript and Tailwind CSS.",
        backend:
          "Static/community website architecture.",
        database:
          "No database required for the core website.",
        authentication:
          "No authentication required.",
        apis:
          "No external API requirement specified.",
        deployment:
          "Deployed as a live website on Netlify."
      },

      folderStructure: `ACM-Tulas/
├── assets/
├── components/
├── css/
├── js/
├── index.html
└── package.json`,

      modules: [
        {
          name: "Events Section",
          desc:
            "Showcases ACM student chapter events and activities."
        },
        {
          name: "Team Section",
          desc:
            "Displays chapter team information."
        },
        {
          name: "Achievements Section",
          desc:
            "Highlights important chapter accomplishments."
        }
      ],

      dataModel: [],

      auth:
        "No authentication system is required for the public chapter website.",

      decisions: [
        {
          title: "Responsive Design",
          rationale:
            "The website needed to remain accessible and usable across desktop and mobile devices."
        }
      ],

      challenges: [
        {
          challenge:
            "Presenting multiple types of student chapter information in a clear structure.",
          solution:
            "Organized events, team information and achievements into dedicated sections."
        }
      ],

      futureImprovements: [
        "Admin panel for managing events.",
        "Dynamic event registration.",
        "Student member dashboard."
      ]
    }
  }
];