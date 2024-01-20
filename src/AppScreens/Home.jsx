import { Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ButtonAppBar from "../components/AppBar";
import FeedCard from "../components/FeedCard";
import db from "../data/db.json";
import { selectUserPosts } from "../store/selectors";
import colors from "../utils/colors";
import UsersDataService from "../services/users.services";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const userData = await UsersDataService.getUser();
      const updatedData = userData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(updatedData);
    } catch (error) {
      console.log(error.message);
    }
  }

  const posts = selectUserPosts(db, data);

  console.log(posts, "oooooo");

  const buttonstyle = {
    backgroundColor: colors.themeColor,
    color: "white",
    textTransform: "none",
  };

  return (
    <div>
      <ButtonAppBar />
      <Container maxWidth={"md"} sx={{ paddingY: 5 }}>
        <Button sx={buttonstyle} onClick={() => navigate("/write")}>
          Write
        </Button>
        {posts.map((i, e) => (
          <div key={e}>
            <FeedCard tweet={i} />
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Home;
