const form = document.querySelector('#form')
const input = document.querySelector('#url')
const content = document.querySelector('#content')

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const videoURL = input.value
    if (!videoURL.includes("shorts")) {
        return content.textContent = "A URL não parece ser um shorts do youtube :/"
    }
    
    const [_, params] = videoURL.split("/shorts/")
    const [videoID] = params.split("?")
    
    content.textContent = "Obtendo o texto do áudio..."
})