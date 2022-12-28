import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";

export const Header = () => {
  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav" position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }}>Application</Typography>
            <Link to="/">
              <Button sx={{ color: "white" }}>Main</Button>
            </Link>
            <Link to="/create-user">
              <Button sx={{ color: "white" }}>Create</Button>
            </Link>
            <Link to="/users-list">
              <Button sx={{ color: "white" }}>Users</Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
