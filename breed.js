class Dog {
    constructor(name){
    this.name = name;
    }
  }
  class Shepherd extends Dog{
    constructor(name){
        super(name);
        this.breed = 'Shepherd';
    }
  }
  class Haski extends Dog{
    constructor(name){
        super(name);
        this.breed = 'Haski';
    }
  }
  
  class Corgi extends Dog{
    constructor(name){
        super(name);
        this.breed = 'Corgi';
    }
  }
  
  function checkDogBreed(dogObject, Breed){
    return dogObject instanceof Breed;
  }
  const myDog = new Haski ('Bella');
  console.log(checkDogBreed(myDog, Haski)); // поверне true
  console.log(checkDogBreed(myDog, Corgi)); // поверне false