function Library () {
	this.shelves = [];
};

var library = new Library();

Library.prototype.addShelf = function(shelf) {
	this.shelves.push(shelf);
};

Library.prototype.describeLibrary = function() {
	if (this.shelves.length > 0) {
	console.log ('This library contains:');
	for (var i=0; i < this.shelves.length; i++) {
		this.shelves[i].describeShelf();
	}; 
} else {
		console.log('This library is empty. What a pity! Amazon ruins everything.');
	};
};

Library.prototype.removeShelf = function(shelf) {
	var shelfIndex = this.shelves.indexOf(shelf);
	this.shelves.splice(shelfIndex, 1);
};



