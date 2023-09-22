import { gql } from "@apollo/client";

export const DELETE_BOOK = gql`
  mutation deleteBook($id: Float!) {
    deleteBook(id: $id) {
      id
    }
  }
`;

export type DeleteBookRes = {
  deleteBook: { id: number };
};
