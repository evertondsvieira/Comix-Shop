const ul = document.getElementById("showcase")
const all = document.querySelector(".filterAll")
const manga = document.querySelector(".filterManga")
const hq = document.querySelector(".filterHq")
const gibi = document.querySelector(".filterGibi")
const button = document.querySelector(".inputButton")

all.addEventListener("click", filterAll)
manga.addEventListener("click", filterManga)
hq.addEventListener("click", filterHq)
gibi.addEventListener("click", filterGibi)
button.addEventListener("click", filterSearch)

function showcase(listDataBase){
    ul.innerHTML = ""

    listDataBase.forEach((item) => {
        const boxItem = document.createElement("li")
        const figure = document.createElement("figure")
        const img = document.createElement("img")
        const button = document.createElement("button")
        const name = document.createElement("h2")
        const description = document.createElement("p")
        const price = document.createElement("span")
        const container = document.createElement("div")
        const addCart = document.createElement("button")

        boxItem.classList.add("box-item")
        button.classList.add("product-tag")
        name.classList.add("product-item")
        description.classList.add("product-description")
        price.classList.add("product-price")
        container.classList.add("product-container")
        addCart.classList.add("add-cart")

        img.src = item.img
        button.innerText = item.tag
        name.innerText = item.nameItem
        description.innerText = item.description
        price.innerText = item.value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })
        addCart.innerText = item.addCart

        figure.appendChild(img)
        boxItem.append(figure, button, name, description, price)
        container.appendChild(addCart)
        boxItem.appendChild(container)
        ul.appendChild(boxItem)
    })
}
showcase(data)

function filterAll(){
    showcase(data)
}

function filterManga(){
    const filtered = data.filter(item => {
        return item.tag === "Mangá"
    })
    showcase(filtered)
}

function filterHq(){
    const filtered = data.filter(item => {
        return item.tag === "HQ"
    })
    showcase(filtered)
}

function filterGibi(){
    const filtered = data.filter(item => {
        return item.tag === "Gibi"
    })
    showcase(filtered)
}

function filterSearch(){
    const input = document.querySelector(".filterSearch").value.toLowerCase().trim()
    const filtered = data.filter(item => {
        return item.nameItem.toLowerCase() === input || item.tag.toLowerCase() === input
    })
    if(filtered.length !== 0){
        showcase(filtered)
    } else {
        showcase(data)
    }
}
