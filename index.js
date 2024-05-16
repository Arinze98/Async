// Helper function to create a delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await delay(1000); // Wait for 1 second (1000 milliseconds)
    }
}

// Example usage:
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);

// Track 2

// Simulated API request function
function fetchData() {
    // Simulating an asynchronous API call with a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: 'Mock API response' });
        }, 2000); // Simulating a 2-second delay
    });
}

async function awaitCall() {
    try {
        const response = await fetchData(); // Wait for API response
        console.log(response.data); // Log the data from the API response
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage:
awaitCall();

// Track 3

// Simulated API request function
function fetchData() {
    // Simulating an asynchronous API call with a delay
    return new Promise((resolve, reject) => {
        // Simulating an error condition
        const success = Math.random() < 0.5; // Randomly decide success or failure
        if (success) {
            setTimeout(() => {
                resolve({ data: 'Mock API response' });
            }, 2000); // Simulating a 2-second delay
        } else {
            reject(new Error('Failed to fetch data from the API'));
        }
    });
}

async function awaitCall() {
    try {
        const response = await fetchData(); // Wait for API response
        console.log(response.data); // Log the data from the API response
    } catch (error) {
        console.error('Error fetching data:', error.message); // Log a user-friendly error message
    }
}

// Example usage:
awaitCall();
