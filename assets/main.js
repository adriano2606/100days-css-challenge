
let totalProjects = 4;
let appSection = document.getElementById('app')

async function createCards() {
    for (let i = 1; i <= totalProjects; i++) {
        let dom = await fetch(`https://adriano2606.github.io/100days-css-challenge/day0${i}`)
        .then(response => {return response.text()})
        .then(html => {
            let newDOM = new DOMParser().parseFromString(html, "text/html")
            return newDOM
            })
        
        let projectDay = dom.title.slice(9)
        let projectDescription = dom.title.slice(0,6)
            
        appSection.innerHTML += `<div class="card"><a href="https://adriano2606.github.io/100days-css-challenge/day0${i}" target="_blank">
        <div class="card-txt">
            <span>${projectDay}</span>
            <span>${projectDescription}</span>
        </div>
        <img src="./assets/img/0${i}.PNG" alt="Imagem Projeto ${i}" class="img">
    </a></div>`
    }
}       

createCards()
