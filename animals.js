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
