"use client";
import { useQuery } from "@apollo/client";
import { BOOK_QUERY, GetBookRes } from "../../../../apollo/queries/getBook";

type Props = {
  id: string;
};

const Book = ({ id }: Props) => {
  const { loading, error, data } = useQuery<GetBookRes>(BOOK_QUERY, {
    variables: { id: parseInt(id) },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  if (!data?.book) return null;

  return (
    <div>
      <h2>{data?.book.title}</h2>
      <p>{data?.book.author}</p>
    </div>
  );
};

export default Book;
