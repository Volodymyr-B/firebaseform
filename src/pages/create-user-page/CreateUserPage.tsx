import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../../utils/validationSchema";
import { createUser } from "../../service/create-user";

import { IUser } from "../../interfaces/IUser";

export const CreateUserPage = () => {
  const { register, handleSubmit, formState, reset } = useForm<IUser>({
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
      reset();
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
        type="number"
        placeholder="+38(0xx) xx-xx-xxx"
        helperText={formState.errors.phone?.message || " "}
        {...register("phone")}
      />
      <TextField
        type="date"
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
