function makePuppy(mother, father) {
    let {name: motherName, mothercolor, ...restOfMother} = mother;
    let {name: fatherName, fathercolor, ...restOfFather} = father;
  
    //Naming of the puppy = half name of mom + half name of dad
    let puppyName = motherName.slice(0, Math.floor(motherName.length / 2)) +
                    fatherName.slice(Math.floor(fatherName.length / 2));
    // Color of the puppy
    let puppycolor = mother.color + ' - ' + father.color;                
  
    //Making the new object
    let puppy = {
        ...restOfMother,
        ...restOfFather,
        name: puppyName,
        color: puppycolor
    };
  
    return puppy;
  }
  
  // Parent objects
  let mother = { name: "Alfa", color: "black", ears: "fold" };
  let father = { name: "Rex", color: "white", tail: "long" };
  
  // Puppy
  let puppy = makePuppy(mother, father);
  console.log(puppy);
  