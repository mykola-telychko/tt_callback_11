// An example of an asynchronous function that loads data from a database
function fetchDataFromDatabase(id, callback) {
    setTimeout(() => {
        // Simulating data retrieval from a database
        const data = { id, name: 'John' };
        // If data is successfully loaded, call the callback with the result
        callback(null, data);
    }, 3000);
}

// Calling the function to load data
let userId = 3;

fetchDataFromDatabase(userId, (error, result) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data from the database:', result);
    }
});
