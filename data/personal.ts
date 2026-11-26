export type EducationEntry = {
  period: string;
  school: string;
  level: string;
  current?: boolean;
};

export const personal = {
  name: "Wirya Dinata Mulia",
  firstName: "Wirya",
  initials: "WDM",
  role: "Developer & technology enthusiast",
  location: "Bandung, Indonesia",
  locationShort: "Bandung, ID",
  timeZone: "Asia/Jakarta",
  email: "wirya.dinata.work@gmail.com",
  instagramHandle: "lenhuhu205",
  instagramUrl: "https://www.instagram.com/lenhuhu205",
  // Drop a URL in to show the link on the site. Leave empty to hide it.
  githubUrl: "https://github.com/WiryaL96",
  linkedinUrl: "",
  intro:
    "Developer, technology enthusiast, and someone who enjoys building things for the digital world.",
  status: "Open to interesting problems",
  availabilityNote: "Usually online, always curious.",
  aboutStatement:
    "I like taking things apart to see how they work — then putting them back together, a little better.",
  aboutParagraphs: [
    "I'm Wirya, a student from Bandung who builds for the web, pokes at Android, and treats most projects as an excuse to learn something new.",
    "Most of what I know comes from school, curiosity, and a fair amount of trial and error. I care about software that works, but I care just as much about how it feels to use.",
  ],
  education: [
    {
      period: "2015 — 2021",
      school: "SDPN 252 Setiabudi Bandung",
      level: "Primary school",
    },
    {
      period: "2021 — 2024",
      school: "SMPN 26 Bandung",
      level: "Junior high school",
    },
    {
      period: "2024 — Present",
      school: "SMK Negeri 1 Cimahi",
      level: "Vocational high school",
      current: true,
    },
  ] satisfies EducationEntry[],
  interests: [
    {
      label: "Software development",
      note: "Turning a vague idea into something that runs.",
    },
    {
      label: "IT & technology",
      note: "Following the trail of how things actually work.",
    },
    {
      label: "Application development",
      note: "Small tools, useful systems, fewer clicks.",
    },
    {
      label: "Problem solving",
      note: "The part where the real learning happens.",
    },
    {
      label: "Digital experiences",
      note: "Making screens feel a little less like screens.",
    },
  ],
  currentFocus: ["Next.js", "Kotlin", "API design"],
} as const;

export type Personal = typeof personal;
