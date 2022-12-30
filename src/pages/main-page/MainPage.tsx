import { capabilitiesList } from "../../constants/capabilities-list";
import { technologyList } from "../../constants/technology-list";

import { Box, Button, Paper, Typography } from "@mui/material";

export const MainPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignContent: "center",
        }}
      >
        <Typography
          variant="h4"
          color="#1976d2"
          sx={{ textAlign: "center", marginBottom: "15px" }}
        >
          Application capabilities & technology
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "start",
            flexWrap: "wrap",
            gap: "100px",
            "& > :not(style)": {
              width: 315,
            },
          }}
        >
          <Paper sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", paddingBottom: "10px" }}
            >
              Used technology
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {technologyList.map((tech) => (
                <a key={tech.title} href={tech.link} target="_blank">
                  <Button>{tech.title}</Button>
                </a>
              ))}
              <Typography variant="h6">and other</Typography>
            </Box>
          </Paper>
          <Paper sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", paddingBottom: "10px" }}
            >
              Application capabilities
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {capabilitiesList.map((capability) => (
                <Typography key={capability.title} sx={{ color: "#1976d2" }}>
                  {capability.title}
                </Typography>
              ))}
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};
