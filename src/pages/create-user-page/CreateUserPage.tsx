import { useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../../utils/validationSchema";
import { createUser } from "../../service/create-user";

import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { IUser } from "../../interfaces/IUser";

export const CreateUserPage = () => {
  const [successForm, setsuccessForm] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  const { register, control, handleSubmit, formState, reset } = useForm<IUser>({
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
      setsuccessForm(true);
      reset();
    } catch (e) {
      setErrorForm(true);
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
      <Typography
        variant="h4"
        color="#1976d2"
        sx={{ textAlign: "center", marginBottom: "15px" }}
      >
        Fill the form
      </Typography>
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
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <MuiTelInput
            {...register("phone")}
            {...field}
            label="Phone"
            defaultCountry="UA"
            disableDropdown
            forceCallingCode
            helperText={formState.errors.phone?.message || " "}
          />
        )}
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
      <Snackbar
        open={successForm}
        autoHideDuration={4000}
        onClose={() => setsuccessForm(false)}
      >
        <Alert severity="success" sx={{ width: "400px" }}>
          Success !
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorForm}
        autoHideDuration={4000}
        onClose={() => setErrorForm(false)}
      >
        <Alert severity="error" sx={{ width: "400px" }}>
          Error, please try again later!
        </Alert>
      </Snackbar>
    </Box>
  );
};
