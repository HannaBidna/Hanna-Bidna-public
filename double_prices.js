//Написати функцію doublePrices(obj) яка збільшує вдвічі всі ціни в обʼєкті.

function doublePrices(obj){
    Object.keys(obj).forEach(key => {obj[key] *= 2;
    });
    return obj;
}


let fruits = { banana: 1, orange: 2, apple: 4 };
let result = doublePrices(fruits);

console.log(result);
console.log(result.orange);
