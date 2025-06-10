//Greetings
// console.log("Hello js")
//message
// console.log("This is new to me")


/** 
 * hello
 * this
 * is 
 * a
 * new 
 * week
 */

// GETTING HTML TAGS
// document.getElementById('greetings').textContent = "Hello Tom"

// setTimeout(() => {
//    document.getElementById('greetings').textContent = "Hello Jerry" 
// }, 3000);

// VARIABLE
// let x //declare
// x = 100 //assign
// let y = 200
// var username = "Tom"
// console.log(x)
// console.log(username)


// DATA TYPES 
// String
let firstname = "Tom"

//int/numbers
let max = 100
let min = 50

// Booleans
let isComplete = true
let isDone = false

// Bacticks 
// let f_name = 'Tom'
// let l_name = 'Cat'

// console.log("The name is :")
// console.log(f_name)
// console.log(l_name)

// normal string
// console.log("The name is :"+f_name+" "+l_name)
//string using backtics
// console.log(`The name is : ${f_name} ${l_name}`)

// Arithmetic ops

let f_num = 10;
let l_num = 20;

// add +
// console.log("Addition")
// console.log(10+20)
// // sub -
// console.log("Sub")
// console.log(10-20)
// //div /
// console.log("div")
// console.log(10/20)
// //mul *
// console.log("mul")
// console.log(10*20)

// // modular %
// console.log("mod")
// console.log(10%20)

// // expo **
// console.log("exp")
// console.log(7**3)

// //incremental ++
// console.log("inc")
// let new_value =  f_num++
// console.log(new_value)

let f_name;
let l_name;
let button;

document.getElementById("submit").addEventListener('click',function(){
    f_name = document.getElementById("fname").value
    l_name = document.getElementById("lname").value
    console.log("The  name is :"+ f_name +" "+l_name)
})