/* All portfolio content lives here. Edit via admin.html, then use "Export site-data.js" and replace this file to publish changes. */
window.SITE_DEFAULT = {
  adminPassword: "admin123",
  profile: {
    name: "Lakshya Agnihotri",
    heroLine1: "LAKSHYA",
    heroLine2: "AGNIHOTRI",
    estLabel: "AGE 19 • KANPUR",
    tagline: "Designing with intent. Building with code. Capturing the in-between.",
    roles: ["UI/UX Designer", "Full-Stack Developer", "Photographer"],
    location: "Kanpur, India",
    college: "Maharana",
    photo: "",
    aboutHeadline: "DESIGNER. DEVELOPER. PHOTOGRAPHER.",
    aboutText: "I'm Lakshya, a 19-year-old creator from Kanpur currently studying at Maharana. I design clean interfaces, build full-stack products and shoot photographs that tell quiet stories.",
    aboutImage: "assets/about_floating_light_hq.png",
    aboutBg: "assets/about_starry_castle_hq.jpg"
  },
  show: { stats: true, experience: true, projects: true, landing: true, services: true },
  stats: [
    { value: "10+", label: "Projects" },
    { value: "2+", label: "Years Learning" },
    { value: "3", label: "Creative Fields" }
  ],
  experience: [
    {
      tab: "STUDENT", dates: "2024 — PRESENT", label: "EDUCATION", badge: "ONGOING",
      title: "BCA / B.TECH<br>STUDENT", summary: "Studying at Maharana, Kanpur while building real projects in design and development.",
      milestones: [
        { k: "FOCUS", v: "UI/UX design and full-stack web development" },
        { k: "BUILDING", v: "Personal projects and client-style mockups" },
        { k: "LEARNING", v: "React, Node.js, Figma and photography" }
      ]
    },
    {
      tab: "CREATOR", dates: "2023 — PRESENT", label: "FREELANCE / PERSONAL", badge: "SELF-DIRECTED",
      title: "DESIGNER &amp;<br>DEVELOPER", summary: "Designing interfaces, building websites and shooting photographs. Replace this with your real journey.",
      milestones: [
        { k: "DESIGN", v: "Interface concepts and prototypes in Figma" },
        { k: "CODE", v: "Responsive websites and full-stack apps" },
        { k: "PHOTO", v: "Street, portrait and travel photography" }
      ]
    }
  ],
  projects: [
    { section: "featured", category: "UI/UX", title: "Project One", subtitle: "UI/UX Case Study", description: "Short description of this project. Edit it in the admin panel.", image: "assets/placeholder-1.png", link: "", tools: "Figma, React", deliverables: "Research, Wireframes, Prototype", stats: "Add a result or highlight here." },
    { section: "featured", category: "WEB APP", title: "Project Two", subtitle: "Full-Stack Web App", description: "Short description of this project. Edit it in the admin panel.", image: "assets/placeholder-2.png", link: "", tools: "React, Node.js, MongoDB", deliverables: "Frontend, Backend, Deployment", stats: "Add a result or highlight here." },
    { section: "featured", category: "PHOTOGRAPHY", title: "Project Three", subtitle: "Photo Series", description: "Short description of this series. Edit it in the admin panel.", image: "assets/placeholder-3.png", link: "", tools: "Camera, Lightroom", deliverables: "Shoot, Editing, Gallery", stats: "Add a result or highlight here." },
    { section: "landing", category: "LANDING PAGE", title: "Landing One", subtitle: "Landing Page Design", description: "Short description of this landing page. Edit it in the admin panel.", image: "assets/placeholder-1.png", link: "", tools: "Figma, HTML, CSS", deliverables: "Design, Build", stats: "Add a result or highlight here." },
    { section: "landing", category: "LANDING PAGE", title: "Landing Two", subtitle: "Landing Page Design", description: "Short description of this landing page. Edit it in the admin panel.", image: "assets/placeholder-2.png", link: "", tools: "Figma, React", deliverables: "Design, Build", stats: "Add a result or highlight here." },
    { section: "landing", category: "LANDING PAGE", title: "Landing Three", subtitle: "Landing Page Design", description: "Short description of this landing page. Edit it in the admin panel.", image: "assets/placeholder-3.png", link: "", tools: "Figma, Webflow", deliverables: "Design, Build", stats: "Add a result or highlight here." }
  ],
  services: [
    { title: "UI/UX DESIGN", desc: "User research, wireframes and interactive prototypes that turn complex ideas into simple experiences.", deliverables: "USER FLOWS, WIREFRAMES, PROTOTYPES" },
    { title: "FULL-STACK DEVELOPMENT", desc: "Fast, responsive websites and web apps with clean frontends and reliable backends.", deliverables: "FRONTEND, BACKEND, DEPLOYMENT" },
    { title: "PHOTOGRAPHY", desc: "Portrait, street and event photography with careful editing and a consistent visual style.", deliverables: "SHOOT, EDITING, FINAL GALLERY" }
  ],
  contact: { email: "", formMessage: "Thank you! Your message has been noted." },
  socials: [
    { label: "Instagram", url: "" },
    { label: "LinkedIn", url: "" },
    { label: "GitHub", url: "" },
    { label: "Twitter", url: "" },
    { label: "Behance", url: "" }
  ],
  footer: { cta: "LET'S TALK", credit: "DESIGN BY LAKSHYA AGNIHOTRI", copyright: "PORTFOLIO. ALL RIGHTS RESERVED" }
};
