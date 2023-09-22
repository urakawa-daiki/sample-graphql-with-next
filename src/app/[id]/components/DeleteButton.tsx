"use client";
import { useMutation } from "@apollo/client";
import { client } from "../../../../apollo/client";
import {
  DELETE_BOOK,
  DeleteBookRes,
} from "../../../../apollo/queries/deleteBook";
import { ALL_BOOKS, GetBooksRes } from "../../../../apollo/queries/getBooks";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const [deleteBook] = useMutation<DeleteBookRes>(DELETE_BOOK, {
    update: (_, { data: data }) => {
      const booksData = client.readQuery<GetBooksRes>({ query: ALL_BOOKS });
      client.writeQuery({
        query: ALL_BOOKS,
        data: {
          books: booksData?.books.filter((v) => v.id !== data?.deleteBook.id),
        },
      });
    },
  });

  const onClickDelete = async () => {
    const res = await deleteBook({ variables: { id: parseInt(id) } });

    console.log(res);

    if (res.data) {
      console.log("success");
      router.replace("/");
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",
        width: "200px",
      }}
    >
      <button onClick={() => onClickDelete} type="submit">
        削除
      </button>
    </form>
  );
};

export default DeleteButton;
