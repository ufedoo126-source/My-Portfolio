// ============================================================
// EDIT THIS FILE to change what the portfolio says.
// Leave a text value as "" to hide it.
// ============================================================

export const site = {
  name: "Ahmadu Favour", // <-- put your real name here first
  role: "Frontend / Full-Stack Developer",
  headline: "I build fast, dependable websites for real businesses.",
  intro:
    "From the storefront to the admin dashboard, payments and the emails customers receive, I build complete websites that business owners can run themselves.",
  available: true, // shows "Open to opportunities"
    photo: "/me.jpeg",
  cvUrl: "", // after putting your CV in the public folder, e.g. "/cv.pdf"
  contact: {
    email: "ufedoo126@gmail.com", // e.g. "you@example.com"
    whatsapp: "07054313134", // country code and digits only, e.g. "2348012345678"
    github: "https://github.com/ufedoo126-source",
    linkedin: "https://www.linkedin.com/in/favour-ahmadu-204a87392",
  },
};

export type Project = {
  title: string;
  kind: string;
  description: string;
  highlights: string[];
  tech: string[];
  live?: string; // link to the live site
  code?: string; // link to the code
  image?: string; // screenshot in the public folder, e.g. "/projects/sruf.png"
  show: boolean; // set to false to hide a project (e.g. until the client agrees)
};

export const projects: Project[] = [
  {
    title: "SRUF",
    kind: "E-commerce · Client work",
    description:
      "An online store for a streetwear brand, built end to end with a full admin dashboard the owner runs herself.",
    highlights: [
      "Admin dashboard to manage categories, products (with colours and photos) and orders",
      "Paystack checkout with server-side payment verification and a webhook safety net",
      "Delivery or pickup checkout, order emails, product pages and a light/dark mode",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Paystack", "Resend", "Vercel"],
    live: "www.sruf.org",
    code: "https://github.com/ufedoo126-source/sruf-website.git",
    image: "/projects/sruf img.png",
    show: true,
  },
  {
    title: "Soothe Aesthetics Clinic",
    kind: "Booking website · Client work",
    description:
      "A website for an aesthetics clinic with a full services menu and online booking, managed from an admin panel.",
    highlights: [
      "Services and prices stored in a database, so the clinic updates them without code",
      "Online booking flow with payment and email notifications",
    ],
    tech: ["Next.js", "Supabase", "Paystack", "Resend", "Tailwind CSS"],
    live: "http://soothe-beryl.vercel.app/",
    code: "https://github.com/ufedoo126-source/Soothe.git",
    image: "/projects/soothe img.png",
    show: true,
  },
  {
    title: "Rex Mart",
    kind: "E-commerce · Client work",
    description: "An online store for a Lagos supermarket, with payments through Paystack.",
    highlights: [
      "Product catalogue, cart and checkout",
      "Paystack payments and a database back end",
    ],
    tech: ["Next.js", "Supabase", "Paystack"],
    live: "www.rexmart.org",
    code: "https://github.com/ufedoo126-source/rexmart.git",
    image: "/projects/rexmart img.png",
    show: true,
  },
  {
    title: "Gems By Peace",
    kind: "Brand website · Client work",
    description: "A website for a Lagos fashion brand that hand-beads dresses and gowns.",
    highlights: ["Built with plain HTML, CSS and JavaScript, with no framework"],
    tech: ["HTML", "CSS", "JavaScript"],
    live: "",
    code: "",
    image: "",
    show: true,
  },
  //{
   // title: "Ahmaduvic",
   // kind: "Portfolio website · Freelance",
   // description: "A portfolio website built for a client.",
   // highlights: ["Responsive HTML and CSS site, live on GitHub Pages"],
   // tech: ["HTML", "CSS"],
   // live: "https://ufedoo126-source.github.io/Ahmaduvic",
    //code: "",
    //image: "",
    //show: true,
 // },
  {
    title: "To-Do App",
    kind: "Full-stack app · Personal project",
    description: "A task manager with a Python back end and a database, deployed on Render.",
    highlights: ["Create, update and delete tasks stored in a database"],
    tech: ["Python", "Flask", "SQLite", "Render"],
    live: "https://to-do-4-unpq.onrender.com",
    code: "https://github.com/ufedoo126-source/To-Do",
    image: "/projects/todo.png",
    show: true,
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { title: "Back end and data", items: ["Supabase (Postgres, Auth, Storage)", "Row Level Security", "Python", "Flask", "SQLite"] },
  { title: "Integrations", items: ["Paystack payments and webhooks", "Resend email"] },
  { title: "Tools", items: ["Git and GitHub", "Vercel", "VS Code"] },
];

export const about: string[] = [
  "I'm a web developer who builds complete websites for real businesses: the storefront, the admin dashboard, payments and the emails customers receive. I started from zero and learned by shipping real work, so I care about the details that make a site dependable: clear errors, secure data and pages that work well on a phone.",
  "Outside of code, I run Everything Fave, a lifestyle brand selling jewellery, wristwatches and perfumes. It keeps me close to how customers actually shop online.",
];