async function getTodos(ids) {
    const baseUrl = 'https://jsonplaceholder.typicode.com/todos/';

    
    const promises = ids.map(id => fetch(baseUrl + id).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(`Failed to fetch todo with ID ${id}`);
    }));

   
    const results = await Promise.allSettled(promises);

    
    const todos = results.map(result => {
        if (result.status === 'fulfilled') {
            return result.value;
        }
        return null;
    });

    
    if (todos.every(todo => todo === null)) {
        return null;
    }

    return todos;
}

// Example:
getTodos([1, 3, 50, 4, 1001]) // 1001 - припустимо, що такий ID не існує
    .then(todos => console.log(todos))
    .catch(error => console.error(error));