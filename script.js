// Step 1: Create an array of names
var names = ["John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Step 2: Loop through each name
for (var i = 0; i < names.length; i++) {
    // Step 3: Get the first letter of each name
    var firstLetter = names[i].charAt(0).toLowerCase();
    
    // Step 4: Check if it starts with 'j'
    if (firstLetter === 'j') {
        console.log("Goodbye " + names[i]);
    } else {
        console.log("Hello " + names[i]);
    }
}
