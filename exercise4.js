let book = {
    title: "One Piece",
    author: "Oda",
    num_of_pages: 1098,
    description: function (){
        return `${this.title} is written by ${this.author} and it is a masterpiece currently having a total of ${this.num_of_pages} episodes.`
    }
};

console.log(book.description());