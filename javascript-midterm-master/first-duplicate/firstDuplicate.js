function firstDuplicate(array) {
    const indices = {};
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (indices[num] !== undefined) {
            return num;
        } else {
            indices[num] = i;
        }
    }
    return -1;
}

// Test cases
const array1 = [2, 3, 3, 1, 5, 2];
console.log(firstDuplicate(array1)); // Output: 3

const array2 = [2, 4, 3, 5, 1];
console.log(firstDuplicate(array2)); // Output: -1
