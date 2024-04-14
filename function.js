
function calculate(oper1, oper2, operation, rep) {
    let res = operation(oper1, oper2); //define res as an operatoin
     if (typeof rep === 'function') {  // check is the report defined as a function
         return rep(res);
     } else {
         return res;
     }
   }
   
   
   const output = calculate(3, 6, (a, b) => a + b); 
   console.log (output);
   
   //const output = calculate(3, 6, (a, b) => a + b, res = res.toString); 
   //console.log (output);