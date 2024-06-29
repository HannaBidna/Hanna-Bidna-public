interface Person {
    name: string;
    city: string;
  }
  
  const people: Person[] = [
    { name: 'Oleksii', city: 'Kyiv' },
    { name: 'Simona', city: 'Lviv' },
    { name: 'Nastia', city: 'Kyiv' },
  ];
  
  function groupByCity(arr: Person[]): Record<string, Person[]> {
    const result: Record<string, Person[]> = {};
  
    arr.forEach(item => {
      if (!result[item.city]) {
        result[item.city] = [];
      }
      result[item.city].push(item);
    });
  
    return result;
  }
  
  const usersByCity = groupByCity(people);
  console.log(usersByCity);
