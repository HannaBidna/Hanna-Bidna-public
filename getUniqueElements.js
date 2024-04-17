function getUniqueElements(arr){
    arr.sort ((a, b) => a-b);
    let result = [];
    for (let i = 0; i < arr.length; i += 1){
        if (arr[i] === 0 || arr[i -1] !== arr[i]){
           result.push(arr[i]);
        }
    }return result;
  }
  
  let result = getUniqueElements([2, 7, 7, 5, 4, 2, 7]);
  console.log(result);