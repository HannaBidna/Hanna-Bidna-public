//Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

//All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

//An example:

//const objA = { a: 10, b: 20, c: 30 }
//const objB = { a: 3, c: 6, d: 3 }
//combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

function combine(...objects: Record<string, number>[]): Record<string, number> {
    const result = objects.reduce((acc, obj) => {
      Object.keys(obj).forEach(key => {
        if (acc[key]) {
          acc[key] += obj[key];
        } else {
          acc[key] = obj[key];
        }
      });
      return acc;
    }, {} as Record<string, number>);
  
    return result;
  }
  
  // Example usage
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { a: 2, b: 3, d: 4 };
  const obj3 = { a: 1, c: 1, d: 2 };
  
  console.log(combine(obj1, obj2, obj3));
  // Output: { a: 4, b: 5, c: 4, d: 6 }