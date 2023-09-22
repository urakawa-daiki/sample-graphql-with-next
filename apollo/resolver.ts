import { Resolvers } from "@apollo/client";

const books = [
  {
    id: 1,
    title: "吾輩は猫である",
    author: "夏目漱石",
  },
  {
    id: 2,
    title: "走れメロス",
    author: "太宰治",
  },
];

export const resolvers: Resolvers = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find((v) => v.id === id),
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const book = {
        id: books.length + 1,
        title,
        author,
      };
      books.push(book);
      return book;
    },
    updateBook: (_, { id, title, author }) => {
      const book = books.find((v) => v.id === id);
      if (!book) {
        throw new Error("Book not found");
      }
      book.title = title;
      book.author = author;
      return book;
    },
    deleteBook: (_, { id }) => {
      const book = books.find((v) => v.id === id);
      if (!book) {
        throw new Error("Book not found");
      }
      books.splice(books.indexOf(book), 1);
      return;
    },
  },
};
