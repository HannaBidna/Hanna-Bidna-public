// Створити функцію partialReverse яка отримує масив і повертає масив у якому всі елементи крім першого і останнього мають зворотній порядок.

function partialReverse(arr){
    let middle = arr.slice(1, -1); //сut all elements except 1st and las ones
    middle.reverse();              // turn around cutted elements
    let result = [arr[0]].concat(middle, arr[arr.length - 1]);  //join the 1st element, middle and the last
    return result;
  }
  
  
  let result = partialReverse([1,2,3,4,5,6]);
  console.log (result);
   