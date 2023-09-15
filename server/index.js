import cors from 'cors'
import express from 'express'

const app = express();
app.use(cors());

app.get('/summary/:id', (req,res) => {
    res.send("ID do vídeo:" + req.params.id)
})

app.listen(3333, () => console.log('rodando garai'))
