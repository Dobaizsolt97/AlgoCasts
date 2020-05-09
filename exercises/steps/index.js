// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let index = 1;
  while (index <= n) {
    console.log("#".repeat(index) + " ".repeat(n - index));
    index = index + 1;
  }
}

module.exports = steps;

/* function steps(n) {
    let index = 1;
    while (index <= n) {
      console.log("#".repeat(index) + " ".repeat(n - index));
      index = index + 1;
    }
  } */
