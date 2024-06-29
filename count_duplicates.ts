function countDuplicates(arr: number[]): Record<number, number> {
    const count: Record<number, number> = {};
    
    arr.forEach(element => {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    });
    
    return count;
}

const arr: number[] = [2, 2, 2, 2, 3, 3, 7, 4, 4];

console.log(countDuplicates(arr));
// { '2': 4, '3': 2, '4': 2, '7': 1 }