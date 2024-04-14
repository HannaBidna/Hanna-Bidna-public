//Напишіть функцію pow(x, n), яка повертає число x, піднесене до степеня n. Функція повинна підтримувати лише натуральні значення n.

function pow( x, n){
    if (n >= 1 && Number.isInteger(n)){ // check if the n - natural
        return x**n;
    }else{
        return 'n is not a natural number';}
  
  }
  const result = pow(2, 6);// 64
  console.log(result);