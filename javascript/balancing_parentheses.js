function balancingParentheses(string) {
  // type your code here
  let arr = string.split("");
  let arrModified = true;

  // checks for new pairs until it doesn't find any more
  while (arrModified) {
    arrModified = false;
    for (let i = 0; i < (arr.length - 1); i++) {
      // if found a pair of matching parentheses
      if (arr[i] === '(' && arr[i+1] === ')') {
        // remove them from the array
        arr.splice(i,2);
        arrModified = true;
      }
    }
  }

  return arr.length;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution

// given a string of just parentheses, return the number of parenthesis
// needed to balance them
// that is, every left parenthesis should be followed, at some point,
// by a right parenthesis

// i.e. )()( => 2

// pseudo code
// search the code for correct, adjacent () pairs
// if one is found, slice them out of the string
// continue doing this until no more are found
// return the length of the string