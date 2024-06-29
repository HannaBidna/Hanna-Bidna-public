//Напишіть функцію яка перемішує (випадковим чином переставляє) елементи масиву.
function randomOrder(arr){
    let arraySorted = arr.sort(()=> Math.random - 0.5) 
    return arraySorted;
}
console.log(randomOrder([3, 7, 8, 6, 9]))