let image = document.getElementById("image")
let count = 1;
setInterval(()=>{
    image.src= `/JS/slider/image${count}.png`
    count = count + 1
    if(count == 5){
        count = 1
    }
},5000)

