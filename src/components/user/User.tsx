import { FC } from "react";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { IUser } from "../../interfaces/IUser";

interface UserProps {
  user: IUser;
}

export const User: FC<UserProps> = ({ user }) => {
  const { avatar, name, birthday, email, lastName, phone } = user;
  return (
    <Card sx={{ minHeight: 200 }}>
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
