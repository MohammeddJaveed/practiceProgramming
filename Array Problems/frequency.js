// Find the frequency of each element in an array.

//Time Complexity - O(n)
// space Complexity - O(k) ,k is number of unique elements in array


const arr = [1, 2, 2, 3, 4, 3, 3, 5];

function findFrequencies(array) {
    const frequencies = {};

    for (let i = 0; i< arr.length; i++) {
        if (frequencies[array[i]]) {
            frequencies[array[i]]++; // Increment count if the number already exists
        } else {
            frequencies[array[i]] = 1; // Initialize count to 1 if it's the first occurrence
        }
    }

    return frequencies;
}

console.log(findFrequencies(arr));
