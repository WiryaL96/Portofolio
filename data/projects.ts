export type ProjectArt = "order" | "cinema" | "report" | "track" | "hotel" | "game";

export type ProjectImage = {
  src: string;
  alt: string;
  position?: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  art: ProjectArt;
  description: string;
  context?: string;
  image?: ProjectImage;
  // Only add a stack once it has been confirmed for the project.
  stack: string[];
  // Only add links when they are public. Leave empty to hide.
  demoUrl: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    slug: "digital-order-menu",
    index: "01",
    title: "Digital Order Menu & Cashier",
    category: "Web platform",
    art: "order",
    description:
      "A digital menu ordering system through the web, integrated with a cashier system for Teras Kayumanis.",
    context: "Teras Kayumanis",
    image: {
      src: "/images/projects/teras-kayumanis.webp",
      alt: "The outdoor terrace at Teras Kayumanis, with wooden tables and chairs surrounded by greenery beside the river.",
      position: "50% 52%",
    },
    stack: ["Nuxt 4", "Vue 3", "TypeScript", "Go", "PostgreSQL", "Flutter"],
    demoUrl: "",
    repoUrl: "https://github.com/WiryaL96/TerasKayuManis",
  },
  {
    slug: "management-movie-system",
    index: "02",
    title: "Management Movie System",
    category: "Desktop application",
    art: "cinema",
    description:
      "A system for managing movie data, movie schedules, booking information, and administrative operations.",
    context: "CineCore",
    stack: ["C#", "WPF", ".NET 8", "MySQL"],
    demoUrl: "",
    repoUrl: "https://github.com/WiryaL96/CineCore_C-",
  },
  {
    slug: "reportex",
    index: "03",
    title: "Reportex",
    category: "Reporting application",
    art: "report",
    description:
      "An application for managing student complaint reports at SMK Negeri 1 Cimahi.",
    context: "SMK Negeri 1 Cimahi",
    stack: [],
    demoUrl: "",
    repoUrl: "",
  },
  {
    slug: "stm-larkam",
    index: "04",
    title: "STM-Larkam",
    category: "Activity logging",
    art: "track",
    description:
      "An application for recording running campus activities at SMK Negeri 1 Cimahi.",
    context: "SMK Negeri 1 Cimahi",
    stack: ["Kotlin", "Jetpack Compose", "Firebase Realtime Database"],
    demoUrl: "",
    repoUrl: "https://github.com/WiryaL96/STM-LARKAM",
  },
  {
    slug: "hotel-management-system",
    index: "05",
    title: "Hotel Management System",
    category: "Full-stack platform",
    art: "hotel",
    description:
      "A hotel booking and operations platform covering availability, pricing, invoicing, and role-based staff workflows.",
    context: "Independent build",
    stack: ["React", "TypeScript", "Laravel", "MySQL"],
    demoUrl: "",
    repoUrl: "https://github.com/WiryaL96/Hotel_kasar",
  },
  {
    slug: "suponet",
    index: "06",
    title: "SupoNet",
    category: "Unity game & Android",
    art: "game",
    description:
      "A Unity 6 project built around Save Ur Idol — a six-wave survivor run — plus a separate Jetpack Compose Android prototype for its story and battle modes.",
    context: "Personal project",
    stack: ["C#", "Unity", "Kotlin", "Jetpack Compose"],
    demoUrl: "",
    repoUrl: "https://github.com/WiryaL96/SupoNet",
  },
];

export const projectNote =
  "Details are still being written down. Ask for a walkthrough and I'll happily open the code.";
