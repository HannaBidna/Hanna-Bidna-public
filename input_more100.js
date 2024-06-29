//Propose the user to input the number greater than 100 until he/she input nothing or mre than 100

let num;
do {
  num = prompt('Input the number more than 100', '');
  if (num === null || num === '') break;
  num = Number(num);

if (isNaN(num)) {
  alert(`It is not a number. Try again`);
} else if (num <= 100) {
  alert(`The number is not greater than 100. Try again`);
}
} while (num <= 100 || isNaN(num));

if (num > 100) {
alert(`Your number is ${num}`); 
}   
