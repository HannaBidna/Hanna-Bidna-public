function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomTime = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
        setTimeout(() => {
            const success = Math.random() > 0.5;  
            if (success) {
                resolve("Success");
            } else {
                reject(new Error("Error"));
            }
        }, randomTime);
    });
}

// checking
randomPromise()
    .then(result => console.log(result))  // success
    .catch(error => console.error(error.message));  //error