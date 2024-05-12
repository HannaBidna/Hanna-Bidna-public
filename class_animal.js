
class Animal {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    getinfo(){ 
        console.log (`The animal is ${this.name} and the age is ${this.age}`);
    }
    makeSound() {
        console.log (`Some animals sounds`);
    }
  }
  
  class Dog extends Animal{
    constructor (name, age, breed){
      super(name, age);
      this.breed = breed;
    }
    barking() {
      console.log("Woof - Woof!");
    }
  }
  
  class Bulldog extends Dog{
    constructor (name, age, breed, color){
      super(name, age, breed);
      this.color = color;
      }
    growling(){
      console.log("GRRRRR!!!");
    }  
    }
  
  const MyAnimal = new Bulldog ('Grey', 7, 'bulldog', 'grey');
  console.log(MyAnimal.getinfo());
  console.log(MyAnimal.barking());
  console.log(MyAnimal.color);
  