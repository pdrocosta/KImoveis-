import "reflect-metadata"
import "express-async-errors"
import express from "express"
import mainRoutes from "./routes"
import { handleErrors } from "./error"


const app = express()
app.use(express.json())

app.use(mainRoutes)

app.use(handleErrors)

export default app