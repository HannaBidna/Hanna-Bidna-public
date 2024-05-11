//Написати функцію яка прибирає з масиву дублікати. Для вирішення обовʼязково використати filter.

function filterated(arr){
    return arr.filter((element, index, array) => array.indexOf(element) === index);
}

console.log(filterated([2,3,4,4,5,6,8,8]));