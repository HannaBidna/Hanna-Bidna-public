//Створіть функцію groupById(arr), яка створює з масиву об’єкт із ключом id та елементами масиву як значеннями.

let users = [
    {id: 'іван', name: "Іван Іванко", age: 20},
    {id: 'ганна', name: "Ганна Іванко", age: 24},
    {id: 'петро', name: "Петро Петренко", age: 31},
  ];
  
  function groupById(arr){
    let result = {};
    result = arr.forEach(item => result[item.id] = item;
        )}

  let usersById = groupById(users);
  console.log(usersById);