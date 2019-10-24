let myBook = { 
    title: 'Catalina',
    author: "R.L.Stine",
    pageCount: 400 
}

let myMovies = {
    title: 'Harry Potter',
    author: 'JK Rowling',
    pageCount: 600
}

console.log(`${myBook.title} by ${myBook.author} and it has ${myBook.pageCount} pages`);

let getSummary = function (book){
    return{
        summary: `${book.title} by ${book.author} and it has ${book.pageCount} pages`
    }
}

let bookSummary = getSummary(myBook);
console.log(bookSummary.summary);

let movieSummary = getSummary(myMovies);
console.log(movieSummary.summary);

// Peris lives in (country of Intrest)
let me = {
    name: 'Peris',
myLocation: 'Djibouti'
}

console.log (`${me.name} lives in ${me.myLocation}`);
