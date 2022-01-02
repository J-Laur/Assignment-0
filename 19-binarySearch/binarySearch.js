class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;

    let arr = Array.from(nums); //creates an array
    let first = 0;
    let mid = Math.floor(arr.length/2);
    let last = arr.length-1;

    if(target == arr[mid]){
      return true;
    }
    else if (target < arr[mid]){
      arr = arr.splice(first,mid); 
      return this.binarySearch(arr, target);
    }
    else if(target > arr[mid]){ 
      arr= arr.splice(mid+1,last); 
      return this.binarySearch(arr, target);
    }
    return false; 
  }
}

let solution = new MySolution();
console.log(solution.binarySearch([1,2,3,4,5], 3))

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;