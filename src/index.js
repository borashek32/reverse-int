module.exports = function reverse (n) {
  let number;
  if (n < 0) {
    number = n * (-1);
  } else {
    number = n;
  }
  return number.toString().split('').reverse().join('');
}
