function fizzbuzz(num) {
  if (typeof num !== "number"){
      return 'Error: El valor ingresado debe ser un numero'
  }
    const divisible = (divisor, num) => num % divisor === 0;

  if (num === 0) {
    return num;
  }
  if (divisible(3, num) && divisible(5, num)) {
    return "bizzbuzz";
  }
  if (divisible(3, num)) {
    return "fizz";
  }
  if (divisible(5, num)) {
    return "buzz";
  }

  return num;
}

function print(num) {
  for (let i = 0; i < num; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`);
  }
}

print(16);

module.exports = fizzbuzz;
