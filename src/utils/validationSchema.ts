import * as yup from "yup";

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
    .email()
    .max(30, "30 sumbols maximum"),
  lastName: yup
    .string()
    .required("this field is required")
    .min(3, "3 sumbol minimum")
    .max(12, "12 sumbols maximum"),
  name: yup
    .string()
    .required("this field is required")
    .min(2, "2 sumbol minimum")
    .max(12, "12 sumbols maximum"),
  phone: yup
    .string()
    .required("this field is required")
    .min(9, "please enter valid phone number")
    .max(9, "please enter valid phone number"),
});
