function findEvenIndex(arr)
{
  let sum = 0;
  let left = 0;
  
  for (let i = 0; i < arr.length; i += 1){
    sum += arr[i];
  }
  
  for (let i = 0; i < arr.length; i += 1){
    sum -= arr[i];
    if (left === sum){
      return i;
    }
    left += arr[i];
  }
  return -1;
}