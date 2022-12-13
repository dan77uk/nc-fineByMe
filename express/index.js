const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
const multer = require("multer")
const upload = multer({dest: "images/"})
const fs = require("fs")

app.get("/images/:imageName", (req, res) => {
    const imageName = req.params.imageName
    const readStream = fs.createReadStream(`images/${imageName}.jpg`)
    readStream.pipe(res)
})

app.get("/", (req, res) => {
    console.log("hellothere")
    res.status(200).send({msg: "hello there again"})
})
app.post("/api/images", upload.single("image"), (req, res) => {
    const imagePath = req.file.path
    const description = req.body.description
    console.log(description, imagePath)
    res.send({description, imagePath})
})


module.exports = app