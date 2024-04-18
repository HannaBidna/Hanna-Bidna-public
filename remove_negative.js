//Написати функцію removeNegative яка прибирає з масиву чисел негативні елементи. Наприклад removeNegative([-2,4,3,-10,0,3]) має повернути [4,3,0,3]. Використання filter заборонено.

function removeNegative(arr){
    let new_array = [];
    for (let i = 0; i < arr.length; i += 1){
        if (arr[i] >= 0){
           new_array.push(arr[i]);
        }
    }return new_array;
  }
  
  let result = removeNegative([-2,4,3,-10,0,3]);
  console.log(result);// result [4,3,0,3]
   