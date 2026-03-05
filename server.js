const express = require("express")
const fs = require("fs")
const { exec } = require("child_process")

const app = express()

app.use(express.json())
app.use(express.static("public"))

app.post("/run", (req, res) => {
    const code = req.body.code

    fs.writeFileSync("bot.js", code)

    exec("node bot.js", (error, stdout, stderr) => {
        if (error) {
            console.log(error)
        }
    })

    res.send("Bot gestartet!")
})

app.listen(3000, () => {
    console.log("Server läuft auf Port 3000")
})
