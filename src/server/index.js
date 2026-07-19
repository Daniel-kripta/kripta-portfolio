import express from "express"
import { PrismaClient } from "@prisma/client"

const app = express()
const prisma = new PrismaClient()

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