const express = require("express")
const cors = require("cors")

const app = express()
const corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))

const db = require("./models")
db.sequelize.sync()

const PORT = process.env.PORT || 8080
require("./routes/routes.js")(app)
app.listen( PORT, ()=> {
    console.log(`http://localhost:${ PORT }`)
})