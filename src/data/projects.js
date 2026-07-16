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
        stack: ["one", "two"],
        stackImg: [techImg("Vite"), techImg("React")],
        id: "project-1",
        screenshot: urlImg("quedamos"),
        repo: "www"
        },
        {name: "Sansofé",
        description: "Web app para consulta e investigación de prensa histórica canaria, con búsqueda de texto completo y asistente RAG. MVP desarrollado como proyecto final del bootcamp Full Stack + IA de Ironhack (junio 2026). Stack: Node.js + Fastify + Prisma, React 18 + Vite, Python + FastAPI, PostgreSQL + pgvector, Docker Compose, N8N y agente LangGraph con búsqueda semántica vía Vertex AI.",
        image: "url",
        stack: ["one", "two"],
        stackImg: [techImg("Vite"), techImg("React")],
        id: "project-2",
        screenshot: urlImg("sansofe"),
        repo: "www"
        },
        {name: "Nutridayly",
        description: "SPA en React para explorar alimentos, analizar propiedades nutricionales y construir platos personalizados. Permite buscar alimentos con filtrado por categoría y nutrientes, guardar favoritos, y crear platos en NutriCalc combinando alimentos guardados y calculando su composición nutricional normalizada por 100g. Datos de la USDA.",
        image: "url",
        stack: ["Vite", "React"],
        stackImg: [techImg("Vite"), techImg("React")],
        id: "project-3",
        screenshot: urlImg("nutridayly"),
        repo: "www"
        },
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