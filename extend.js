//Написати функцію extend(arr) яка повертає новий об’єкт, що містить усі властивості будь-яких об’єктів, переданих у масиві. Повернений об’єкт має включати перший екземпляр кожної властивості. Якщо елемент масиву не є обʼєктом його слід ігнорувати.

function extend(arr){
    const result = {};
    arr.forEach(item => {
        if (typeof item === 'object' && item != null && !Array.isArray(item)){
            Object.keys(item).forEach(key => {
                if(!(key in result)){
                    result[key] = item[key];
                }
            });
  
        }
    });
    return result;
  }
  
  
  console.log(extend([{ a: 1, b: 2 }, { c: 3 }]));
  // { a: 1, b: 2, c: 3 }
  console.log(extend([{ a: 1, b: 2 }, { c: 3 }, { d: 4 }]));
  // { a: 1, b: 2, c: 3, d: 4 }
  console.log(extend([{ a: 1, b: 2 }, null, { a: 3, c: 3 }]));
  // { a: 1, b: 2, c: 3 }
  