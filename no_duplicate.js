//Написати функцію яка повертає true якщо всі елементи масива не мають дублікатів. У іншому випадку функція має повертати false. Використання Set заборонено.

function noDuplicate(arr){
    let result = [];
  
    for (let i = 0; i < arr.length; i += 1){
      let duplicate = false;
  
      for (let j = 0; j < result.length; j += 1) {
        if (arr[i] === result[j]) {
            return false; 
        }
      }
        result.push(arr[i]); 
    } 
    return true;
  }
  
  
  console.log(noDuplicate([2, 6, 7]));  // Outputs: true
  console.log(noDuplicate([2, 6, 7, 2, 7]));// Outputs: false