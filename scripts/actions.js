colorShelf.addBook(redBook);
colorShelf.addBook(greenBook);
emotionShelf.addBook(sadBook);
emotionShelf.addBook(happyBook);

library.addShelf(colorShelf);
library.addShelf(emotionShelf);

library.describeLibrary();

colorShelf.removeBook(greenBook);
emotionShelf.removeBook(sadBook);

library.describeLibrary();

library.removeShelf(colorShelf);
library.removeShelf(emotionShelf);

library.describeLibrary();