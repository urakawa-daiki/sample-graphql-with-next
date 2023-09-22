import * as yup from "yup";

export const validText = {
  integerNumber: yup
    .number()
    .typeError("数字を入力してください")
    .integer("整数を入力してください"),
  // 小数点許容
  decimal: yup.number(),
  nullableNumber: yup
    .number()
    .nullable()
    .transform((_, originalValue) => {
      // 全角数字を半角数字に変換
      const formatHankakuValue = String(originalValue).replace(
        /[０-９]/g,
        (s) => {
          return String.fromCharCode(s.charCodeAt(0) - 65248);
        }
      );
      // 未入力はnullに変換
      return String(originalValue).trim() === ""
        ? null
        : Number(formatHankakuValue);
    }),
  email: yup.string().email("正しいメールアドレスを入力して下さい"),
  password: yup
    .string()
    .min(8, "8文字以上のパスワードを入力してください")
    .max(30, "30文字以下のパスワードを入力してください")
    .matches(/^[a-zA-Z0-9.?/-]{8,30}$/, "パスワードの形式が正しくありません。")
    .required("パスワードを入力してください"),
  string: yup.string(),
  mobilePhoneNumber: yup
    .string()
    .matches(
      /^0[5789]0(-\d{4}-\d{4}|\d{8})$/,
      "正しい電話番号を記入してください"
    ),
  date: yup.date(),
};
