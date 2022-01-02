class MySolution {

  countDownSum(num) {
    // Insert code here;

    console.log(num);

    let nextNumber = num - 1;

    if (nextNumber > 0) {
        countDownSum(nextNumber);
    }
}

let studentSolution = new MySolution();
studentSolution.countDownSum(5)

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;