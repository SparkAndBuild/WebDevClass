fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res=>{
    let products = res.products
    products.forEach(element=>{
        console.log(element.images[0])
        let p_title  = document.createElement("p")
        p_title.style.fontWeight = "bold"
        let title = document.createTextNode(element.title)
        let p_desc = document.createElement("p")
        let desc = document.createTextNode(element.description)
        let image = document.createElement("img")
        image.src = element.images[0]
        image.style.width = "100px"
        image.style.height = "100px"
        image.style.borderRadius = "50%"
        p_title.appendChild(title)
        p_desc.appendChild(desc)
        document.getElementById("data").appendChild(image)
        document.getElementById("data").appendChild(p_title)
        document.getElementById("data").appendChild(p_desc)
        
    })
});
