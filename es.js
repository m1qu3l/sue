const con = document.querySelector(".con"),
        text = "FELIZ - DIA - DE - LA MADRE"
        
        const letraFunc = (text)=>{
            let div = document.createElement("div")
            div.classList.add("div")
            for (let i = 0; i < text.length; i++){
                let pala = document.createElement("i")
                pala.dataset.id = i
                pala.textContent = `${text[i].toLowerCase()}`
                div.appendChild(pala)
            }
            con.appendChild(div)
        }
        
        letraFunc(text)
        
        const num = (elnum)=> parseInt(Math.random() * elnum)

        const loascoloresquecambian = ()=>{
            const dody = document.querySelector("body")
            const cambiar = ()=> dody.style.setProperty("background", `rgba(${num(255)}, ${num(255)}, ${num(255)}, .4)`)
            setInterval(() => {
                cambiar()
            }, 999);
            setTimeout(() => {
                cambiar()
            }, 1);
        }
        loascoloresquecambian()
        
        
        const lasi = document.querySelectorAll(".con i")
        const mover = ()=>{
            const estemover = ()=>{
                lasi.forEach(el => {
                    let ran = num(10000)
                    let numerodeltop = 30
                    let tamano = document.querySelector("body").getBoundingClientRect().width
                    window.addEventListener("resize", e=> { tamano = document.querySelector("body").getBoundingClientRect().width
                        if (tamano < 600) numerodeltop = 20
                        if (tamano < 800) numerodeltop = 25
                    el.style.setProperty("top",`${ran % 2 == 0 ? num(-numerodeltop) : num(numerodeltop)}%`)
                    })
                    if (tamano < 600) numerodeltop = 10
                    if (tamano < 800) numerodeltop = 25
                    //el.style.setProperty("transform",`translate(${num(100)}%, ${num(100)}%)`)
                    el.style.setProperty("top",`${ran % 2 == 0 ? num(-numerodeltop) : num(numerodeltop)}%`)
                });
            }
            setTimeout(() => {
                estemover()
                var elequesevaapaar = setInterval(() => {
                    estemover()
                }, 2500);
            }, 5000);
        }
        mover()

        const elclick = ()=>{
            document.addEventListener("click", e=>{
                if (!e.target.matches(".con i")) return

                console.log(e.target.dataset.id )
            })
        }
        console.log()