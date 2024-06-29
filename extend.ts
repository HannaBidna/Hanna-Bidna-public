function extend(arr: any[]): Record<string, any> {
    const result: Record<string, any> = {};
    
    arr.forEach(item => {
        if (typeof item === 'object' && item != null && !Array.isArray(item)) {
            Object.keys(item).forEach(key => {
                if (!(key in result)) {
                    result[key] = item[key];
                }
            });
        }
    });
    
    return result;
}

// Example usage
console.log(extend([{ a: 1, b: 2 }, { c: 3 }]));
// { a: 1, b: 2, c: 3 }
console.log(extend([{ a: 1, b: 2 }, { c: 3 }, { d: 4 }]));
// { a: 1, b: 2, c: 3, d: 4 }
console.log(extend([{ a: 1, b: 2 }, null, { a: 3, c: 3 }]));
// { a: 1, b: 2, c: 3 }