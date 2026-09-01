/* ============================================================
   SATYESH KUMAR SINGH — PORTFOLIO
   main.js
   Typewriter · Navbar · Smooth Scroll · Reveal · Filter
   Skills Constellation · Project Modal · Services Slider
   ============================================================ */


/* ============================================================
   1. TYPEWRITER
   ============================================================ */

(function () {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const roles = [
    "Full-Stack Developer",
    "React.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const currentRole = roles[roleIndex];

    if (deleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    el.textContent = currentRole.slice(0, charIndex);

    if (!deleting && charIndex === currentRole.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }

    if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 400);
      return;
    }

    setTimeout(type, deleting ? 50 : 85);
  }

  setTimeout(type, 600);
})();


/* ============================================================
   2. NAVBAR SCROLL + ACTIVE LINK
   ============================================================ */

(function () {
  const nav = document.getElementById("mainNav");

  function updateNavbar() {
    if (nav) {
      nav.classList.toggle("scrolled", window.scrollY > 60);
    }

    const scrollPosition = window.scrollY + 120;

    document.querySelectorAll("section[id]").forEach(section => {
      const link = document.querySelector(
        `.nav-link[href="#${section.id}"]`
      );

      if (!link) return;

      const active =
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight;

      link.classList.toggle("active", active);
    });
  }

  window.addEventListener("scroll", updateNavbar, {
    passive: true
  });

  updateNavbar();
})();


/* ============================================================
   3. SMOOTH SCROLL
   ============================================================ */

(function () {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      /* Close mobile navbar */
      const navMenu = document.getElementById("navMenu");
      const navbarToggler = document.querySelector(".navbar-toggler");

      if (
        navMenu &&
        navMenu.classList.contains("show") &&
        navbarToggler
      ) {
        navbarToggler.click();
      }

      const offset = 80;

      window.scrollTo({
        top:
          target.getBoundingClientRect().top +
          window.scrollY -
          offset,
        behavior: "smooth"
      });
    });
  });
})();


/* ============================================================
   4. SCROLL REVEAL
   ============================================================ */

(function () {
  const elements = document.querySelectorAll(".reveal");

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const parent = entry.target.parentElement;

        const siblings = parent
          ? [...parent.children].filter(child =>
              child.classList.contains("reveal")
            )
          : [];

        const index = siblings.indexOf(entry.target);

        setTimeout(() => {
          entry.target.classList.add("visible");
        }, Math.max(index, 0) * 70);

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -30px 0px"
    }
  );

  elements.forEach(element => {
    observer.observe(element);
  });
})();


/* ============================================================
   5. PROJECT FILTER
   ============================================================ */

(function () {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".project-item");

  if (!buttons.length || !items.length) return;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const filter = button.dataset.filter;

      items.forEach(item => {
        const category = item.dataset.category;

        const shouldHide =
          filter !== "all" &&
          category !== filter;

        item.classList.toggle("hidden", shouldHide);
      });
    });
  });
})();


/* ============================================================
   6. CONTACT FORM
   ============================================================ */

function handleContact() {
  const get = id => document.getElementById(id);

  const name = get("contactName");
  const email = get("contactEmail");
  const subject = get("contactSubject");
  const message = get("contactMessage");

  const errorElement = get("form-error");
  const successElement = get("form-success");
  const sendButton = get("sendBtn");

  if (!name || !email || !subject || !message) {
    return;
  }

  if (errorElement) {
    errorElement.classList.add("d-none");
  }

  if (successElement) {
    successElement.classList.add("d-none");
  }

  /* Validate fields */

  if (
    !name.value.trim() ||
    !email.value.trim() ||
    !subject.value.trim() ||
    !message.value.trim()
  ) {
    if (errorElement) {
      errorElement.textContent =
        "Please fill in all fields.";

      errorElement.classList.remove("d-none");
    }

    return;
  }

  /* Validate email */

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.value.trim())) {
    if (errorElement) {
      errorElement.textContent =
        "Please enter a valid email address.";

      errorElement.classList.remove("d-none");
    }

    return;
  }

  /*
     Portfolio contact form currently uses
     frontend validation only.
  */

  if (sendButton) {
    sendButton.disabled = true;

    sendButton.innerHTML =
      '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
  }

  setTimeout(() => {
    if (sendButton) {
      sendButton.disabled = false;

      sendButton.innerHTML =
        'Send Message <i class="bi bi-send ms-2"></i>';
    }

    if (successElement) {
      successElement.textContent =
        "Thanks! Your message has been submitted.";

      successElement.classList.remove("d-none");
    }

    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";

    setTimeout(() => {
      if (successElement) {
        successElement.classList.add("d-none");
      }
    }, 5000);

  }, 1200);
}


/* ============================================================
   7. FOOTER YEAR
   ============================================================ */

(function () {
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent =
      new Date().getFullYear();
  }
})();


/* ============================================================
   8. HERO ENTRANCE ANIMATION
   ============================================================ */

(function () {
  const heroContent =
    document.querySelector(".hero-content");

  if (!heroContent) return;

  heroContent.style.opacity = "0";
  heroContent.style.transform = "translateY(22px)";
  heroContent.style.transition =
    "opacity .9s ease, transform .9s ease";

  setTimeout(() => {
    heroContent.style.opacity = "1";
    heroContent.style.transform =
      "translateY(0)";
  }, 250);
})();


/* ============================================================
   9. SKILLS CONSTELLATION
   ============================================================ */

(function () {
  const canvas =
    document.getElementById("constellation");

  if (!canvas) return;

  const container = canvas.parentElement;

  if (!container) return;

  const tooltip =
    document.getElementById("skill-tooltip");

  const ctx = canvas.getContext("2d");

  if (!ctx) return;


  /* ----------------------------------------------------------
     SKILLS
     ---------------------------------------------------------- */

  const SKILLS = [

    /* Frontend */

    {
      id: "react",
      label: "React.js",
      cat: "frontend",
      pct: 88,
      icon: "⚛"
    },

    {
      id: "javascript",
      label: "JavaScript",
      cat: "frontend",
      pct: 90,
      icon: "JS"
    },

    {
      id: "html",
      label: "HTML5",
      cat: "frontend",
      pct: 95,
      icon: "◇"
    },

    {
      id: "css",
      label: "CSS3",
      cat: "frontend",
      pct: 92,
      icon: "◈"
    },

    {
      id: "tailwind",
      label: "Tailwind CSS",
      cat: "frontend",
      pct: 88,
      icon: "🎨"
    },

    {
      id: "bootstrap",
      label: "Bootstrap",
      cat: "frontend",
      pct: 90,
      icon: "B"
    },


    /* Backend */

    {
      id: "node",
      label: "Node.js",
      cat: "backend",
      pct: 82,
      icon: "⬡"
    },

    {
      id: "express",
      label: "Express.js",
      cat: "backend",
      pct: 80,
      icon: "E"
    },

    {
      id: "php",
      label: "PHP",
      cat: "backend",
      pct: 82,
      icon: "PHP"
    },

    {
      id: "laravel",
      label: "Laravel",
      cat: "backend",
      pct: 80,
      icon: "L"
    },


    /* Database */

    {
      id: "mysql",
      label: "MySQL",
      cat: "database",
      pct: 88,
      icon: "DB"
    },

    {
      id: "mongodb",
      label: "MongoDB",
      cat: "database",
      pct: 78,
      icon: "M"
    },

    {
      id: "postgresql",
      label: "PostgreSQL",
      cat: "database",
      pct: 75,
      icon: "P"
    },


    /* Tools */

    {
      id: "git",
      label: "Git / GitHub",
      cat: "tools",
      pct: 92,
      icon: "●"
    },

    {
      id: "vite",
      label: "Vite",
      cat: "tools",
      pct: 84,
      icon: "⚡"
    },

    {
      id: "api",
      label: "REST APIs",
      cat: "tools",
      pct: 88,
      icon: "↔"
    },

    {
      id: "firebase",
      label: "Firebase",
      cat: "tools",
      pct: 78,
      icon: "🔥"
    },

    {
      id: "vercel",
      label: "Vercel",
      cat: "tools",
      pct: 85,
      icon: "▲"
    }
  ];


  /* ----------------------------------------------------------
     CONNECTIONS
     ---------------------------------------------------------- */

  const EDGES = [

    ["react", "javascript"],
    ["react", "vite"],
    ["react", "tailwind"],
    ["react", "api"],

    ["javascript", "html"],
    ["javascript", "css"],
    ["javascript", "node"],

    ["node", "express"],
    ["node", "mongodb"],
    ["node", "mysql"],
    ["node", "api"],

    ["php", "laravel"],
    ["laravel", "mysql"],
    ["laravel", "postgresql"],
    ["laravel", "api"],

    ["tailwind", "html"],
    ["bootstrap", "javascript"],

    ["git", "github"],
    ["git", "vercel"],
    ["vite", "vercel"],

    ["firebase", "react"],
    ["mongodb", "api"],
    ["mysql", "postgresql"]
  ];


  /* ----------------------------------------------------------
     CATEGORY COLORS
     ---------------------------------------------------------- */

  const CAT_COLORS = {

    frontend: {
      fill: "#00D4FF",
      glow: "rgba(0,212,255,.35)",
      dim: "rgba(0,212,255,.12)"
    },

    backend: {
      fill: "#7C3AED",
      glow: "rgba(124,58,237,.35)",
      dim: "rgba(124,58,237,.12)"
    },

    database: {
      fill: "#F59E0B",
      glow: "rgba(245,158,11,.35)",
      dim: "rgba(245,158,11,.12)"
    },

    tools: {
      fill: "#10B981",
      glow: "rgba(16,185,129,.35)",
      dim: "rgba(16,185,129,.12)"
    }
  };


  /* ----------------------------------------------------------
     NODE LAYOUT
     ---------------------------------------------------------- */

  function buildLayout(width, height) {

    const positions = [

      [0.12, 0.22],
      [0.27, 0.16],
      [0.42, 0.28],
      [0.22, 0.45],
      [0.48, 0.12],
      [0.68, 0.20],

      [0.82, 0.34],
      [0.60, 0.42],
      [0.36, 0.50],
      [0.15, 0.65],
      [0.42, 0.72],
      [0.72, 0.65],

      [0.88, 0.76],
      [0.25, 0.85],
      [0.53, 0.86],
      [0.78, 0.12],
      [0.08, 0.42],
      [0.92, 0.48]
    ];

    return SKILLS.map((skill, index) => {

      const position =
        positions[index % positions.length];

      return {
        ...skill,

        x: position[0] * width,
        y: position[1] * height,

        r:
          6 +
          (skill.pct / 100) * 10,

        hover: false
      };
    });
  }


  let nodes = [];

  let width = 0;
  let height = 0;

  let animationFrame = null;

  let mouse = {
    x: -999,
    y: -999
  };


  /* ----------------------------------------------------------
     RESIZE
     ---------------------------------------------------------- */

  function resizeCanvas() {

    const rect =
      container.getBoundingClientRect();

    width =
      canvas.width =
      Math.max(1, Math.round(rect.width));

    height =
      canvas.height =
      Math.max(1, Math.round(rect.height));

    nodes =
      buildLayout(width, height);
  }


  /* ----------------------------------------------------------
     CHECK EDGE
     ---------------------------------------------------------- */

  function isConnected(first, second) {

    return EDGES.some(([a, b]) => {

      return (
        (a === first && b === second) ||
        (a === second && b === first)
      );
    });
  }


  /* ----------------------------------------------------------
     DRAW
     ---------------------------------------------------------- */

  function draw() {

    ctx.clearRect(
      0,
      0,
      width,
      height
    );

    const hoveredNode =
      nodes.find(node => node.hover);


    /* Draw connections */

    EDGES.forEach(([firstId, secondId]) => {

      const first =
        nodes.find(node => node.id === firstId);

      const second =
        nodes.find(node => node.id === secondId);

      if (!first || !second) return;

      const connected =
        hoveredNode &&
        (
          hoveredNode.id === firstId ||
          hoveredNode.id === secondId
        );

      ctx.beginPath();

      ctx.moveTo(first.x, first.y);
      ctx.lineTo(second.x, second.y);

      if (hoveredNode) {

        if (connected) {

          const gradient =
            ctx.createLinearGradient(
              first.x,
              first.y,
              second.x,
              second.y
            );

          gradient.addColorStop(
            0,
            CAT_COLORS[first.cat].fill + "99"
          );

          gradient.addColorStop(
            1,
            CAT_COLORS[second.cat].fill + "99"
          );

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;

        } else {

          ctx.strokeStyle =
            "rgba(255,255,255,.025)";

          ctx.lineWidth = 0.5;
        }

      } else {

        ctx.strokeStyle =
          "rgba(255,255,255,.07)";

        ctx.lineWidth = 1;

        ctx.setLineDash([4, 4]);
      }

      ctx.stroke();

      ctx.setLineDash([]);
    });


    /* Draw nodes */

    nodes.forEach(node => {

      const category =
        CAT_COLORS[node.cat];

      const isHovered =
        node.hover;

      const fade =
        hoveredNode &&
        !isHovered &&
        !isConnected(
          node.id,
          hoveredNode.id
        )
          ? 0.2
          : 1;

      ctx.globalAlpha = fade;


      /* Glow */

      if (isHovered) {

        const gradient =
          ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            node.r * 4
          );

        gradient.addColorStop(
          0,
          category.glow
        );

        gradient.addColorStop(
          1,
          "transparent"
        );

        ctx.beginPath();

        ctx.arc(
          node.x,
          node.y,
          node.r * 4,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = gradient;
        ctx.fill();
      }


      /* Outer ring */

      ctx.beginPath();

      ctx.arc(
        node.x,
        node.y,
        node.r + (isHovered ? 4 : 2),
        0,
        Math.PI * 2
      );

      ctx.strokeStyle =
        category.fill +
        (isHovered ? "cc" : "55");

      ctx.lineWidth =
        isHovered ? 2 : 1;

      ctx.stroke();


      /* Inner node */

      ctx.beginPath();

      ctx.arc(
        node.x,
        node.y,
        node.r,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        isHovered
          ? category.fill
          : category.dim;

      ctx.fill();


      /* Proficiency arc */

      ctx.beginPath();

      ctx.arc(
        node.x,
        node.y,
        node.r + 5,
        -Math.PI / 2,
        -Math.PI / 2 +
          (node.pct / 100) *
          Math.PI *
          2
      );

      ctx.strokeStyle =
        category.fill + "aa";

      ctx.lineWidth = 2;

      ctx.stroke();


      /* Label */

      ctx.globalAlpha = fade;

      ctx.font =
        `${isHovered ? "600 " : ""}${isHovered ? 11 : 10}px "JetBrains Mono", monospace`;

      ctx.fillStyle =
        isHovered
          ? category.fill
          : "rgba(140,163,192,.85)";

      ctx.textAlign = "center";
      ctx.textBaseline = "top";

      ctx.fillText(
        node.label,
        node.x,
        node.y + node.r + 8
      );

      ctx.globalAlpha = 1;
    });
  }


  /* ----------------------------------------------------------
     HOVER DETECTION
     ---------------------------------------------------------- */

  function detectHover(mouseX, mouseY) {

    let found = null;

    nodes.forEach(node => {

      const dx =
        mouseX - node.x;

      const dy =
        mouseY - node.y;

      node.hover =
        dx * dx +
        dy * dy <=
        Math.pow(node.r + 8, 2);

      if (node.hover) {
        found = node;
      }
    });

    return found;
  }


  /* ----------------------------------------------------------
     MOUSE MOVE
     ---------------------------------------------------------- */

  canvas.addEventListener(
    "mousemove",
    event => {

      const rect =
        canvas.getBoundingClientRect();

      const mouseX =
        event.clientX - rect.left;

      const mouseY =
        event.clientY - rect.top;

      mouse.x = mouseX;
      mouse.y = mouseY;

      const hit =
        detectHover(
          mouseX,
          mouseY
        );

      if (hit) {

        canvas.style.cursor =
          "pointer";

        if (tooltip) {

          tooltip.textContent =
            `${hit.label} — ${hit.pct}%`;

          tooltip.classList.add("show");

          let left =
            mouseX + 14;

          let top =
            mouseY - 36;

          if (left + 160 > width) {
            left =
              mouseX - 170;
          }

          if (top < 8) {
            top =
              mouseY + 14;
          }

          tooltip.style.left =
            `${left}px`;

          tooltip.style.top =
            `${top}px`;
        }

      } else {

        canvas.style.cursor =
          "crosshair";

        if (tooltip) {
          tooltip.classList.remove("show");
        }
      }
    }
  );


  /* ----------------------------------------------------------
     MOUSE LEAVE
     ---------------------------------------------------------- */

  canvas.addEventListener(
    "mouseleave",
    () => {

      nodes.forEach(node => {
        node.hover = false;
      });

      if (tooltip) {
        tooltip.classList.remove("show");
      }

      canvas.style.cursor =
        "default";
    }
  );


  /* ----------------------------------------------------------
     ANIMATION
     ---------------------------------------------------------- */

  const FLOAT_SPEED = 0.0004;

  const offsets =
    SKILLS.map(
      (_, index) => index * 0.7
    );


  function animate(time) {

    if (!nodes.length) {
      resizeCanvas();
    }

    const baseNodes =
      buildLayout(
        width,
        height
      );

    nodes.forEach((node, index) => {

      const base =
        baseNodes[index];

      node.x =
        base.x +
        Math.sin(
          time *
            FLOAT_SPEED +
            offsets[index]
        ) * 3;

      node.y =
        base.y +
        Math.cos(
          time *
            FLOAT_SPEED *
            0.8 +
            offsets[index]
        ) * 2.5;
    });

    draw();

    animationFrame =
      requestAnimationFrame(
        animate
      );
  }


  /* ----------------------------------------------------------
     INITIALIZE WHEN VISIBLE
     ---------------------------------------------------------- */

  const skillSection =
    document.getElementById("skills");

  if (!skillSection) return;

  let started = false;

  const observer =
    new IntersectionObserver(
      entries => {

        if (
          entries[0].isIntersecting &&
          !started
        ) {

          started = true;

          resizeCanvas();

          animationFrame =
            requestAnimationFrame(
              animate
            );

          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );

  observer.observe(skillSection);


  /* ----------------------------------------------------------
     WINDOW RESIZE
     ---------------------------------------------------------- */

  window.addEventListener(
    "resize",
    () => {

      if (animationFrame) {
        cancelAnimationFrame(
          animationFrame
        );
      }

      resizeCanvas();

      animationFrame =
        requestAnimationFrame(
          animate
        );
    }
  );

})();


/* ============================================================
   10. PROJECT DETAIL MODAL
   ============================================================ */

(function () {

  const caseButtons =
    document.querySelectorAll(".btn-case");

  if (!caseButtons.length) return;


  const modalElement =
    document.getElementById(
      "projectDetailModal"
    );

  if (!modalElement) return;


  const modalTitle =
    document.getElementById(
      "projectDetailTitle"
    );

  const repoLink =
    document.getElementById(
      "projectRepoLink"
    );

  const demoLink =
    document.getElementById(
      "projectDemoLink"
    );

  const overview =
    document.getElementById(
      "projectOverview"
    );

  const problem =
    document.getElementById(
      "projectProblem"
    );

  const solution =
    document.getElementById(
      "projectSolution"
    );

  const features =
    document.getElementById(
      "projectFeatures"
    );

  const lessons =
    document.getElementById(
      "projectLessons"
    );

  const techList =
    document.getElementById(
      "projectTechList"
    );

  const diagram =
    document.getElementById(
      "projectDiagram"
    );


  /* ----------------------------------------------------------
     YOUR PROJECTS
     ---------------------------------------------------------- */

  const PROJECTS = {

    kailvora: {

      title: "Kailvora Infra Website",

      repo: "https://github.com/aayu326",

      demo: "https://kailvorainfra.com",

      overview:
        "A modern and responsive business website developed for Kailvora Infra, focused on presenting real-estate and infrastructure services with a professional digital presence.",

      problem:
        "The business needed a modern online presence that could clearly communicate its services, projects, credibility, and company information across desktop and mobile devices.",

      solution:
        "Designed and developed a responsive business website with a clean interface, structured sections, modern animations, SEO-friendly content, and mobile-first layouts.",

      features: [
        "Professional company landing page.",
        "Responsive design for mobile, tablet, and desktop.",
        "Modern hero section and visual presentation.",
        "Company and project information sections.",
        "Service and business highlights.",
        "SEO-friendly page structure.",
        "Responsive navigation and interactive UI elements."
      ],

      lessons:
        "Building a business website requires a balance between visual presentation, performance, responsiveness, and clear information architecture.",

      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Responsive Design",
        "SEO"
      ],

      diagram: [
        "User",
        "↓",
        "Responsive Website",
        "↓",
        "JavaScript Interactions",
        "↓",
        "Business Content",
        "↓",
        "Kailvora Infra"
      ]
    },


    vantage: {

      title: "Vantage Hall AI Chatbot",

      repo: "https://github.com/aayu326",

      demo: "#",

      overview:
        "An AI-powered chatbot interface designed to provide users with an interactive way to access information and assistance through a web application.",

      problem:
        "Users often need quick access to information without navigating through multiple pages or manually searching large amounts of content.",

      solution:
        "Developed an interactive chatbot experience with a responsive frontend and conversational interface designed around a simple and user-friendly interaction flow.",

      features: [
        "Interactive AI chatbot interface.",
        "Responsive user experience.",
        "Conversational message interface.",
        "Clean and modern UI.",
        "User-friendly interaction flow.",
        "Mobile-responsive layout."
      ],

      lessons:
        "A good chatbot interface should keep interactions simple, provide clear feedback, and make the conversation easy to follow.",

      tech: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "REST API"
      ],

      diagram: [
        "User",
        "↓",
        "Chat Interface",
        "↓",
        "API Request",
        "↓",
        "AI Service",
        "↓",
        "Response"
      ]
    },


    qrify: {

      title: "QRIFY",

      repo: "https://github.com/aayu326",

      demo: "#",

      overview:
        "A web-based QR utility application designed to generate QR codes through a simple and responsive interface.",

      problem:
        "Users need a quick and simple way to generate QR codes without using complicated software or unnecessary steps.",

      solution:
        "Created a lightweight web interface focused on fast user interaction and straightforward QR generation.",

      features: [
        "Simple QR generation interface.",
        "Responsive web design.",
        "Fast user interaction.",
        "Clean and minimal UI.",
        "Easy-to-use workflow.",
        "Mobile-friendly layout."
      ],

      lessons:
        "Small utility applications benefit from simple interfaces, fast feedback, and minimal interaction steps.",

      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "QR Code API"
      ],

      diagram: [
        "User Input",
        "↓",
        "JavaScript",
        "↓",
        "QR Generator",
        "↓",
        "Generated QR Code"
      ]
    },


    acm: {

      title: "ACM Student Chapter Website",

      repo: "https://github.com/aayu326",

      demo: "#",

      overview:
        "A student chapter website created to provide an organized digital platform for events, activities, announcements, and chapter information.",

      problem:
        "Students need a centralized platform where they can discover technical events, chapter activities, announcements, and relevant information.",

      solution:
        "Developed a responsive website with structured sections for chapter information, activities, events, and student engagement.",

      features: [
        "Chapter information section.",
        "Event presentation.",
        "Responsive design.",
        "Modern navigation.",
        "Student-focused interface.",
        "Mobile-friendly layout."
      ],

      lessons:
        "Community websites need clear information hierarchy so visitors can quickly find events, activities, and important announcements.",

      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Responsive Design"
      ],

      diagram: [
        "Student",
        "↓",
        "ACM Website",
        "↓",
        "Events",
        "↓",
        "Activities",
        "↓",
        "Community"
      ]
    },


    portfolio: {

      title: "Satyesh Kumar Singh — Developer Portfolio",

      repo: "https://github.com/aayu326",

      demo: "#",

      overview:
        "A modern interactive developer portfolio created to showcase projects, technical skills, experience, and web development capabilities.",

      problem:
        "A traditional static portfolio does not effectively communicate a developer's technical skills, projects, personality, and attention to frontend experience.",

      solution:
        "Built an interactive portfolio with animated sections, project filtering, responsive layouts, skill visualization, project case studies, and smooth navigation.",

      features: [
        "Interactive hero section.",
        "Animated typewriter roles.",
        "Responsive navigation.",
        "Project filtering system.",
        "Interactive skills constellation.",
        "Detailed project case-study modal.",
        "Responsive design.",
        "Modern UI animations.",
        "Mobile-friendly experience."
      ],

      lessons:
        "A strong developer portfolio should combine technical information with a clear user experience and demonstrate the developer's actual ability through projects.",

      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "HTML5 Canvas",
        "GitHub"
      ],

      diagram: [
        "Visitor",
        "↓",
        "Portfolio UI",
        "↓",
        "Projects / Skills",
        "↓",
        "Interactive Components",
        "↓",
        "Developer Profile"
      ]
    }

  };


  /* ----------------------------------------------------------
     CLEAR LIST
     ---------------------------------------------------------- */

  function clearList(element) {

    if (!element) return;

    while (element.firstChild) {
      element.removeChild(
        element.firstChild
      );
    }
  }


  /* ----------------------------------------------------------
     RENDER DIAGRAM
     ---------------------------------------------------------- */

  function renderDiagram(items) {

    if (!diagram) return;

    diagram.innerHTML = "";

    items.forEach(
      (item, index) => {

        const node =
          document.createElement("div");

        node.className =
          "diag-node mono-text";

        node.textContent = item;

        diagram.appendChild(node);


        if (index < items.length - 1) {

          const arrow =
            document.createElement("div");

          arrow.className =
            "diag-arrow";

          arrow.textContent = "↓";

          diagram.appendChild(
            arrow
          );
        }
      }
    );
  }


  /* ----------------------------------------------------------
     OPEN PROJECT
     ---------------------------------------------------------- */

  caseButtons.forEach(button => {

    button.addEventListener(
      "click",
      event => {

        event.preventDefault();

        const projectKey =
          button.dataset.project;

        const project =
          PROJECTS[projectKey];

        if (!project) {
          console.warn(
            "Project not found:",
            projectKey
          );

          return;
        }


        /* Title */

        if (modalTitle) {
          modalTitle.textContent =
            project.title;
        }


        /* Repository */

        if (repoLink) {

          repoLink.href =
            project.repo;

          repoLink.target =
            "_blank";

          repoLink.rel =
            "noopener noreferrer";
        }


        /* Demo */

        if (demoLink) {

          demoLink.href =
            project.demo;

          if (
            project.demo !== "#"
          ) {

            demoLink.target =
              "_blank";

            demoLink.rel =
              "noopener noreferrer";

          } else {

            demoLink.removeAttribute(
              "target"
            );
          }
        }


        /* Content */

        if (overview) {
          overview.textContent =
            project.overview;
        }

        if (problem) {
          problem.textContent =
            project.problem;
        }

        if (solution) {
          solution.textContent =
            project.solution;
        }


        /* Features */

        clearList(features);

        if (features) {

          project.features.forEach(
            feature => {

              const li =
                document.createElement("li");

              li.textContent =
                feature;

              features.appendChild(li);
            }
          );
        }


        /* Lessons */

        if (lessons) {
          lessons.textContent =
            project.lessons;
        }


        /* Technologies */

        clearList(techList);

        if (techList) {

          project.tech.forEach(
            technology => {

              const li =
                document.createElement("li");

              li.textContent =
                technology;

              techList.appendChild(li);
            }
          );
        }


        /* Diagram */

        renderDiagram(
          project.diagram
        );


        /* Bootstrap Modal */

        if (
          typeof bootstrap !==
          "undefined" &&
          bootstrap.Modal
        ) {

          const modal =
            bootstrap.Modal.getOrCreateInstance(
              modalElement
            );

          modal.show();

        } else {

          console.warn(
            "Bootstrap Modal is not available."
          );
        }

      }
    );
  });


  /* ==========================================================
     SERVICES 3D STACK SLIDER
     ========================================================== */

  (function () {

    const track =
      document.getElementById(
        "servicesTrack"
      );

    const previousButton =
      document.querySelector(
        ".services-nav-btns .prev-btn"
      );

    const nextButton =
      document.querySelector(
        ".services-nav-btns .next-btn"
      );

    if (
      !track ||
      !previousButton ||
      !nextButton
    ) {
      return;
    }


    const slides =
      Array.from(
        track.children
      );

    const totalSlides =
      slides.length;

    if (!totalSlides) return;


    let activeIndex = 0;


    /* --------------------------------------------------------
       UPDATE SLIDER
       -------------------------------------------------------- */

    function updateSlider() {

      slides.forEach(
        (slide, index) => {

          let difference =
            index - activeIndex;


          /* Infinite loop */

          if (
            difference >
            totalSlides / 2
          ) {
            difference -=
              totalSlides;
          }

          if (
            difference <
            -totalSlides / 2
          ) {
            difference +=
              totalSlides;
          }


          slide.classList.remove(
            "active",
            "prev",
            "next",
            "far-prev",
            "far-next",
            "hidden-slide"
          );


          if (difference === 0) {

            slide.classList.add(
              "active"
            );

          } else if (
            difference === -1
          ) {

            slide.classList.add(
              "prev"
            );

          } else if (
            difference === 1
          ) {

            slide.classList.add(
              "next"
            );

          } else if (
            difference === -2
          ) {

            slide.classList.add(
              "far-prev"
            );

          } else if (
            difference === 2
          ) {

            slide.classList.add(
              "far-next"
            );

          } else {

            slide.classList.add(
              "hidden-slide"
            );
          }
        }
      );
    }


    /* --------------------------------------------------------
       NEXT
       -------------------------------------------------------- */

    function goNext() {

      activeIndex =
        (activeIndex + 1) %
        totalSlides;

      updateSlider();
    }


    /* --------------------------------------------------------
       PREVIOUS
       -------------------------------------------------------- */

    function goPrevious() {

      activeIndex =
        (activeIndex - 1 +
          totalSlides) %
        totalSlides;

      updateSlider();
    }


    nextButton.addEventListener(
      "click",
      goNext
    );

    previousButton.addEventListener(
      "click",
      goPrevious
    );


    /* --------------------------------------------------------
       TOUCH SWIPE
       -------------------------------------------------------- */

    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener(
      "touchstart",
      event => {

        touchStartX =
          event.changedTouches[0]
            .screenX;

      },
      {
        passive: true
      }
    );


    track.addEventListener(
      "touchend",
      event => {

        touchEndX =
          event.changedTouches[0]
            .screenX;

        const threshold = 50;

        if (
          touchStartX -
            touchEndX >
          threshold
        ) {

          goNext();

        } else if (
          touchEndX -
            touchStartX >
          threshold
        ) {

          goPrevious();
        }

      },
      {
        passive: true
      }
    );


    /* Initial state */

    updateSlider();

  })();

})();


/* ============================================================
   11. EXTERNAL LINKS
   ============================================================ */

(function () {

  document
    .querySelectorAll(
      'a[href^="http"]'
    )
    .forEach(link => {

      link.setAttribute(
        "target",
        "_blank"
      );

      link.setAttribute(
        "rel",
        "noopener noreferrer"
      );
    });

})();


/* ============================================================
   12. CONSOLE BRANDING
   ============================================================ */

console.log(
  "%c Satyesh Kumar Singh ",
  "background:#0a0f1c;color:#00d4ff;font-size:16px;font-weight:bold;padding:8px 14px;border-radius:6px;"
);

console.log(
  "%c Full-Stack Developer | Web Developer ",
  "color:#8ca3c0;font-size:12px;"
);

console.log(
  "%c GitHub: https://github.com/aayu326 ",
  "color:#10b981;font-size:12px;"
);

console.log(
  "%c Email: nsatyeshwork326@gmail.com ",
  "color:#7c3aed;font-size:12px;"
);