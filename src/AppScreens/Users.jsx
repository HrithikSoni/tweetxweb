import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonAppBar from "../components/AppBar";
import FollowCard from "../components/FollowCard";
import FollowingCard from "../components/FollowingCard";
import db from "../data/db.json";
import UsersDataService from "../services/users.services";
import {
  selectUserFollowingList,
  selectUserNotFollowingList,
} from "../store/selectors";

function Users() {
  const [data, setData] = useState([]);

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
      setData(updatedData[0]?.following);
    } catch (error) {
      console.log(error.message);
    }
  }

  const followingUsersData = selectUserFollowingList(db, data);
  const notFollowingUsersData = selectUserNotFollowingList(db, data);
  // console.log(followingUsersData, "iiiiiii");
  return (
    <div>
      <ButtonAppBar />
      <Container maxWidth={"md"}>
        <div>
          {notFollowingUsersData.map((i, e) => (
            <div key={e}>
              <FollowCard name={i.name} id={i.id} />
            </div>
          ))}
        </div>
        <div>
          {followingUsersData.map((i, e) => (
            <div key={e}>
              <FollowingCard name={i.name} id={i.id} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

const followingData = [
  {
    id: 1,
    name: "Sandy",
  },
  {
    id: 2,
    name: "Radhika",
  },
];

const followerData = [
  {
    id: 2,
    name: "Kabir Sigh",
  },
  {
    id: 3,
    name: "Rocky Bhai",
  },
];

export default Users;
