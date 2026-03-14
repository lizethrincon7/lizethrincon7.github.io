import type { Project } from "../types/project";

export const projects: Project[] = [
  {
      id: 1,
      title: "Análisis de movilidad urbana y productividad económica en LATAM ",
      description: "Evaluar como la movilidad urbana se relaciona con la productividad económica en las principales ciudades latinoamericanas e identificar en que ciudades conviene invertir en infraestructura de transporte.",
      image: "https://tse3.mm.bing.net/th/id/OIP.sYkrmNlmsQwbysuDp28tBgHaFQ?rs=1&pid=ImgDetMain&o=7&rm=3?w=800&h=400&fit=crop",
      tags: ["Python", "Matplotlib", "Seaborn"],
      demoUrl: "https://www.notion.so/An-lisis-de-movilidad-urbana-y-productividad-econ-mica-en-LATAM-9fb463e130af82e693c181738c5d2c1b?source=copy_link",
      githubUrl: "https://github.com/example/ai-chat",
      featured: true
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio website built with Astro and React. Features a modern design, dark mode support, and optimized performance.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=400&fit=crop",
      tags: ["Astro", "React", "TailwindCSS"],
      demoUrl: "https://portfolio.example.com",
      githubUrl: "https://github.com/example/portfolio",
      featured: false
    }
];

