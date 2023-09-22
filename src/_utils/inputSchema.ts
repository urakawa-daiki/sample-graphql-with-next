import * as yup from "yup";
import { validText } from "./validText";

export type InputSchemaType = {
  book: { title: string; author: string };
};

export const inputSchema = {
  book: yup.object().shape({
    title: validText.string,
    author: validText.string,
  }),
};
