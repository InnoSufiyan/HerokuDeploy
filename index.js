const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000


app.get("/", (req, res) => {
    res.send("Hello World")
})
app.get("/about", (req, res) => {
    res.send("My About Page")
})

app.post("/about", (req, res) => {
    res.send("Post into About Page")
})

app.delete("/about", (req, res) => {
    res.send("Delete in About Page")
})

app.put("/about", (req, res) => {
    res.send("Updating About Page")
})


app.listen(PORT, () => {
    console.log("listing the port")
})