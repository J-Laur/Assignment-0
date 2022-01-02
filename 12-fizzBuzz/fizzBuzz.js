function fizzBuzz(start, end) {
  // Insert code here;i
  
  let arr = new Array;

  for(let i = start; i <= end; i++){
    if (i % 3 == 0){
      arr[i] = "Fizz";
      console.log(arr[i]);
    }
    else if (i % 5 == 0){
      arr[i] = "Buzz";
      console.log(arr[i]);
    }
    else if (i % 3 == 0 && i % 5 == 0){
      arr[i] = "FizzBuzz";
      console.log(arr[i]);
    }
    else 
      console.log(i);
  
  }

}

fizzBuzz(2, 20);


// Do not edit this line;
module.exports = fizzBuzz;