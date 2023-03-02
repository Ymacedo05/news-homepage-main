let btn = document.getElementById("btn")
btn.addEventListener("click", abrirMenu)

function abrirMenu() {
    let nav = document.getElementById('nav')
    nav.classList.toggle("active")
}




let alvos = document.querySelectorAll(".a")

alvos.forEach( (el) => {
    el.addEventListener("click", () => { 
        let nav = document.getElementById('nav')
        nav.classList.remove("active")
    })
})

let subir = document.getElementById("subir")
subir.style.display = "none"

function avaliarSubir() {
    let barra = scrollY + (innerHeight*3) /4
    let indicador = document.getElementById("indicadorSubir").offsetTop

    if(barra > indicador) {
        subir.style.display = "block"
    } else {
        subir.style.display = "none"
    }
}

window.document.addEventListener("scroll", avaliarSubir)