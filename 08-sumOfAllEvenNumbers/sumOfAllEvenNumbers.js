function sumOfAllEvenNumbers(nums) {
  // Insert code here;

  let count = 0;

  for(let i = 0; i < nums.length; i++)
    if (nums[i] % 2 == 0){
      count++;
    }

  console.log(count);

}

sumOfAllEvenNumbers([3, 4, 7, 9, 0, 2]);


// Do not edit this line;
module.exports = sumOfAllEvenNumbers;