const filterEvenNumbers = (numbers) => {
  return numbers.filter((num) => num !== null && num % 2 === 0);
};

module.exports = filterEvenNumbers;
