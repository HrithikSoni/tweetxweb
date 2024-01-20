import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import UsersDataService from "../services/users.services";

function FollowingCard(props) {
  const [followingArjun, setFollowingArjun] = useState(true);
  const docId = "1A9wl59MNNpC68yMwQ0N";

  async function handleOnPress(userId) {
    try {
      await UsersDataService.updateFollowingListRemove(userId, docId);
    } catch (error) {
      console.log(error.message);
    }
    setFollowingArjun(false);
  }

  const circleStyle = {
    height: 60,
    width: 60,
    borderRadius: 30,
    border: "2px solid black",
    backgroundColor: "transparent",
  };

  const profileContainer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "3rem",
    paddingTop: 20,
    paddingBottom: 20,
  };

  const cardContainer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "2rem",
    paddingLeft: 5,
    paddingRight: 5,
  };

  const nameContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  };

  const buttonStyle = {
    color: "black",
    textTransform: "none",
    borderRadius: 2,
    paddingLeft: 2,
    paddingRight: 2,
  };
  return (
    <Card sx={cardContainer}>
      <div style={profileContainer}>
        <div style={circleStyle} />
        <div style={nameContainer}>
          <text style={{ fontSize: 20 }}>{props.name}</text>
          <text style={{ color: "grey" }}>Following 200</text>
        </div>
      </div>
      <Button
        onClick={() => handleOnPress(props.id)}
        sx={buttonStyle}
        disabled={followingArjun === false}
      >
        Following
      </Button>
    </Card>
  );
}

export default FollowingCard;
