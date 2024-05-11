//Напишіть функцію groupByCity(users), яка приймає масив обʼєктів і повертає обʼєкт з людьми згрупованими по містам.

const people = [
    { name: 'Oleksii', city: 'Kyiv' },
    { name: 'Simona', city: 'Lviv' },
    { name: 'Nastia', city: 'Kyiv' },
  ];
  function groupById(arr){
    let result = {};

    if(!result[item.city]){
      result[item.city] = []
    };
    result[item.city].push(item);
    return result;    
    }
  
  let usersByCity = groupByCity(users);
  console.log(usersByCity);