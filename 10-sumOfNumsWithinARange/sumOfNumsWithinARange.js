function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;

  
  let count = 0;

  for(let i = 0; i < nums.length; i++)
    if (nums[i] >= start && nums[i] <= end){
      count++;
    }

  console.log(count);

}

sumOfNumsWithinARange([3, 4, 7, 9, 0, 2, 9, 10, 7, 4], 2, 9);


// Do not edit this line;
module.exports = sumOfNumsWithinARange;