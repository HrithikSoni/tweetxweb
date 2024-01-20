import React, { useEffect, useState } from "react";
import FollowCard from "../components/FollowCard";
import UsersDataService from "../services/users.services";
import {
  selectUserFollowingList,
  selectUserNotFollowingList,
} from "../store/selectors";
import db from "../data/db.json";

function FollowersPage() {
  const [data, setData] = useState(followerData);

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

  const notFollowingUsersData = selectUserNotFollowingList(db, data);
  // console.log(notFollowingUsersData, "yyyyyyyyyyy");

  return (
    <div>
      {notFollowingUsersData.map((i, e) => (
        <div key={e}>
          <FollowCard name={i.name} id={i.id} />
        </div>
      ))}
    </div>
  );
}

const followerData = [
  {
    id: 1,
    name: "Sandy",
  },
  {
    id: 2,
    name: "Radhika",
  },
];

export default FollowersPage;
