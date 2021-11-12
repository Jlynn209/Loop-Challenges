// Print odds 1-20

console.log();
console.log("_________________________");
console.log("Print odds 1-20");
console.log("_________________________");
console.log();

for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i + ":" + " is even");
  } else {
    console.log(i + ":" + " is odd");
  }
}

// Decreasing Multiples of 3

console.log();
console.log("_________________________");
console.log("Decreasing Multiples of 3");
console.log("_________________________");
console.log();

for (i = 100; i >= 0; i--) {
  if (i % 3 == 0) {
    console.log(i + ":" + " divisible by 3 ");
  }
}

// Print the sequence

console.log();
console.log("_________________________");
console.log("Print the sequence");
console.log("_________________________");
console.log();

var myArr = [4, 2.5, 1, -0.5, -2, -3.5];

for (i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

// Sigma

console.log();
console.log("_________________________");
console.log("Sigma");
console.log("_________________________");
console.log();

sum = 0;

for (i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum);

// Factorial

console.log();
console.log();
console.log("_________________________");
console.log("Factorial");
console.log("_________________________");
console.log();

var product = 1;

for (i = 1; i <= 12; i++) {
    product *= i;
}

console.log(product)
