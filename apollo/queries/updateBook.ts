import { gql } from "@apollo/client";
import { Book } from "../__generated__/client/graphql";

export const UPDATE_BOOK = gql`
  mutation updateBook($id: Float!, $title: String, $author: String) {
    updateBook(id: $id, title: $title, author: $author) {
      id
      title
      author
    }
  }
`;

export type PutBookRes = {
  updateBook: Book;
};
