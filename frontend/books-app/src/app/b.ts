import { Books } from "./store/book/books.state";

const allBooks: Books = { "42": { isbn: '42', title: '42', author: '42', category: 'tech', available: true } };

const bestseller = allBooks['42'];
console.log({ bestseller });

const ids = Object.keys(allBooks);
console.log({ ids });

const bookArray = Object.values(allBooks);
console.log({ ids });

