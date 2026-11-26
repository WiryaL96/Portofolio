export type Experiment = {
  id: string;
  title: string;
  type: string;
  image?: string;
  alt?: string;
  caption: string;
  note?: string;
  href?: string;
  hrefLabel?: string;
};

export const experiments: Experiment[] = [
  {
    id: "cuking",
    title: "Cuking",
    type: "Visual archive",
    image: "/images/experiments/cuking-study.jpg",
    alt: "A black cat standing in a swirling blue and gold painted room.",
    caption: "A black cat, a blue room, a sliver of gold.",
    note: "Kept here because the playground needed a little mischief.",
  },
  {
    id: "this-playground",
    title: "The Playground, v1",
    type: "Ongoing experiment",
    caption: "You're standing in it.",
    note: "A portfolio built as a small, warm room: floating paper, movable windows, and a stubborn refusal to repeat the same card six times.",
    href: "#top",
    hrefLabel: "Back to the entrance",
  },
];

export const experimentSlotCopy = {
  label: "Open page",
  title: "Reserved for the next half-finished idea.",
  note: "New experiments are added through a single data file. This space is intentionally waiting.",
};

export const creativeNotes = [
  "The best interfaces feel like places, not pages.",
  "Make it work. Then make it feel inevitable.",
  "If it needs an explanation to feel alive, it isn't done yet.",
  "Detail is not decoration. It is proof that someone cared.",
];
