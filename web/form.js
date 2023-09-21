import { server } from './server.js'

const form = document.querySelector('#form')
const input = document.querySelector('#url')
const content = document.querySelector('#content')

form.addEventListener("submit", async (event) => {
    event.preventDefault()

    const videoURL = input.value
    if (!videoURL.includes("shorts")) {
        return content.textContent = "A URL não parece ser um shorts do youtube :/"
    }
    
    const [_, params] = videoURL.split("/shorts/")
    const [videoID] = params.split("?")
    
    content.textContent = "Obtendo o texto do áudio..."
    const transcription = await server.get("/summary/" + videoID)

    content.textContent = "Realizando o resumo...";
    const summary = await server.post("/summary", {
        text: transcription.data.result 
    })
    content.textContent = summary.data.result;  
})