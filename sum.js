// Створити функцію sum яка отримує масив чисел і повертає суму елементів масиву. Наприклад sum([1, 1, 4, 3]) має повернути 9.
function sumElevents(arr){
    let sum = arr[0];
    for (let i = 0; i < arr.length; i += 1){
       sum += arr[i];
    }
    return sum;
   }
   
   let result = sumElevents([1, 1, 4, 3]);
   console.log (result);