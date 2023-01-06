import { FC } from "react";
import { phoneView } from "../../utils/phone-view-regex";
import {
  Avatar,
  Box,
  Button,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import { IUser } from "../../interfaces/IUser";

interface UserProps {
  user: IUser;
}

export const User: FC<UserProps> = ({ user }) => {
  const { avatar, name, birthday, email, lastName, phone } = user;
  const { callPhone, viewPhone } = phoneView(phone);
  return (
    <Paper elevation={4} sx={{ minHeight: 200, width: 310 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "10px",
          }}
        >
          <Avatar src={avatar} alt={"avatar"} sx={{ width: 70, height: 70 }} />
          <Box>
            <Typography variant="h6" textTransform={"capitalize"}>
              {name}
            </Typography>
            <Typography variant="h5" textTransform={"capitalize"}>
              {lastName}
            </Typography>
            <Typography variant="body1">{birthday}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Button>
            <a href={`mailto:${email}`}>{email}</a>
          </Button>
          <Button>
            <a href={`tel:${callPhone}`}>{viewPhone}</a>
          </Button>
        </Box>
      </CardContent>
    </Paper>
  );
};
