const todos = ['Order dog food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise' ];

todos.forEach(function(todo, index){
    const num = index + 1;
    console.log(`${num}. ${todo}`);
});

// push three new objects with keys (title, body and city).

todos.push( {title: 'Read', Body: 'Sanfransisco', City: 'Nairobi'} );
console.log(todos);


