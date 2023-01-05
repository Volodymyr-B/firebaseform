import * as yup from "yup";

const phoneRegExp = /(?=.*\+[0-9]{3}\s[0-9]{2}\s[0-9]{3}\s[0-9]{4,5}$)/;

export const validationSchema = yup.object({
  avatar: yup.string().required("this field is required"),
  birthday: yup
    .string()
    .required("this field is required")
    .min(10, "please enter valid birthday")
    .max(10, "please enter valid birthday"),
  email: yup
    .string()
    .required("this field is required")
    .email("please enter valid email")
    .max(30, "30 symbols maximum"),
  lastName: yup
    .string()
    .required("this field is required")
    .min(3, "3 symbol minimum")
    .max(12, "12 symbols maximum"),
  name: yup
    .string()
    .required("this field is required")
    .min(2, "2 symbol minimum")
    .max(12, "12 symbols maximum"),
  phone: yup
    .string()
    .matches(phoneRegExp, "phone number is not valid")
    .required("this field is required"),
});
