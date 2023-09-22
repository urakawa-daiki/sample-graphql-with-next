"use client";

import { useQuery } from "@apollo/client";
import { ALL_BOOKS, GetBooksRes } from "../../../apollo/queries/getBooks";
import AddForm from "./AddForm";

const BookList = () => {
  const { data, loading, error } = useQuery<GetBooksRes>(ALL_BOOKS);

  if (loading) {
    return <div>読み込み中</div>;
  }
  return (
    <div>
      <h1>list</h1>
      {error && <div>{error.message}</div>}
      <ul>
        {data &&
          data.books.map((v, i) => (
            <ul key={i}>
              <li>{v.id}</li>
              <li>{v.title}</li>
              <li>{v.author}</li>
            </ul>
          ))}
      </ul>
      <AddForm books={data?.books ?? []} />
    </div>
  );
};

export default BookList;
