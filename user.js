class User{
    #firstName;
    #lastName;
    
    constructor (firstName, lastName){
        this.#firstName = firstName;
        this.#lastName = lastName;
    }
    get fullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }
    set fullName(value){
        let parts = value.split(' ');
        this.#firstName = parts[0];
        this.#lastName = parts[1];
    }
    get firstName() {
      return this.#firstName;
    }
    set firstName(name) {
      this.#firstName = name;
    }
    get lastName() {
      return this.#lastName;
    }
    set lastName(name) {
      this.#lastName = name;
    }
  }
  let user = new User ('Hanna', 'Bidna');
  console.log(user.fullName);
  
  user.firstName = 'Anna';
  console.log(user.fullName);
  
  user.lastName = 'Illiashenko';
  console.log(user.fullName);