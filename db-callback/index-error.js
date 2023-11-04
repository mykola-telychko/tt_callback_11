// An example of an asynchronous function with a new Error object for error handling
function fetchDataFromExternalSource(url, callback) {
    setTimeout(() => {
        const error = true; // Change to true to simulate an error
        if (error) {
            callback(new Error('Error loading data'), null);
        } else {
            const data = { id: 2, name: 'Alice' };
            callback(null, data);
        }
    }, 2000);
}

// Calling the function to load data from an external source with an error
fetchDataFromExternalSource('http://example.com/api/data', (error, result) => {
    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('Data from an external source:', result);
    }
});
