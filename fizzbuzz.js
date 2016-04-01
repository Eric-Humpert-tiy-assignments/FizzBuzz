//Write a program that prints the numbers from 1 to 30. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

var count = 30;

for (var i = 1; i <= count; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, 'FizzBuzz');
  }  else if (i % 3 == 0) {
    console.log(i, 'Fizz');
  }  else if (i % 5 == 0) {
    console.log(i, 'Buzz');
  }  else {
    console.log(i);
  }
}

var counter = 1;

while (counter <= 30) {
  if (counter % 3 == 0 && counter % 5 == 0) {
    console.log('FizzBuzz');
  } else if (counter % 3 == 0) {
    console.log('Fizz');
  } else if (counter % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(counter);
  }
  counter += 1;
}
