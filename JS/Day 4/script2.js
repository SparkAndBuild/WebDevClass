// O B J E C T S
// CREATING
let user = {
    name:'kim',
    age:'20',
    height:'189'
}

// ACCESSING ITEMS
console.log(user.name)

// DELETING ITEMS
delete user.name
console.log(user)

// NESTED OBJECTS


// L O O P S
const names = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];
const numbers = [12, 45, 67, 23, 89, 34, 56, 78, 9, 51];
// FOR LOOP 
let total = 0
for(let i = 0;i<numbers.length;i++){
    total = total + numbers[i]
}
console.log(total)


// FOR IN LOOP
for(let x in names){
    // console.log(names[x])
}

// WHILE LOOP
let x = 0 
while(x < numbers.length){
    // console.log(numbers[x])
    x++
}


// DO WHILE LOOP
x = 0
do{
    // console.log(numbers[x])
    x++
}while(x < numbers.length)


// BREAK 
for(let x in names){
    if(x == 1) break
    // console.log(names[x])
}

// CONTINUE
for(let x in names){
    if(x == 1) continue
    // console.log(names[x])
}

// fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then((res)=>{
//     res.users.forEach(element => {
//         // console.log(element)
//         let p_tag = document.createElement("p")
//         let image = document.createElement("img")
//         p_tag.appendChild(document.createTextNode(element.firstName +" "+element.lastName))
//         image.alt =  "image"
//         image.src = element.image
//         document.getElementById("users").appendChild(image)
//         document.getElementById("users").appendChild(p_tag)
//     });
// });

let prod_images = []
 let container = document.createElement("div")
  container.id = 'desc'
 document.getElementById("data").appendChild(container)
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((res)=>{
    res.products.forEach(element => {
        console.log(element)
        prod_images.push(element.images[0])
        let p_tag = document.createElement("p")
        let image = document.createElement("img")
        let desc = document.createElement("p")
       
       
        p_tag.appendChild(document.createTextNode(element.title))
        desc.appendChild(document.createTextNode(element.description))
        p_tag.style.fontSize = "20px"
        p_tag.style.fontWeight = "bold"
        image.alt =  "image"
        image.src = element.images[0]
        image.style.width = "100px"
        image.style.height = "100px"
        
        document.getElementById("data").appendChild(image)
        document.getElementById("data").appendChild(p_tag)
        document.getElementById("data").appendChild(desc)
    });
});


// let data = document.createTextNode("hello")
// for(let x in names){
//     let p_tag = document.createElement("p")
//     console.log(names[x])
//     p_tag.appendChild(document.createTextNode(names[x]))
//     document.getElementById("users").appendChild(p_tag)
// }



