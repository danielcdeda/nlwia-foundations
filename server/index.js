import cors from 'cors'
import express from 'express'
import { download } from './download.js';

const app = express();
app.use(cors());

app.get('/summary/:id', (req,res) => {
    download(req.params.id)
    res.json( {result: "Download realizado com sucesso!"} )
})

app.listen(3333, () => console.log('rodando garai'))
