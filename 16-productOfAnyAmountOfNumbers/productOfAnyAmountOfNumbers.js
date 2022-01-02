function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;

let product = 1;

for (let i = 0; i < args.length; i++){

  product *= args[i];
}

  console.log(product);
}

productOfAnyAmountOfNumbers(4, 5, 6, 7, 8)

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;