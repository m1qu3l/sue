const eltext = "SUEGRA ", conde = document.querySelector(".con"), 
laside = document.querySelectorAll(".con i")

let i = 0
let nodo = document.createElement("samp")
nodo.classList.add("nodo")
conde.appendChild(nodo)
let bo = true
const funciondescribir = ()=>{
    setTimeout(()=>{
        let eliner = setInterval(()=>{
            nodo.innerHTML += eltext[i]
            
            if (i === eltext.length && bo) {i = 0; nodo.innerHTML = ''}else{i++}
        }, 1000)

        laside.forEach(el => el.style.setProperty("color", "rgba(0,0,0,.5)"))
    }, 5000)
}

funciondescribir()