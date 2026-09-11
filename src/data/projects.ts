import type { Project } from "@/types";

/**
 * Proyectos de BM Solutions.
 * Datos reales de cada proyecto.
 */
export const projects: Project[] = [
  {
    id: "connectup",
    name: "ConnectUp",
    category: "Sistema administrativo",
    description:
      "Dashboard empresarial integral para la gestión de recursos humanos y operaciones corporativas. Incluye control de asistencia, gestión de vacaciones, asignación de roles, administración multi-empresa y módulos de IA para análisis y calificación de llamadas de operadores.",
    image: "/projects/proyecto-02.jpg",
    technologies: ["Next.js", "Go", "TypeScript", "PostgreSQL"],
  },
  {
    id: "ccdr-admin",
    name: "CCDR",
    category: "Sistema administrativo",
    description:
      "Sistema web administrativo desarrollado para centralizar y digitalizar los procesos internos del Comité Cantonal de Deportes y Recreación de Santa Cruz, Guanacaste. Gestión de membresías, tiquetes, ingresos y agenda institucional.",
    image: "/projects/ccdr-admin.png",
    imageFit: "contain",
    preserveImageQuality: true,
    technologies: ["React", "Vite", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "ccdr-landing",
    name: "CCDRS",
    category: "Landing page",
    description:
      "Sitio web institucional del Comité Cantonal de Deportes y Recreación de Santa Cruz. Diseño impactante con estadísticas en tiempo real, agenda de eventos y sección de deportes y recreación disponibles en el cantón.",
    image: "/projects/proyecto-06.jpg",
    technologies: ["React", "Vite", "Tailwind CSS"],
  },
  {
    id: "retri",
    name: "Retri",
    category: "Landing page",
    description:
      "Plataforma web para el alquiler de maquinaria pesada. Como startup en producción, se enfrentó el desafío de desarrollar una solución escalable que se adaptara a los constantes cambios del negocio. +850 equipos disponibles con cotización en menos de 1 hora.",
    image: "/projects/proyecto-03.jpg",
    technologies: ["React", "Vite", "Tailwind CSS"],
  },
  {
    id: "dmona",
    name: "D'Mona Cafetería",
    category: "Landing page",
    description:
      "Landing page para Cafetería D'Mona, ubicada en Cartago, Costa Rica, con vista directa hacia la Basílica de los Ángeles. Diseño cálido y elegante que refleja la identidad del local, con menú, galería y contacto por WhatsApp.",
    image: "/projects/proyecto-07.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "gohan-onigiri",
    name: "Gohan Onigiri",
    category: "Landing page",
    description:
      "Sitio web para Gohan, restaurante japonés especializado en onigiris premium hechos a mano en Plaza Mundo Escazú. Diseño minimalista con menú bilingüe (ES/EN), galería, historia y sistema de pedidos integrado.",
    image: "/projects/gohan-onigiri.png",
    imageFit: "contain",
    preserveImageQuality: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];
