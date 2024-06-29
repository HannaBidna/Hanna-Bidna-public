function sum(a) { //accepts a and return function 
    return function(b) { //which accepts b
        return a + b;
    };
  }
  const res = sum (2)(3);
  console.log (res); // result 5