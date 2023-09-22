import { gql } from "@apollo/client";
import { Book } from "../__generated__/client/graphql";

export const ADD_BOOK = gql`
  mutation addBook($title: String, $author: String) {
    # 返り値。ここはschemaのMutationのaddBookと同じタイトルにする必要がある
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;

export type PostBookRes = { addBook: Book };
