function pairSum(nums, target) {
  // Insert code here;
  
  let temp=false;
  let arr = Array.from(nums);

  arr.forEach(index1 => {arr.forEach(index2 =>{
    if(index1 + index2 == target){
      temp = true;
    }
  })
})
  
return temp;
}

console.log(pairSum([3, 4, 6, 7, 8, 9], 17));

// Do not edit this line;
module.exports = pairSum;