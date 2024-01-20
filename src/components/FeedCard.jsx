import { Card } from "@mui/material";
import React from "react";
import colors from "../utils/colors";

function FeedCard(props) {
  const circleStyle = {
    height: 50,
    width: 50,
    borderRadius: 25,
    border: "2px solid black",
    backgroundColor: "transparent",
  };

  const profileInnerContainer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  };

  const profileContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 15,
    paddingRight: 20,
    paddingLeft: 20,
  };

  const halfCircle = {
    width: 30,
    height: 50,
    backgroundColor: colors.themeColor,
    borderRadius: " 50px 0    0 50px",
    overflow: "hidden",
  };

  const tweetContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingLeft: 60,
  };
  return (
    <Card style={{ marginTop: 20, width: 700 }}>
      <div style={profileContainer}>
        <div style={profileInnerContainer}>
          <div style={circleStyle} />
          <text>Arjun Reddy</text>
        </div>
        <text style={{ color: "grey" }}>10 min ago</text>
      </div>
      <div style={tweetContainer}>
        <div
          style={{
            width: "85%",
            display: "flex",
            paddingRight: 15,
            paddingLeft: 30,
            paddingBottom: 25,
          }}
        >
          <text style={{ lineHeight: 1, textAlign: "justify" }}>
            {props.tweet}
          </text>
        </div>
        <div style={halfCircle} />
      </div>
    </Card>
  );
}

export default FeedCard;
