let product_container = document.createElement("div")
let p = document.createElement("p").appendChild(document.createTextNode("one"))

// let product_id = document.createElement("h3")
// let product_title = document.createElement("h3")
// let product_price = document.createElement("h3")
// let product_description = document.createElement("p")
// let product_category = document.createElement("p")
// let product_image = document.createElement("img")
// let product_rate = document.createElement("p")
// let product_count = document.createElement("p")
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(res=>{
    let products = res
    products.forEach(element=>{
        addProduct(element)
    })
        
  });

function addProduct(data){
  // creating  the elements
    let product_id = document.createElement("h3")
    let product_title = document.createElement("h3")
    let product_price = document.createElement("h5")
    let product_description = document.createElement("p")
    let product_category = document.createElement("p")
    let product_image = document.createElement("img")
    let product_rate = document.createElement("p")
    let product_count = document.createElement("p")

    // assigning the classname 
    // product_id.className = "product_id"
    product_title.className = "product_title cinzel-500"
    product_price.className = "product_price"
    product_description.className = "product_description lora-500"
    product_category.className = "product_category"
    product_image.className = "product_image"
    product_rate.className = "product_rate  lora-700"
    product_count.className = "product_count lora-700"

    // assigning data
    product_title.innerHTML = data.title
    product_price.innerHTML ="USD: "+ data.price
    product_description.appendChild(document.createTextNode(data.description))
    product_category.appendChild(document.createTextNode(data.category))
    product_image.src = data.image
    product_rate.appendChild(document.createTextNode("Rate: " + data.rating.rate))
    product_count.appendChild(document.createTextNode("Votes: " + data.rating.count)) 

    // pushing to the html
    let mother = document.getElementById("data")
    let product_div = document.createElement("div")
    let product_rating = document.createElement("div")
    let image_div = document.createElement("div")
    product_div.className = "product_div"
    product_div.id = "product_div"
    product_rating.className = "product_rating"
    image_div.className = "image_div"
    image_div.appendChild(product_image)

    product_div.appendChild(image_div)
    product_div.appendChild(product_title)
    product_div.appendChild(product_price)
    product_div.appendChild(product_category)
    product_rating.appendChild(product_rate)
    product_rating.appendChild(product_count)
    product_div.appendChild(product_description)
    product_div.appendChild(product_rating)
    mother.appendChild(product_div)

    // show you later
    product_div.addEventListener('click', () => {
      // console.log("Product clicked:", data); 
      window.location.href = "product/?id="+data.id
    });

}

