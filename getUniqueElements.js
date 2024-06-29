// Створити функцію getUniqueElements яка отримує масив (примітивів) і повертає масив без дублікатів. Наприклад getUniqueElements([2, 7, 7, 5, 4, 2, 7]) має повернути [2, 7, 5, 4]. Використання Set заборонено.
function getUniqueElements(arr){
    let result = [];
    for (let i = 0; i < arr.length; i += 1){
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }return result;
  }
  
  let result = getUniqueElements([2, 7, 7, 5, 4, 2, 7]);
  console.log(result);

 
