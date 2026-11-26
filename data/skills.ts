export type SkillCategory = {
  id: string;
  label: string;
  blurb: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Programming languages",
    blurb: "The grammar of the work.",
    items: [
      "JavaScript",
      "TypeScript",
      "Java",
      "Kotlin",
      "PHP",
      "C#",
      "Dart",
      "Go",
      "Python",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    blurb: "Where ideas become something you can touch.",
    items: [
      "HTML",
      "CSS",
      "React.js",
      "Next.js",
      "Vue.js",
      "Nuxt",
      "Tailwind CSS",
      "Flutter",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    blurb: "The quiet machinery behind the screen.",
    items: ["Node.js", "Express.js", "REST API", "Laravel"],
  },
  {
    id: "database",
    label: "Database",
    blurb: "Keeping every thread in place.",
    items: ["MySQL", "PostgreSQL", "SQLite", "Firebase"],
  },
  {
    id: "engineering",
    label: "Engineering",
    blurb: "Habits that keep the build honest.",
    items: [
      "Object-Oriented Programming",
      "Git / GitHub",
      "API Integration",
      "MVC",
      "Debugging",
    ],
  },
  {
    id: "tools",
    label: "Tools",
    blurb: "The desk, in software form.",
    items: [
      "Visual Studio Code",
      "Visual Studio",
      "Android Studio",
      "Unity",
      "Docker",
      "Postman",
      "Figma",
    ],
  },
];

export const toolboxNote =
  "No percentage bars. A working inventory drawn from the projects and repositories — not a leaderboard.";
