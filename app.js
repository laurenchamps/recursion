// FIBONACCI

function fibs(n) {
    const arr = [0, 1];

    // If n is less than one or not a number, exit
    if (n < 1 || !isFinite(n)) return 'Invalid input';

    // If n is one, result is [0]
    if (n == 1) return [0];

    // If n is 2, result is [0, 1]
    if (n == 2) return arr;

    // Start with [0, 1] and on each iteration until array length is n, sum the last two values and add to the end of the array.
    for(let i = 0; i < (n - 2); i++) {
        arr.push(arr[i] + arr[i + 1]);
    }
    return arr;
}

function fibsRec(n) {
    // If number is less than one or not a number, exit
    if (n < 1 || !isFinite(n)) return 'Invalid input';
    
    // Base cases
    if (n == 1) return [0];

    if (n == 2) return [0, 1]
    
    // Get the fibonacci array of n - 1
    arr = fibsRec(n-1);

    // Add the last two values in the n-1 array together and push new value onto end of array
    const sum = arr[arr.length-1] + arr[arr.length-2];
    arr.push(sum);
    return arr;
}

// MERGE SORT

function merge(arr1, arr2) {
    let sorted = [];

    // Compare the first element in each array. Add the lesser number to the sorted array and remove it from the initial array. Repeat until one of the arrays is empty.
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
        else sorted.push(arr2.shift());
    }

    // Return a new array consisting of the sorted array combined with elements remaining in either array.
    return [...sorted, ...arr1.slice(), ...arr2.slice()];
}

function mergeSort(arr) {
    // if array length <= 1, it's already sorted
    if (arr.length <= 1) return arr;

    // divide the array in half
    // find middle
    let mid = Math.floor(arr.length / 2);

    // divide into 2 new arrays
    let left = arr.slice(0, mid);
    let right = arr.slice(mid); 

    // sort the left half
    mergeSort(left)

    // sort the right half
    mergeSort(right)

    // merge the sorted halves
    return merge(mergeSort(left), mergeSort(right));
}

// Fibs() tests
console.log('************ ITERATIVE FIBONACCI ARRAY *************');
console.log(`Fib('cat'): ${fibs('cat')}`);
console.log(`Fibs(0): ${fibs(0)}`);
console.log(`Fibs(1): ${fibs(1)}`);
console.log(`Fibs(2): ${fibs(2)}`);
console.log(`Fibs(4): ${fibs(4)}`);
console.log(`Fibs(8): ${fibs(8)}`);
console.log(`Fibs(20): ${fibs(20)}`);

// FibsRec tests
console.log('************ RECURSIVE FIBONACCI ARRAY *************');
console.log(`FibsRec('cat'): ${fibsRec('cat')}`);
console.log(`FibsRec(0): ${fibsRec(0)}`);
console.log(`FibsRec(1): ${fibsRec(1)}`);
console.log(`FibsRec(2): ${fibsRec(2)}`);
console.log(`FibsRec(4): ${fibsRec(4)}`);
console.log(`FibsRec(8): ${fibsRec(8)}`);
console.log(`FibsRec(20): ${fibsRec(20)}`);

// Merge sort tests
console.log('************ MERGE SORT *************');
console.log(mergeSort([4, 8, 0, 3, 67, 29, -4]));
console.log(mergeSort([100, -39, 45, 9, 2, 7, 9, 3]));
console.log(mergeSort([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(mergeSort([8, 3, 0, 9, 5, 2, 6, 8, 7]));

