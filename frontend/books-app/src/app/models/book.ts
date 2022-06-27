import { Category } from "./category";

export interface Book {
  isbn: string;
  title: string;
  author: string;
  category: Category;
  available: boolean;
}
