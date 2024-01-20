import React, { useEffect, useState } from "react";
import FollowingCard from "../components/FollowingCard";
import db from "../data/db.json";
import UsersDataService from "../services/users.services";
import { selectUserFollowingList } from "../store/selectors";

function FollowingPage() {
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
  console.log(followingUsersData, "yyyyyyyyyyy");

  return (
    <div>
      {followingUsersData.map((i, e) => (
        <div key={e}>
          <FollowingCard name={i.name} id={i.id} />
        </div>
      ))}
    </div>
  );
}

export default FollowingPage;
