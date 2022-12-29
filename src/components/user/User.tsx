import { FC } from "react";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";

interface UserProps {
  user: {
    avatar: string;
    birthday: string;
    email: string;
    lastName: string;
    name: string;
    phone: string;
  };
}

export const User: FC<UserProps> = ({ user }) => {
  const { avatar, name, birthday, email, lastName, phone } = user;
  return (
    <Card sx={{ maxWidth: 310 }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Avatar src={avatar} alt={avatar} />
          <Box>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="h5">{lastName}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="body1">{birthday}</Typography>
          <Typography variant="h6">{email}</Typography>
          <Typography variant="h6">{phone}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
