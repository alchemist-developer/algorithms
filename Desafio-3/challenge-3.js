console.log("Challenge 3:")

const intNumbers = [1, 15, 2, 7, 2, 5, 7, 1, 4]
console.log(intNumbers.join(", "))

function combinationSearch(x) {
  for (i in intNumbers) {
    for (j in intNumbers) {
      if (intNumbers[i] + intNumbers[j] === x) {
        console.log("\n", intNumbers[i], " + ", intNumbers[j], " = ", x)
        console.log("Existe uma combinação de soma!")
        return true
      } else {
        console.log(x)
        console.log("Não existe uma combinação de soma.")
        return false
      }
    }
  }
}

combinationSearch(2)
combinationSearch(1231)

console.log("--------------------")