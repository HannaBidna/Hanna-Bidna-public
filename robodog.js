const crypto = require('crypto'); // Add this line to import the crypto module

class RoboDogBuilder {
    constructor(name) {
        this.name = name;
        this.Intelligence = 0;
        this.Aggression = 0;
        this.Endurance = 0;
        this.Strength = 0;
        this.Commands = {};
        this.totalPoints = 30;
    }

    setIntelligence(value) {
        this.Intelligence = value;
        return this;
    }

    setAggression(value) {
        this.Aggression = value;
        return this;
    }

    setEndurance(value) {
        this.Endurance = value;
        return this;
    }

    setStrength(value) {
        this.Strength = value;
        return this;
    }

    addCommand(CommandName, CommandFunction) {
        this.Commands[CommandName] = CommandFunction;
        return this;
    }

    validate() {
        const total = this.Aggression + this.Strength + this.Endurance + this.Intelligence;
        if (total !== this.totalPoints) {
            throw new Error('All points should be equal to 30!');
        }
        if ([this.Aggression, this.Strength, this.Endurance, this.Intelligence].some(value => value < 0 || value > 10)) {
            throw new Error('Points should be from 0 to 10!');
        }

        this.UUID = crypto.randomUUID();
        return this;
    }

    attackEnemy() {
        let AttackResult = '';
        if ((this.Aggression >= 7 && this.Endurance <= 5) || (this.Aggression >= 7 && this.Intelligence <= 7)) {
            if (this.Strength >= 7) {
                AttackResult = 'Your dog attacked successfully! But you should be careful!';
            } else {
                AttackResult = 'Your dog scares people! Keep it on a leash!';
            }
        } else if (this.Intelligence <= 5 && this.Aggression <= 5) {
            AttackResult = 'People scare your dog! Keep it in your arms!';
        } else {
            AttackResult = 'Your dog is unpredictable!';
        }
        return AttackResult;
    }

    build() {
        if (!this.UUID) {
            throw new Error('Validation error');
        }
        const dog = {
            name: this.name,
            Intelligence: this.Intelligence,
            Strength: this.Strength,
            Endurance: this.Endurance,
            Aggression: this.Aggression,
            UUID: this.UUID,
            attackEnemy: this.attackEnemy.bind(this)
        };
        
        for (let [commandName, commandFunction] of Object.entries(this.Commands)) {
            dog[commandName] = commandFunction;
        }

        return dog;
    }
}

// Small dog
const chihua = new RoboDogBuilder('Pupsik')
  .setIntelligence(5)
  .setAggression(5)
  .setStrength(10)
  .setEndurance(10)
  .addCommand('bark', () => console.log('Pupsik is barking'))
  .validate()
  .build();


chihua.bark();
console.log(chihua.attackEnemy());

// Big dog
const stuff = new RoboDogBuilder('Buddy')
  .setIntelligence(8)
  .setAggression(10)
  .setStrength(7)
  .setEndurance(5)
  .addCommand('sit', () => console.log('Buddy is sitting'))
  .validate()
  .build();


stuff.sit();
console.log(stuff.attackEnemy());