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
