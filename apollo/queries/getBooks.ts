import { gql } from "@apollo/client";
import { Book } from "../__generated__/client/graphql";

export const ALL_BOOKS = gql`
  query ALL_BOOKS {
    books {
      id
      title
      author
    }
  }
`;

export type GetBooksRes = {
  books: Book[];
};
