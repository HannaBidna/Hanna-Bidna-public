console.log('Hello!');
let a = prompt('a = ', '');
let b = prompt('b = ', '');
let c = prompt('c = ', '');
alert(`Your input ${a}, ${b}, ${c}`);
let descrim = b**2 - 4*a*c;
if (descrim < 0) {
  alert(`The equation has no real roots.`);
}
else{
descrim = Math.sqrt(descrim);
alert(`x1 = ${(-b + descrim) / (2 * a)}`);
alert(`x2 = ${(-b - descrim) / (2 * a)}`)};