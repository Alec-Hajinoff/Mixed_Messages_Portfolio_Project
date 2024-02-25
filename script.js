const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
function validateCred(arr) {
  let newValid1 = valid1.slice().reverse();
  return newValid1;
  }
console.log(validateCred(valid1));

function mult(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
      let x = arr[i];
      if (i % 2 == 1) {
        let y = x * 2;
        //If y > 9 less 9
        output.push(y); 
      } else {
        output.push(x); 
      }
    }
    return output
};
console.log(mult(validateCred(valid1)));