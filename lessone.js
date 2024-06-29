//Написати функцію яка повертає true якщо в масиві є 2 сусідніх елементи (числа) які відрізняються на одиницю. В іншому випадку повертається false. Для вирішення обовʼязково використати методи масивів.

function lessOne(arr){
    return arr.some((element, index, array) => {
        return Math.abs(element - array[index + 1]) === 1;
    });
    }
  console.log(lessOne([1,3,5,9,8]));// true
  console.log(lessOne([3,3,7,5,9,0]));// false