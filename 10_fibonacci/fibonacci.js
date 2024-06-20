const fibonacci = function(n) {
    const num = parseInt(n, 10);
    if (num < 0) {
      return "OOPS";
    } else if (isNaN(num)) {
      throw new Error("Input must be a number");
    } else if (num <= 1) {
      return num;
    } else {
      return fibonacci(num-1) + fibonacci(num-2);
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
