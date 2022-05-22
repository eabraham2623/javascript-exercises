const getTheTitles = function(books) {
    let bookTitles = [];
    books.forEach(function(book){
        bookTitles.push(book.title);
    });
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
