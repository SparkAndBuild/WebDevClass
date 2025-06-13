// OBJECTS
// CREATING OBJECTS


let user_1 = {
    name:"Obbie",
    age:21,
    height:170,
    hobbies:{
        game:"football",
        since:2020
    }
}
let user_2 = {
    name:"Tom",
    age:19,
    height:190,
    hobbies:{
        game:"baseball",
        since:2021
    }
}
let dog = {
    name:"Tom",
    legs:4,
    owner:"Tom owner"
}

// accessing items in an object
// console.log("user 1 :"+user_1.hobbies.game)
// console.log("user 2 :"+user_2.hobbies.game)

// delete
delete user_1.height



// L O O P 
const names = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];
const numbers = [12, 45, 67, 23, 89, 34, 56, 78, 9, 51];

// FOR LOOP
// initialize
// how far / condition
// inr/dec
let total = 0;
for(let i = 0;i < numbers.length;i++){
    // total = total + numbers[i]
}

// FOR IN LOOP
for(let x in numbers){
    //  total = total + numbers[x]
}

// WHILE
let y = 10
while (y < 20) {
    // console.log("one")
    y++
}

// DO WHILE
let z = 20

do {
    // console.log(z)
    z++
} while (z < 30);

const new_numbers = [12, 45, 67, 23, 89, 34, 56, 78, 9, 51];
// BREAK
// do summation till less than 150
let summation = 0
for (let index = 0; index < new_numbers.length; index++) {
    if(summation == 147){
        break
    }
    //    summation = summation + new_numbers[index] 
  
// console.log(summation)

}

// CONTINUE

for (let index = 0; index < new_numbers.length; index++) {
    
    if(new_numbers[index] == 89){
        continue
    }
    // console.log(new_numbers[index])
    //    summation = summation + new_numbers[index] 

}


fetch('url')
.then(response=>{

})
.catch(error=>{
    
})
