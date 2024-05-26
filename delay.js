function delay(s) {
    return new Promise(resolve => {
        setTimeout(resolve, s * 1000); 
    });
}

// Example:
async function performDelayedTask() {
    console.log("Task starts now.");
    
    await delay(5);  // Затримка на 5 секунд
    
    console.log("Task executes after a 5 second delay.");
}

performDelayedTask();