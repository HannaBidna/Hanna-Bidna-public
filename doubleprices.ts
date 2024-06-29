function getTopSalary(obj: Record<string, number>): string | null {
    if (Object.keys(obj).length === 0) {
        return null;
    }
    
    let MaxName: string | null = null;
    let MaxSalary: number = 0;
    
    for (let key in obj) {
        if (obj[key] > MaxSalary) {
            MaxSalary = obj[key];
            MaxName = key;
        }
    }
    
    return MaxName;
}

