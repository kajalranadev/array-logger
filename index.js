const myArray = [1, 2, 3, 4, 5, "apple", "mango", "litchi"];

function logArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Function using a for...of loop

function logArrayElementsForOf(arr) {
  for (let element of arr) {
    console.log(element);
  }
}

// Calling the first function

logArrayElements(myArray);

// Calling the second function
logArrayElementsForOf(myArray);
