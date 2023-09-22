import { useFormWithYup } from "@/_hooks/useFormWithYup";
import { InputSchemaType, inputSchema } from "@/_utils/inputSchema";
import { useMutation } from "@apollo/client";
import { ADD_BOOK, PostBookRes } from "../../../apollo/queries/addBook";
import { Book } from "../../../apollo/__generated__/client/graphql";
import { client } from "../../../apollo/client";
import { ALL_BOOKS } from "../../../apollo/queries/getBooks";

const AddForm = ({ books }: { books: Book[] }) => {
  const [addBook] = useMutation<PostBookRes>(ADD_BOOK, {
    update: (_, { data: data }) => {
      client.writeQuery({
        query: ALL_BOOKS,
        data: {
          books: [
            ...books,
            {
              id: data?.addBook.id,
              title: data?.addBook.title,
              author: data?.addBook.author,
            },
          ],
        },
      });
    },

    // TODO できればこっちの書き方で書きたい
    // update: (cache, { data: data }) => {
    //   cache.modify({
    //     fields: {
    //       Book: (existingBooks = []) => {
    //         const newBookRef = cache.writeFragment({
    //           data: data?.book,
    //           fragment: gql`
    //             fragment NewBook on Book {
    //               id
    //               title
    //               author
    //             }
    //           `,
    //         });
    //         return [...existingBooks, newBookRef];
    //       },
    //     },
    //   });
    // },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useFormWithYup<InputSchemaType["book"]>(inputSchema.book);

  const onSubmit = async (data: InputSchemaType["book"]) => {
    if (isSubmitting) return;
    const res = await addBook({ variables: data });
    if (res.data) {
      reset();
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
      <input type="text" {...register("title")} />
      <input type="text" {...register("author")} />
      <button onClick={handleSubmit(onSubmit)} type="submit">
        追加
      </button>
    </form>
  );
};

export default AddForm;
