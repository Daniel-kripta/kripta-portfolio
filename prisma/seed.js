import "dotenv/config"
import pkg from "@prisma/client"
const { PrismaClient } = pkg
import { PrismaPg } from "@prisma/adapter-pg"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

async function main() {
    await prisma.stack.deleteMany()
    await prisma.url.deleteMany()
    await prisma.projects.deleteMany()

    await prisma.projects.create({
        data: {
            name: "quedamos.org",
            type: "myProjects",
            description: "Plataforma web ética para centralizar la gestión de eventos y fomentar el encuentro social físico en el contexto territorial de Canarias. Con especial sensibilidad por la diversidad, se dirige hacia un ocio accesible, seguro y orientado a la socialización efectiva.",
            screenshot: "quedamos",
            status: "deployed",
            version: "1.0",
            order: 1,
            stack: {
                create: [
                    { name: "React", type: "framework", img: "React" },
                    { name: "Vite", type: "framework", img: "Vite" },
                    { name: "React Router", type: "framework", img: "ReactRouter" },
                    { name: "Express JS", type: "framework", img: "Express" },
                    { name: "Prisma ORM", type: "framework", img: "Prisma" },
                    { name: "JavaScript", type: "lenguaje", img: "Javascript" },
                    { name: "CSS", type: "lenguaje", img: "CSS" },
                    { name: "HTML", type: "lenguaje", img: "HTML" },
                    { name: "PostgreSQL", type: "base de datos", img: "PostgreSQL" },
                    { name: "JWT", type: "otros", subtype: "Auth", img: "JWT" },
                    { name: "Vitest", type: "otros", subtype: "Testing", img: "Vitest" },
                    { name: "Railway", type: "otros", subtype: "deploy", img: "Railway" },
                    { name: "Vercel", type: "otros", subtype: "deploy", img: "Vercel" },
                ]
            },
            urls: {
                create: [
                    { name: "GitHub", description: "Repositorio de GitHub", url: "https://github.com/Daniel-kripta/quedamos-org" },
                    { name: "Demo", description: "Enlace a la web desplegada", url: "https://quedamos-org.vercel.app/" },
                ]
            }
        }
    })

    await prisma.projects.create({
        data: {
            name: "Sansofé",
            type: "myProjects",
            description: "Web app para consulta e investigación de prensa histórica canaria, con búsqueda de texto completo y asistente RAG. MVP desarrollado como proyecto final del bootcamp Full Stack + IA de Ironhack (junio 2026). Stack: Node.js + Fastify + Prisma, React 18 + Vite, Python + FastAPI, PostgreSQL + pgvector, Docker Compose, N8N y agente LangGraph con búsqueda semántica vía Vertex AI.",
            screenshot: "sansofe",
            status: "deployed",
            version: "1.0",
            order: 2,
            stack: {
                create: [
                    { name: "Vite", type: "framework", img: "Vite" },
                    { name: "React", type: "framework", img: "React" },
                    { name: "Fastify", type: "framework", img: "Fastify" },
                    { name: "FastAPI", type: "framework", img: "FastAPI" },
                    { name: "LangGraph", type: "framework", img: "LangGraph" },
                    { name: "TypeScript", type: "lenguaje", img: "Typescript" },
                    { name: "CSS", type: "lenguaje", img: "CSS" },
                    { name: "HTML", type: "lenguaje", img: "HTML" },
                    { name: "Python", type: "lenguaje", img: "Python" },
                    { name: "PostgreSQL", type: "base de datos", img: "PostgreSQL" },
                    { name: "pgvector", type: "base de datos" },
                    { name: "Docker", type: "otros", subtype: "Infra", img: "Docker" },
                    { name: "N8N", type: "otros", subtype: "Infra", img: "N8N" },
                    { name: "Vertex AI", type: "recurso", subtype: "IA", img: "VertexAI" },
                    { name: "Gemini", type: "recurso", subtype: "IA", img: "Gemini" },
                ]
            },
            urls: {
                create: [
                    { name: "GitHub", description: "Repositorio de GitHub", url: "https://github.com/Daniel-kripta/Proyecto_Final_Full_Stack_-_Sansofe_WebApp" },
                    { name: "Demo", description: "Enlace a la web desplegada", url: "https://sansofe.kripta.dev/" },
                ]
            }
        }
    })

    await prisma.projects.create({
        data: {
            name: "Nutridayly",
            type: "myProjects",
            description: "SPA en React para explorar alimentos, analizar propiedades nutricionales y construir platos personalizados. Permite buscar alimentos con filtrado por categoría y nutrientes, guardar favoritos, y crear platos en NutriCalc combinando alimentos guardados y calculando su composición nutricional normalizada por 100g. Datos de la USDA.",
            screenshot: "nutridayly",
            status: "deployed",
            version: "1.0",
            order: 3,
            stack: {
                create: [
                    { name: "Vite", type: "framework", img: "Vite" },
                    { name: "React", type: "framework", img: "React" },
                    { name: "React Router", type: "framework", img: "ReactRouter" },
                    { name: "JavaScript", type: "lenguaje", img: "Javascript" },
                    { name: "CSS", type: "lenguaje", img: "CSS" },
                    { name: "HTML", type: "lenguaje", img: "HTML" },
                    { name: "Vitest", type: "otros", subtype: "Testing", img: "Vitest" },
                    { name: "GitHub Pages", type: "otros", subtype: "deploy", img: "GitHubPages" },
                    { name: "USDA", type: "recurso", subtype: "API" },
                    { name: "Pixabay", type: "recurso", subtype: "API" },
                    { name: "Wikipedia", type: "recurso", subtype: "API" },
                ]
            },
            urls: {
                create: [
                    { name: "GitHub", description: "Repositorio de GitHub", url: "https://github.com/Daniel-kripta/project-react-application" },
                    { name: "Demo", description: "Enlace a la web desplegada", url: "https://daniel-kripta.github.io/project-react-application" },
                ]
            }
        }
    })

    console.log("Seed completado")
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())
