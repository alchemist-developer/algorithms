console.log("Challenge 4:")

const numbers = [9, 2, 3, 1, 4]

const highNum = Math.max(...numbers)


function findNumbers() {
  for (let i = 0; i <= highNum; i++) {
    if (!numbers.includes(i, 0)) {
      console.log(i)
    }
  }
}

console.log(findNumbers())

console.log("--------------------")