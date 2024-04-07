function printXmasTree(height) {
    let tree = ''; 
    for (let i = 0; i < height; i += 1) {
        let stars = '*'.repeat(2 * i + 1);
        let space = ' '.repeat(height - i - 1);
        tree += space + stars + space + '\n';
    }
    return tree;
}
// Example usage
console.log(printXmasTree(8));