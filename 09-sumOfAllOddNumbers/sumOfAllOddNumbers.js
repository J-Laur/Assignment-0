function sumOfAllOddNumbers(nums) {
  // Insert code here;

  let count = 0;

  for(let i = 0; i < nums.length; i++)
    if (nums[i] % 2 == 1){
      count++;
    }

  console.log(count);

}

sumOfAllOddNumbers([3, 4, 7, 9, 0, 2, 9, 10]);


// Do not edit this line;
module.exports = sumOfAllOddNumbers;