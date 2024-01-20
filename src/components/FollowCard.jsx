import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import colors from "../utils/colors";
import UsersDataService from "../services/users.services";

function FollowCard(props) {
  const [followingArjun, setFollowingArjun] = useState(false);
  const docId = "1A9wl59MNNpC68yMwQ0N";

  async function handleOnPress(userId) {
    try {
      await UsersDataService.updateFollowingList(userId, docId);
    } catch (error) {
      console.log(error.message);
    }
    setFollowingArjun(true);
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
    backgroundColor: colors.themeColor,
    color: "white",
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
        disabled={followingArjun === true}
      >
        Follow
      </Button>
    </Card>
  );
}

export default FollowCard;
