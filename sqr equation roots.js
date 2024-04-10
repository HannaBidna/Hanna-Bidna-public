var readlineSync = require('readline-sync');

let a = parseFloat(readlineSync.question('Input a, please: '));
console.log('a = ' + a);

let b = parseFloat(readlineSync.question('Input b, please: '));
console.log('b = ' + b);

let c = parseFloat(readlineSync.question('Input c, please: '));
console.log('c = ' + c);

let descrim = b**2 - 4*a*c;
if (descrim < 0) {
    console.log('The equation has no real roots.');
} else {
    descrim = Math.sqrt(descrim);
    console.log('x1 = ' + (-b + descrim) / (2 * a));
    console.log('x2 = ' + (-b - descrim) / (2 * a));
}