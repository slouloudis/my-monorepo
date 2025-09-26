import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.json('THis is my server up and running!')
})
app.listen(8080, () => {
    console.log(`Server running on port 8080`)
})