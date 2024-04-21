//Написати функцію яка отримує масив масивів (матрицю) і повертає масив який включає останні елементи з кожного підмасиву.

function filteration(arr){
    return arr.filter((element, index, array) => array.indexOf(element) === index);
}

console.log(filteration([2,3,4,4,5,6,8,8]));