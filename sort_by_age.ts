interface Person {
    name: string;
    age: number;
}

const ivan: Person = { name: "Іван", age: 25 };
const petro: Person = { name: "Петро", age: 30 };
const mariya: Person = { name: "Марія", age: 28 };

const arr: Person[] = [petro, ivan, mariya];

function sortByAge(arr: Person[]): Person[] {
    return arr.sort((a, b) => a.age - b.age);
}

console.log(sortByAge(arr));