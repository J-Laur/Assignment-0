function sumOfMinimumAndMaximum(nums) {
  // Insert code here;

  let min = nums[0];
  let max = nums[0];
  let sum = 0;

  for(let i = 0; i < nums.length; i++){
    if(min > nums[i]){
      min = nums[i];
    }
    if(max < nums[i]){
      max = nums[i];
    }
  }
  sum = min + max;
  return sum;
}

console.log(sumOfMinimumAndMaximum([5, 6, 7, 4, 2, 10]));

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;