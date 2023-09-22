"use client";
import { useFormWithYup } from "@/_hooks/useFormWithYup";
import { InputSchemaType, inputSchema } from "@/_utils/inputSchema";
import { useMutation } from "@apollo/client";
import { PutBookRes, UPDATE_BOOK } from "../../../../apollo/queries/updateBook";
import { client } from "../../../../apollo/client";
import { BOOK_QUERY } from "../../../../apollo/queries/getBook";

const UpdateForm = ({ id }: { id: string }) => {
  const [updateBook] = useMutation<PutBookRes>(UPDATE_BOOK, {
    update: (_, { data: data }) => {
      client.writeQuery({
        query: BOOK_QUERY,
        data: {
          book: [
            {
              id: data?.updateBook.id,
              title: data?.updateBook.title,
              author: data?.updateBook.author,
            },
          ],
        },
      });
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useFormWithYup<InputSchemaType["book"]>(inputSchema.book);

  const onSubmit = async (data: InputSchemaType["book"]) => {
    if (isSubmitting) return;
    const res = await updateBook({ variables: { id: parseInt(id), ...data } });

    if (res.data) {
      console.log("success");
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
        更新
      </button>
    </form>
  );
};

export default UpdateForm;
