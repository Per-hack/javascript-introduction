const notes = ['Note 1', 'Note 2', 'Note 3'];

console.log(notes[0]);
console.log(notes[1]);
console.log(notes[2]);

console.log(notes.length);
notes.push('My new note');
console.log(notes);

notes.splice(1,1, 'New item');
console.log(notes);

notes.unshift('First note');
console.log(notes);
notes.shift();
console.log(notes);

//const notes = 
[{
    title: 'My Next Trip',
    body: 'Vacation in Milan'
},{
    title: 'Habits to work on',
    body: 'Biting nails. Eating Healthier and Exercising'
},{
    title: 'Office Modification',
    body: 'Get a new seat'
}];

console.log(notes.length);
console.log(notes);

const index = notes.findIndex(function(note, index){
    return note.title === 'Habits to work on'
});

console.log(index);

