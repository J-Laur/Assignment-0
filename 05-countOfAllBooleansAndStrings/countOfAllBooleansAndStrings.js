function countOfAllBooleansAndStrings(arr) {
  // Insert code here;

  let count = 0;

  for(let i = 0; i < arr.length; i++)
    if (typeof(arr[i]) == "boolean" || typeof(arr[i]) == "string"){
      count++;
    }

  console.log(count);

}

countOfAllBooleansAndStrings([true, "Hello", false, "false", 7, Infinity]);

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;