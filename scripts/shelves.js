function Shelf (name) {
	this.name = name;
	this.books = [];
};

Shelf.prototype.addBook = function (book) {
	this.books.push(book);
};

var colorShelf = new Shelf ('colorShelf');
var emotionShelf = new Shelf ('emotionShelf');

Shelf.prototype.describeShelf = function () {
	console.log(this.name + ', which contains:'); 
			for (i=0; i < this.books.length; i++) {
				console.log(this.books[i].title + ' written by ' + this.books[i].author);
			};
		};

Shelf.prototype.removeBook = function (book) {
	var bookIndex = this.books.indexOf(book);
	this.books.splice(bookIndex, 1);
};