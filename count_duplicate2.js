//Написати функцію countDuplicates яка рахує кількість повторень кожного елемента масива.

function countDuplicates(array){
 
    const count = array.reduce((accumulator, element) => {
        if (accumulator[element]){
            accumulator[element] += 1;
        }else{
            accumulator[element] = 1;
        }
        return accumulator
    }, {});
     return count;
     }
  
  let arr = [2, 2, 2, 2, 3, 3, 7, 4, 4];
  
  console.log(countDuplicates(arr));