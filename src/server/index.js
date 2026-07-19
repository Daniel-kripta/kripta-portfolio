import "dotenv/config"
import express from "express"
import pkg from "@prisma/client"
const { PrismaClient } = pkg
import { PrismaPg } from "@prisma/adapter-pg"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })
const app = express()

app.use(express.json())

app.get("/api/projects", async (req, res) => {
    const { type } = req.query
    const projects = await prisma.projects.findMany({
        where: { visible: true, ...(type && { type }) },
        orderBy: { order: "asc" },
        include: { stack: true, urls: true }
    })
    res.json(projects)
})

app.listen(3001, () => {
    console.log("Server running on port 3001")
})