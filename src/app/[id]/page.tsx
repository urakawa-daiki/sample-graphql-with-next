import { NextPage } from "next";
import Book from "./components/Book";
import WithApollo from "../components/WithApollo";
import UpdateForm from "./components/UpdateForm";
import DeleteButton from "./components/DeleteButton";

type Props = {
  params: {
    id: string;
  };
};

const BookDetailPage: NextPage<Props> = ({ params }) => (
  <WithApollo>
    <h1>POST</h1>
    <Book id={params.id} />
    <hr />
    <UpdateForm id={params.id} />
    <DeleteButton id={params.id} />
  </WithApollo>
);

export default BookDetailPage;
