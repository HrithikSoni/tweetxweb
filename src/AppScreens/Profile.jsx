import React, { useState } from "react";
import ButtonAppBar from "../components/AppBar";
import { Container } from "@mui/material";
import FeedCard from "../components/FeedCard";
import TopTab from "../components/TopTab";
import PostsPage from "./PostsPage";
import FollowersPage from "./FollowersPage";
import FollowingPage from "./FollowingPage";

function Profile() {
  const topTabData = {
    postsPage: <PostsPage />,
    followersPage: <FollowersPage />,
    followingPage: <FollowingPage />,
  };

  const circleStyle = {
    height: 100,
    width: 100,
    borderRadius: 50,
    border: "2px solid black",
    backgroundColor: "transparent",
  };

  const profileContainer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "7rem",
    marginLeft: "6rem",
  };

  const lineStyle = {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginTop: "5rem",
    marginLeft: 50,
  };

  const postNumberContainer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  };

  return (
    <div>
      <ButtonAppBar />
      <Container maxWidth={"md"} sx={{ paddingY: 5 }}>
        <div style={profileContainer}>
          <div style={circleStyle} />
          <div>
            <h2>Arjun Reddy</h2>
            <div style={postNumberContainer}>
              <text>Posts: 511</text>
              <text>Followers: 511</text>
              <text>Following: 511</text>
            </div>
          </div>
        </div>
        <div style={lineStyle} />
        <div
          style={{
            paddingLeft: "5rem",
            paddingTop: "1rem",
          }}
        >
          <TopTab {...topTabData} />
        </div>
      </Container>
    </div>
  );
}

export default Profile;
