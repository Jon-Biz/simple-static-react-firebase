const name = "Alice";
const age = 30;
const height = 5.8;

// Using template literals (template strings) - ES6+
const formattedString = `My name is ${name}, I am ${age} years old, and my height is ${height.toFixed(2)} feet.`;
console.log(formattedString);

// Using String.prototype.concat()
const formattedString2 = "My name is ".concat(name, ", I am ", age, " years old, and my height is ", height.toFixed(2), " feet.");
console.log(formattedString2);

// Using string concatenation (+ operator)
const formattedString3 = "My name is " + name + ", I am " + age + " years old, and my height is " + height.toFixed(2) + " feet.";
console.log(formattedString3);
