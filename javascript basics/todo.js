// create an array of five todos
// print the first and last items

const todos = ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4', 'Todo 5'];

console.log(todos.length);
console.log(todos[0]);
console.log(todos[4]);

// an alternative you can use:
console.log(`${todos[0]} - ${todos[4]}`);
// or this:
console.log(`${todos[0]} - ${todos[todos.length - 1]}`);

// add new item to todos array at the end
// add new item to todos array at first position

console.log(todos);
todos.push('New item');
console.log(todos);
todos.unshift('New item');
console.log(todos);
