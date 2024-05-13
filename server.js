const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")

app.use(morgan("common",{skip:(req,res)=> req.url === "/favicon.ico"}))
app.use(bodyParser.json())
app.use(cors())

const userRoutes = require("./routes/userRoutes")
app.use("/api/users", userRoutes)

const port = process.env.PORT || 8080
app.listen(port, () => {
   console.info("Server running at " + port)
}) 