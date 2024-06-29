// the main object

let animal = {
    species: "Mammals",
    makeSound: function() {
        console.log("Some animals sounds");
    }
};

//the dog object <-- animal

let dog = Object.create(animal, {
    breed: {
        value: "Some Dog"
    },
    barking: {
        value: function() {
            console.log("Woof - Woof!");
        }
    }
});


// Object bulldog <-- Dog <-- Animal

let bulldog = Object.create(dog, {
    breed: {
        value: "Bulldog"
    },
    growling: {
        value: function() {
            console.log("GRRRRR!!!");
        }
    }
});

// Callback the objects:
bulldog.makeSound();  // Inheritated from animal
bulldog.barking();    // Inheritated from від dog
bulldog.growling();   // Unique for bulldog

function Train(dog) {
    dog.character = "trained";  // Train the dog
    dog.sit = function() {
        console.log(`${dog.name} sits.`);
    };
    dog.shake = function() {
        console.log(`${dog.name} gives a paw.`);
    };
    return dog;  // Modyfied object
}

// Let adopt the dog))!
let myDog = { name: "Zosya", character: "terrible" };
Train(myDog);

// Let train my dog!
myDog.sit();
myDog.shake();


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
  