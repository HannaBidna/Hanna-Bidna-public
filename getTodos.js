function getTodos(ids) {
    const baseUrl = 'https://jsonplaceholder.typicode.com/todos/';

    const fetchPromises = ids.map(id => {
        return fetch(baseUrl + id)
            .then(response => {
                if (!response.ok) { 
                    throw new Error(`Failed to fetch todo with ID ${id}`);
                }
                return response.json();  
            });
    });

    
    return Promise.all(fetchPromises)
        .then(todos => {
            console.log('All todos fetched successfully:', todos);
            return todos; 
        })
        .catch(error => {
            console.error('Error fetching todos:', error);
            throw error;  
        });
}

// Example:
getTodos([1, 3, 50, 4])
    .then(todos => console.log(todos))
    .catch(error => console.error(error));