const ul = document.getElementById("showcase")
const all = document.querySelector(".filterAll")
const manga = document.querySelector(".filterManga")
const hq = document.querySelector(".filterHq")
const gibi = document.querySelector(".filterGibi")
const buttonInput = document.querySelector(".input-button")
const cartBase = document.querySelector("#cart-base-id")

all.addEventListener("click", filterAll)
manga.addEventListener("click", filterManga)
hq.addEventListener("click", filterHq)
gibi.addEventListener("click", filterGibi)
buttonInput.addEventListener("click", filterSearch)

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
        img.classList.add("product-img")
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

        addCart.addEventListener("click", function() {
            originalCart.push({...item, id: originalCart.length + 1})
            showCart(originalCart)
        })
    })
}

function showCart(listCartData){
    const ulCart = document.getElementById("list-items")
    ulCart.innerHTML = ""

    if(listCartData.length === 0) {
        cartBase.style.display = "none"

        const emptyCart = document.createElement("div")
        const pre = document.createElement("pre")
        const pre2 = document.createElement("pre")
        
        emptyCart.classList.add("empty-cart")
        
        pre.innerHTML = "Por enquanto não temos"
        pre2.innerHTML = "produtos no carrinho..."
        
        emptyCart.append(pre, pre2)
        ulCart.appendChild(emptyCart)
    } 

    if(listCartData.length > 0) {
        cartBase.style.display = "block"

        listCartData.forEach((item) => {
            const itemCart = document.createElement("li")
            const imgCart = document.createElement("img")
            const centralize = document.createElement("div")
            const nameCart = document.createElement("h2")
            const tagCart = document.createElement("p")
            const priceCart = document.createElement("span")
            const remove = document.createElement("img")
            const centralizeText = document.createElement("div")

            itemCart.classList.add("item-cart")
            imgCart.classList.add("img-cart")
            centralize.classList.add("centralize-cart")
            nameCart.classList.add("name-cart")
            tagCart.classList.add("tag-cart")
            priceCart.classList.add("price-cart")
            remove.classList.add("remove-cart")
            centralizeText.classList.add("centralize-text-cart")

            imgCart.src = item.img
            nameCart.innerText = item.nameItem
            tagCart.innerText = item.tag
            priceCart.innerText = item.value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            })
            remove.src = "Src/IMG/trash.png"
            centralizeText.append(nameCart, tagCart, priceCart)
            centralize.append(imgCart, centralizeText, remove)
            itemCart.append(centralize)
            ulCart.appendChild(itemCart)
            
            remove.addEventListener('click', function () {
                originalCart = originalCart.filter((elem) =>{
                return elem.id !== item.id
            })
            showCart(originalCart)
            })
        })
        const amountNum = document.getElementById("amount-num")
        const totalNum = document.getElementById("total-num")
        
        amountNum.innerHTML = `${originalCart.length}`
        totalNum.innerText = `R$ ${sumItems(listCartData).toFixed(2)}`
    }
}

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
    const input = document.querySelector(".filter-search").value.toLowerCase().trim()
    const filtered = data.filter(item => {
        return item.nameItem.toLowerCase() === input || item.tag.toLowerCase() === input})
    if(filtered.length !== 0){
        showcase(filtered)
    } else {
        showcase(data)
    }
}

function sumItems(sum){
    let total = 0

    for(let index = 0; index < sum.length; index++){
        let product = sum[index]
        total += product.value
    }
    return total
}

showcase(data)
showCart(originalCart)
sumItems(originalCart)
