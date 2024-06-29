//Створити функцію glueArrays яка приймає у якості параметрів 2 масиви і повертає масив або null, приклади:  glueArrays([1,2,3,4], [4,5,8,6]) має повернути [1,2,3,4,5,8,6], glueArrays([1,2,3,3], [3,3,8,6]) має повернути [1,2,3,3,3,8,6], glueArrays([1,2,3,4], [5,2,8,6]) має повернути null.

function glueArrays (arr1, arr2){
    let new_array = [];
     if (arr1[arr1.length - 1] === arr2[0]){
        new_array = arr1.concat(arr2.slice(1))
    }else {
        new_array = null;
    }
    return new_array;
  }
  
  let result = glueArrays ([1,2,3,3], [3,3,8,6]);
  console.log (result); // result [1,2,3,3,3,8,6]
  
  let result1 = glueArrays ([1,2,3,4], [5,6,7,8]);
  console.log (result1); // result null
  