import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import colors from "../utils/colors";

export default function ButtonAppBar() {
  const navigate = useNavigate();

  function onButtonClick(name) {
    navigate(name);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", paddingLeft: 10, paddingRight: 20 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: colors.themeColor }}
          >
            TweetX
          </Typography>
          <Button
            sx={{
              color: colors.themeColor,
              textTransform: "none",
              "&.Mui-selected": { color: colors.themeColor },
            }}
            onClick={() => onButtonClick("/home")}
          >
            Feed
          </Button>
          <Button
            sx={{
              color: colors.themeColor,
              textTransform: "none",
              "&.Mui-selected": { color: colors.activeTabColor },
            }}
            onClick={() => onButtonClick("/users")}
          >
            Users
          </Button>
          <Button
            sx={{
              color: colors.themeColor,
              textTransform: "none",
              "&.Mui-selected": { color: colors.activeTabColor },
            }}
            onClick={() => onButtonClick("/profile")}
          >
            Profile
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
