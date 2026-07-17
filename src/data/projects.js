function urlImg(projectImg) {
    return(
        `./src/assets/images/${projectImg}_screenshot.png`            
    )        
}

function techImg(tech) {
    return(
        `./src/assets/logos/${tech}.png`            
    )
}

const data = {
    myProjects: [
        {name: "quedamos.org",
        description: "Plataforma web ética para centralizar la gestión de eventos y fomentar el encuentro social físico en el contexto territorial de Canarias. Con especial sensibilidad por la diversidad, se dirige hacia un ocio accesible, seguro y orientado a la socialización efectiva.",
        image: "url",
        stack: [
            { name: "React", type: "framework", img: techImg("React") },
            { name: "Vite", type: "framework", img: techImg("Vite") },
            { name: "React Router", type: "framework", img: techImg("ReactRouter") },
            { name: "Express JS", type: "framework", img: techImg("Express") },
            { name: "Prisma ORM", type: "framework", img: techImg("Prisma") },
            { name: "JavaScript", type: "lenguaje", img: techImg("Javascript") },
            { name: "CSS", type: "lenguaje", img: techImg("CSS") },
            { name: "HTML", type: "lenguaje", img: techImg("HTML") },
            { name: "PostgreSQL", type: "base de datos", img: techImg("PostgreSQL") },
            { name: "JWT", type: "otros", subtype: "Auth", img: techImg("JWT") },
            { name: "Vitest", type: "otros", subtype: "Testing", img: techImg("Vitest")},
            { name: "Railway", type: "otros", subtype: "deploy", img: techImg("Railway") },
            { name: "Vercel", type: "otros", subtype: "deploy", img: techImg("Vercel") }
        ],
        id: "project-1",
        screenshot: urlImg("quedamos"),
        repo: "www"
        },
        {name: "Sansofé",
        description: "Web app para consulta e investigación de prensa histórica canaria, con búsqueda de texto completo y asistente RAG. MVP desarrollado como proyecto final del bootcamp Full Stack + IA de Ironhack (junio 2026). Stack: Node.js + Fastify + Prisma, React 18 + Vite, Python + FastAPI, PostgreSQL + pgvector, Docker Compose, N8N y agente LangGraph con búsqueda semántica vía Vertex AI.",
        image: "url",
        stack: [            
            { name: "Vite", type: "framework", img: techImg("Vite") },
            { name: "React", type: "framework", img: techImg("React") },
            { name: "Fastify", type: "framework", img: techImg("Fastify") },
            { name: "FastAPI", type: "framework", img: techImg("FastAPI") },
            { name: "LangGraph", type: "framework", img: techImg("LangGraph") },
            { name: "TypeScript", type: "lenguaje", img: techImg("Typescript") },
            { name: "CSS", type: "lenguaje", img: techImg("CSS") },
            { name: "HTML", type: "lenguaje", img: techImg("HTML") },
            { name: "Python", type: "lenguaje", img: techImg("Python") },
            { name: "PostgreSQL", type: "base de datos", img: techImg("PostgreSQL") },
            { name: "pgvector", type: "base de datos"},
            { name: "Docker", type: "otros", subtype: "Infra", img: techImg("Docker") },
            { name: "N8N", type: "otros", subtype: "Infra", img: techImg("N8N") },
            { name: "Vertex AI", type: "recurso", subtype: "IA", img: techImg("VertexAI") },
            { name: "Gemini", type: "recurso", subtype: "IA", img: techImg("Gemini") }
        ],
        id: "project-2",
        screenshot: urlImg("sansofe"),
        repo: "www"
        },
        {name: "Nutridayly",
        description: "SPA en React para explorar alimentos, analizar propiedades nutricionales y construir platos personalizados. Permite buscar alimentos con filtrado por categoría y nutrientes, guardar favoritos, y crear platos en NutriCalc combinando alimentos guardados y calculando su composición nutricional normalizada por 100g. Datos de la USDA.",
        image: "url",
        stack: [
            { name: "Vite", type: "framework", img: techImg("Vite") },
            { name: "React", type: "framework", img: techImg("React") },
            { name: "React Router", type: "framework", img: techImg("ReactRouter")},
            { name: "JavaScript", type: "lenguaje", img: techImg("Javascript")},
            { name: "CSS", type: "lenguaje", img: techImg("CSS") },
            { name: "HTML", type: "lenguaje", img: techImg("HTML") },
            { name: "Vitest", type: "otros", subtype: "Testing", img: techImg("Vitest") },
            { name: "GitHub Pages", type: "otros", subtype: "deploy", img: techImg("GitHubPages") },
            { name: "USDA", type: "recurso", subtype: "API"},
            { name: "Pixabay", type: "recurso", subtype: "API"},
            { name: "Wikipedia", type: "recurso", subtype: "API"},
        ],
        id: "project-3",
        screenshot: urlImg("nutridayly"),
        repo: "www"
        }
    ],
    clientProjects:[
        {name: "Projecto 1",
        description: "SPA en React para explorar alimentos, analizar propiedades nutricionales y construir platos personalizados. Permite buscar alimentos con filtrado por categoría y nutrientes, guardar favoritos, y crear platos en NutriCalc combinando alimentos guardados y calculando su composición nutricional normalizada por 100g. Datos de la USDA.",
        image: "url",
        stack: ["one", "two", "three"],
        id: "project-1",
        url: "www",
        repo: "www"
        },
        {name: "Projecto 2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.",
        image: "url",
        stack: ["one", "two", "three"],
        id: "project-2",
        url: "www",
        repo: "www"
        },
        {name: "Projecto 3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.",
        image: "url",
        stack: ["one", "two", "three"],
        id: "project-3",
        url: "www",
        repo: "www"
        },
    ]
}

export default data