function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let count = 0;

  for(let i = 0; i < nums.length; i++)
    if (nums[i] < target){
      count++;
    }

  console.log(count);

}

countOfAllNumbersSmallerThanTarget([3, 4, 7, 9, 0, 2], 8);


// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;