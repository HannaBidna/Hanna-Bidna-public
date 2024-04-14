function calculateTip(amount, rating) {
    let newrate = rating.toUpperCase();
    
    if (newrate  === 'EXCELLENT'){
      return Math.ceil(0.2 * amount);//20%
    }
      else if (newrate === 'GREAT'){
      return Math.ceil(0.15 * amount);//15%
    }
      else if (newrate  ==='GOOD'){
      return Math.ceil(0.1 * amount);//10%
    }
      else if (newrate  === 'POOR'){
      return Math.ceil(0.05 * amount);//0%
    }
      else if (newrate  === 'TERRIBLE'){
      return 0;
    } else{
      return 'Rating not recognised';
    }  
  }
//Example:
  let result = calculateTip(200, 'good');
  console.log(result);