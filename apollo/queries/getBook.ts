import { gql } from "@apollo/client";
import { Book } from "../__generated__/client/graphql";

export const BOOK_QUERY = gql`
  query ($id: Float!) {
    book(id: $id) {
      id
      title
      author
    }
  }
`;

export type GetBookRes = {
  book: Book;
};
