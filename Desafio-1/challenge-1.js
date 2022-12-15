console.log("Challenge 1:")

const array = [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21]

console.log(array.join(", "))

const toLeft = (array) => {
    for (let i in array) {
        if (array[i] === 1) {
            array.unshift(array.splice(i, 1))
        }
    }
}

toLeft(array)
console.log(array.join(", "))

console.log("--------------------")