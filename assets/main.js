
let numProjec = 4;
let appSection = document.getElementById('app')

for(let i = 1; i <= numProjec; i++){

    function callTitle() {
        return fetch(`https://adriano2606.github.io/100days-css-challenge/day0${i}`) 
        .then(response => {return response.text()})
        .then(html => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, "text/html");
            const titulo = doc.title;
            return titulo
        })
    }
    
    function createCard() {
        return callTitle().then(a => { 
            return `<div class="card"><a href="https://adriano2606.github.io/100days-css-challenge/day0${i}" target="_blank">
            <div class="card-txt">
                <span>${a}</span>
                <span>Animated sunrise/sunset</span>
            </div>
            <img src="./assets/img/0${i}.PNG" alt="Imagem Projeto ${i}" class="img">
        </a></div>`
        })
    }
    
    createCard().then(a => {appSection.innerHTML += a})


}