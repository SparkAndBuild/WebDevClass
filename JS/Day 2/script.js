document.getElementById("submit").addEventListener('click',function(){
    let f_num = Number(document.getElementById("f_num").value)
    let s_num = Number(document.getElementById("s_num").value)
    // TYPE CONVERSION
    // console.log(f_num)
    // console.log(typeof(f_num))
    // f_num = Number(f_num)
    // console.log(typeof(f_num))
    // console.log(f_num + 10)

    let total =  f_num +  s_num

    document.getElementById("result").innerHTML = total
    document.getElementById("f_num").innerHTML = ''
    document.getElementById("s_num").innerHTML = ''
    fullname()
})

// CONSTANT
const PI = 3.142

// FUNCTIONS
//no params
function fullname(){
    console.log("Tom Cat")
}
// params fun
function userName(firstname,lastname){
    console.log(`${firstname} ${lastname}`)
}
// return
function yourName(firstname,lastname,age){
    return `My name is ${firstname} ${lastname} and I am ${age} years old`
}

let user = yourName('jerry','mouse',3)
// console.log(user)

// STRINGS
let myName = 'kenny'
let hername = 'JANE'
// console.log(myName.length)
// console.log(myName.trim())
// console.log(myName.trim().length)
// console.log(myName.toUpperCase())
// console.log(hername.toLowerCase())
// console.log(myName.replace('k','K'))
// console.log(myName.replaceAll('n','i'))
// console.log(myName.charAt(0))
// console.log(myName.charAt(7))

// MATH FUNCTION
let users = 2000
let milk = 40.98562

// console.log(Math.random() * 100)
// console.log(Math.floor(milk))
// console.log(Math.ceil(milk))
// console.log(Math.round(5.6))
// console.log(Math.round(5.4))
// console.log(Math.pow(7,3))

// LOGICAL OPERATORS
// ==  eqaul 100 == 60 
// != not eqaul 100 != 60
// > greater than
// <  less than
// >= greater or equals
// <= less or equals

// CONDITIONS
let myAge = 2

if( myAge == 18){
    // if true
    console.log('am 18')
}else if(myAge > 18){
    // if true
    console.log("Adult")
}else if(myAge < 18){
    console.log('Am a child')
}


