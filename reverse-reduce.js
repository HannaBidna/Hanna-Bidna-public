//Напишіть функцію, яка міняє порядок літер в рядку на зворотній. Для вирішення обовʼязково використати reduce.
function revertOrder(str){
    let arr = str.split('');
    
    let revertString = arr.reduce((reverted, item) => item + reverted);
    return revertString;
   }
   console.log (revertOrder('Hello'));//olleH