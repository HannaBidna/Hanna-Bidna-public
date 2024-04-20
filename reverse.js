//Написати функцію яка змінює порядок літер в рядку на зворотній. Використовувати методи reverse, toReversed заборонено.
function reverse(str){
    let new_str = '';
  
    for (let i = str.length - 1; i >= 0; i -= 1 )
      new_str += str[i];
  
    return new_str;
  
  }
  let result = reverse('abcde');
  console.log(result);