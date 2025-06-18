// fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(res=>{
//     let products = res
//     products.forEach(element=>{
        
//         addProduct(element)
//     })
        
//   });

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));