//Написати функцію яка повертає true якщо всі елементи масива не мають дублікатів. У іншому випадку функція має повертати false. Використання Set заборонено.

function noDuplicate(arr){
    arr.sort ((a, b) => a-b);
    let result = [];
    for (let i = 0; i < arr.length; i += 1){
        if (arr[i + 1] === arr[i]){
           result.push(arr[i]);
        }
    }return result.length === 0? true:false;
  }
  
  let result = noDuplicate([2,2, 6, 7]);
  console.log(result);