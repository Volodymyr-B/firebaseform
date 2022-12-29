import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUser } from "../../interfaces/IUser";
import { createUser } from "../../service/create-user";

const validationSchema = yup.object({
  avatar: yup.string(),
  birthday: yup.string().required().min(8).max(8),
  email: yup.string().required().email(),
  lastName: yup.string().required().min(3).max(12),
  name: yup.string().required().min(2).max(12),
  phone: yup.string().required().min(11).max(11),
});

export const CreateUserPage = () => {
  const { register, handleSubmit, formState } = useForm<IUser>({
    defaultValues: {
      avatar: "https://picsum.photos/200",
      birthday: "",
      email: "",
      lastName: "",
      name: "",
      phone: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (values: IUser) => {
    try {
      await createUser(values);
    } catch (e) {
      console.log("error for update");
    }
  };
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "320px",
        width: "100%",
        gap: "10px",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label="Name"
        helperText={formState.errors.name?.message || " "}
        {...register("name")}
      />
      <TextField
        label="Last name"
        helperText={formState.errors.lastName?.message || " "}
        {...register("lastName")}
      />
      <TextField
        label="Email"
        helperText={formState.errors.email?.message || " "}
        {...register("email")}
      />
      <TextField
        label="Phone"
        placeholder="+38(0xx) xx-xx-xxx"
        helperText={formState.errors.email?.message || " "}
        {...register("phone")}
      />
      <TextField
        label="Birthday"
        helperText={formState.errors.birthday?.message || " "}
        {...register("birthday")}
      />
      <Button
        variant="contained"
        type="submit"
        disabled={formState.isSubmitting}
      >
        Create
      </Button>
    </Box>
  );
};
