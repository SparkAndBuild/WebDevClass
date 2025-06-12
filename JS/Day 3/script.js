// actual date
let d = new Date()
// console.log(d)
// // day
// console.log("Year : " + d.getFullYear())
// console.log("Month : " + d.getMonth())
// console.log("Date : "+ d.getDate())
// console.log("Day : " + d.getDay())

// // time
// console.log("Hour : "+d.getHours())
// console.log("Minutes : "+d.getMinutes())
// console.log("Seconds : " + d.getSeconds())

setInterval(()=>{
 let d = new Date()
 let minutes = d.getMinutes()
 let seconds = d.getSeconds()
    // 10:08:09
    if(minutes < 10){
        minutes = "0"+minutes
    }
    if(seconds < 10){
        seconds = "0"+seconds
    }
 document.getElementById('time').innerHTML = `The time is : ${d.getHours()}:${minutes}:${seconds}`   
},1000)

document.getElementById("date").innerHTML = `The date is: ${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`

// ARRAYS

let names = [ 'Obbie','Ken','Tabitha']

// length array
    // console.log(names.length)
// accessing array items
    // console.log(names[0])
    // console.log(names[1])
    // console.log(names[2])
    // console.log(names[3])
// ADDING ITEMS TO ARRAY
// names.push('harry') // adds at the end
// names.unshift('Jerry')
// removing
// names.pop() //remove  at the end
// names.shift() //removes at the front

let marks = [ 2,5,7,1,8,4]

console.log(marks)
// sort
console.log(marks.reverse())
// console.log(names.sort())

// to string
// console.log(names.toString())

// console.log(names.at(0))

// console.log(names.concat(marks))
