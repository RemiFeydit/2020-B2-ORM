const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let ranking = input[0]
    for (let index = 1; index < input.length; index++) {
      const element = input[index];
      ranking += parseInt(element)
      ranking -= parseInt(element.slice(element.indexOf(' ')))
    }
    if(ranking <= 100)
    {
      return 1000
    }
    else if(ranking<=10000)
    {
      return 100
    }
    else
    {
      return 'KO'
    }
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