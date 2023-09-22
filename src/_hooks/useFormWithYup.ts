import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export function useFormWithYup<TFieldNames extends { [x: string]: any }>(
  schema: yup.ObjectSchema<any, any, any>,
  defaultValues?: any
) {
  return useForm<TFieldNames>({ resolver: yupResolver(schema), defaultValues });
}
