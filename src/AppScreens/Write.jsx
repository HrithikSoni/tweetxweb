import { Alert, Button, Container } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

import ButtonAppBar from "../components/AppBar";
import UsersDataService from "../services/users.services";
import colors from "../utils/colors";

function Write() {
  const [post, setPost] = useState("");
  const [message, setMessage] = useState({ err: false, msg: "" });

  const docId = "1A9wl59MNNpC68yMwQ0N";

  async function handleOnPress() {
    if (post.length === 0) {
      setMessage({ err: true, msg: "Please Write the Post!" });
    } else {
      if (post.length > 100) {
        setMessage({
          err: true,
          msg: "Exceeded 100 words. Please limit your post to 100 words.",
        });
      } else {
        await UsersDataService.updatePosts(post, docId);
        setMessage({ err: false, msg: "Post successful!" });
      }
    }
    setPost("");
  }

  return (
    <div>
      {message?.msg && (
        <Alert
          severity={message?.err ? "error" : "success"}
          onClose={() => setMessage("")}
        >
          {message.msg}
        </Alert>
      )}
      <ButtonAppBar />
      <Container maxWidth={"md"}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "100%",
              maxWidth: "600px",
            },
            paddingY: 10,
            marginLeft: 10,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Write your post here!"
            sx={{ width: "100%" }}
            fullWidth
            multiline
            maxRows={2}
            onChange={(e) => setPost(e.target.value)}
            value={post}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: 100 }} />
            <Button
              sx={{
                backgroundColor: colors.themeColor,
                color: "white",
                borderRadius: 2,
                paddingLeft: 2,
                paddingRight: 2,
              }}
              onClick={handleOnPress}
            >
              Post
            </Button>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default Write;
