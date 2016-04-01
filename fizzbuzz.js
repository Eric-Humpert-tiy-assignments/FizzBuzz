//Write a program that prints the numbers from 1 to 30. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

var count = 30;

for (var i = 0; i < count; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
  }
  if (i % 3 == 0) {
    console.log('Fizz');
  }
  else if (i % 5 == 0) {
    console.log('Buzz');
  }
  else {
    console.log(i);
  }
}
