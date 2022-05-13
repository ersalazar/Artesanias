const express = require("express")
const mysql = require("mysql")
const ejs = require("ejs")
const mapbox = require("@mapbox/mapbox-sdk")

const app = express()

app.set("port", 100)
app.engine("html", require("ejs").renderFile)
app.set("view engine", "ejs")

app.listen(app.get("port"), () => {
        console.log("Server on port: ", app.get("port"))
})

app.use(require('./routes'))
const path = require("path")
app.set("views", path.join(__dirname, "views"))





