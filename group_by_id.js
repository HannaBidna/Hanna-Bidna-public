//Створіть функцію groupById(arr), яка створює з масиву об’єкт із ключом id та елементами масиву як значеннями.

const people = [
  { name: 'Oleksii', city: 'Kyiv' },
  { name: 'Simona', city: 'Lviv' },
  { name: 'Nastia', city: 'Kyiv' },
];
function groupByCity(arr){
  let result = {};
  arr.forEach(item => {
    if(!result[item.city]){
      result[item.city] = [];
    }
    result[item.city].push(item);
    });
  return result;    
  }

let usersByCity = groupByCity(people);
console.log(usersByCity);
