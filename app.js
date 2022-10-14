const express = require('express')
const ytdl = require('ytdl-core')
const app = express()

app.get('/', function (req, res) {
    const { url } = req.query

    const date = Date.now()
    res.header("Content-Disposition", `attachmentt; filename="video_${date}.mp4"`)

    return ytdl(url).pipe(res)
})

app.listen(3000)

/* para executar, use o comando dentro dessa pasta: node app.js  */
/* para que funcione, depois do localhost:3000 insira a query string "?url=<url do video>" */


