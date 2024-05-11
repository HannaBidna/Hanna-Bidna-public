//Написати функцію getTopSalary(people) яка повертає ім’я найбільш високооплачуваної особи.

function getTopSalary(obj){
    if (Object.keys(obj).length === 0){
        return null;
      }
    let MaxName = null;
    let MaxSalary = 0;
    for (let key in obj){
      if (obj[key] > MaxSalary) {
        MaxSalary = obj[key];
        MaxName = key;
      }  
    }
    return MaxName;
  }
  
  let people = { "Іван": 100, "Петро": 300, "Марія": 250 };
  
  console.log(getTopSalary(people)); // Петро