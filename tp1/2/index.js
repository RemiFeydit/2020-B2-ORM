const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let poidsMax = 100
    let poidActuel = 0
    let compteur = 1
    let nbCartons = input[0]
    for (let index = 1; index < input.length; index++) {
      const element = input[index];
      poidActuel += element
      if(poidActuel>poidsMax)
      {
        index = index - 1
        compteur += 1
        poidActuel = 0
      }
    }
    return compteur
    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}