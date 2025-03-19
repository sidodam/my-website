"use client";
import useLangStore from "../components/langStore";

const projectDescriptions = {
  en: {
    0: "Telegram bot that fetches real-time product listings directly from Wallapop (online marketplace).",
    1: "Simple Telegram Bot that fetches recent stock news from Yahoo Finance.",
    2: "Python script that aims to replicate the investment approach outlined by James P. O'Shaughnessey using APIs of Yahoo Finance and Fivniz. Inspired by a Reddit post.",
    3: "A Renfe bot to get around the annoying scarcity of places in the train (for those who have a subscription).",
    4: "My personal Portfolio.",
    5: "Another Mastermind Android game written in Kotlin.",
    6: "Proxmox-based home server setup integrating RR Media Family, Changedetection.io for automation, Calibre for e-books, and PiKVM for remote management.",
  },
  es: {
    0: "Bot de Telegram que obtiene listados de productos en tiempo real directamente desde Wallapop (mercado en línea).",
    1: "Bot de Telegram simple que obtiene noticias recientes sobre acciones desde Yahoo Finance.",
    2: "Script de Python que busca replicar el enfoque de inversión descrito por James P. O'Shaughnessey usando las API de Yahoo Finance y Fivniz. Inspirado en una publicación de Reddit.",
    3: "Un bot de Renfe para sortear la molesta escasez de plazas en el tren (para quienes tienen suscripción).",
    4: "Mi portafolio personal.",
    5: "Otro juego de Mastermind para Android escrito en Kotlin.",
    6: "Configuración de servidor doméstico basado en Proxmox, integrando RR Media Family, Changedetection.io para automatización, Calibre para libros electrónicos y PiKVM para administración remota.",
  },
  de: {
    0: "Telegram-Bot, der Echtzeit-Produktlisten direkt von Wallapop (Online-Marktplatz) abruft.",
    1: "Einfacher Telegram-Bot, der aktuelle Börsennachrichten von Yahoo Finance abruft.",
    2: "Python-Skript, das den von James P. O'Shaughnessey beschriebenen Investitionsansatz mithilfe der APIs von Yahoo Finance und Fivniz nachbilden soll. Inspiriert durch einen Reddit-Beitrag.",
    3: "Ein Renfe-Bot, um die lästige Platzknappheit im Zug zu umgehen (für Abonnenten).",
    4: "Mein persönliches Portfolio.",
    5: "Ein weiteres Mastermind-Android-Spiel, geschrieben in Kotlin.",
    6: "Proxmox-basierte Heimserver-Einrichtung mit RR Media Family, Changedetection.io zur Automatisierung, Calibre für E-Books und PiKVM zur Fernverwaltung.",
  },
};

const projects = [
  {
    name: "Wallabot",
    descriptionIndex: 0,
    isPublic: true,
    tags: ["Python", "Docker"],
  },
  {
    name: "stock-news",
    descriptionIndex: 1,
    isPublic: true,
    tags: ["Python", "Docker"],
  },
  {
    name: "Haughnessey",
    descriptionIndex: 2,
    isPublic: false,
    tags: ["Python", "Docker"],
  },
  {
    name: "Renfe booking Bot automation",
    descriptionIndex: 3,
    isPublic: false,
    tags: ["Python", "Docker"],
  },
  {
    name: "My Portfolio",
    descriptionIndex: 4,
    isPublic: true,
    tags: ["NextJS", "TailwindCSS", "TypeScript"],
  },
  {
    name: "Proxmox Server Setup",
    descriptionIndex: 6,
    isPublic: false,
    tags: ["Proxmox", "Linux", "Automation", "Self-Hosting"],
  },
];

const Page = () => {
  const lang = useLangStore((state) => ({
    currentLang: state.currentLang,
  }));

  const translations = {
    en: {
      projectsTitle: "My recent Projects",
      visitGithub: "Visit my GitHub",
      seeAllProjects: "to see all my projects.",
      publicRepo: "Public Repository",
      privateRepo: "Private Repository",
    },
    es: {
      projectsTitle: "Mis proyectos recientes",
      visitGithub: "Visita mi GitHub",
      seeAllProjects: "para ver todos mis proyectos.",
      publicRepo: "Repositorio Público",
      privateRepo: "Repositorio Privado",
    },
    de: {
      projectsTitle: "Meine aktuellen Projekte",
      visitGithub: "Besuchen Sie mein GitHub",
      seeAllProjects: "um alle meine Projekte zu sehen.",
      publicRepo: "Öffentliches Repository",
      privateRepo: "Privates Repository",
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          {translations[lang.currentLang].projectsTitle}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden relative"
            >
              <div className="p-6 mt-10">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 mt-8">
                  {project.name}
                </h2>
                <p className="text-gray-600 mb-12 text-base">
                  {
                    projectDescriptions[lang.currentLang][
                      project.descriptionIndex
                    ]
                  }
                </p>
                <div className="tags-container mb-4">
                  <div className="flex flex-wrap gap-2 absolute top-6 right-2 ">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounde md mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="button-container absolute bottom-3 left-4">
                  <div className="inline-flex items-center bg-indigo-500 text-white font-semibold py-2 px-4 rounded text-base">
                    {project.isPublic ? (
                      <>
                        <svg
                          className="h-5 w-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        {translations[lang.currentLang].publicRepo}
                      </>
                    ) : (
                      <>
                        <svg
                          className="h-5 w-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                        {translations[lang.currentLang].privateRepo}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p>
            <a
              href="https://github.com/sidodam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 "
            >
              {" "}
              {translations[lang.currentLang].visitGithub} &nbsp;
            </a>
            {translations[lang.currentLang].seeAllProjects}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
