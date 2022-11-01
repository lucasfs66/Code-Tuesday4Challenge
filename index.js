// const perfectSquare = (num) => {
//     if(Number.isInteger(Math.sqrt(num))){
//         let number = Math.sqrt(num) + 1
//         return Math.pow(num, 2)
//     }

//     return -1
// }





// console.log(perfectSquare(9)) // should return 16 (3x3=9, 4x4=16)

// console.log(perfectSquare(289)) // should return 324 (17x17=289 18x18=324)

// console.log(perfectSquare(3000)) // should return -1 (sq root of 3000 is 54.77)


//Challenge 2

// const nextSquare = (num) => {
//     if(num >= 0){
//         let number = Math.floor(Math.sqrt(num)) + 1
//         return Math.pow(number, 2)
//     }

//     return 0
// }

// console.log(nextSquare(9))

// console.log(nextSquare(289))

// console.log(nextSquare(3000))
// console.log(nextSquare(-345))





const nextSquare = (num) => {

    
    if(num >= 0){
        let number = Math.floor(Math.sqrt(num)) + 1
        for(let i = 0; i < 1000; i++) {
            for (let m = 0; m <= num; m++ ) {
                n = m*(m+1)/2
                if (number === n){
                    console.log(number)
                    return Math.pow(number, 2)
                }
            }
            number++
        }

    }

    return 0
}

console.log(nextSquare(9))

console.log(nextSquare(289))

console.log(nextSquare(3000))
console.log(nextSquare(-345))