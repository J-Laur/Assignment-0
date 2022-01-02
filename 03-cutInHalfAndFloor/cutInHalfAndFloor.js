function cutInHalfAndFloor(num) {
  // Insert code here;

  let divideBy = 2;
  let result = num / divideBy;
  let resultRoundedDown = Math.floor(result);

  console.log(resultRoundedDown);
}

cutInHalfAndFloor(29);

// Do not edit this line;
module.exports = cutInHalfAndFloor;