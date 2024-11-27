import express from 'express'

const app = express()
app.use(express.json())

const createPet = (req, res) => {
    res.send(200, {
        name: req.body.name,
    })
}

app.post('/pet', createPet)
app.listen(8000)
