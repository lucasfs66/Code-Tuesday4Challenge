const perfectSquare = (num) => {
    if(Number.isInteger(Math.sqrt(num))){
        let number = Math.sqrt(num) + 1
        return Math.pow(num, 2)
    }

    return -1
}





console.log(perfectSquare(9)) // should return 16 (3x3=9, 4x4=16)

console.log(perfectSquare(289)) // should return 324 (17x17=289 18x18=324)

console.log(perfectSquare(3000)) // should return -1 (sq root of 3000 is 54.77)